# Deploying AstraForge Landing Page to Portainer

This guide walks you through deploying the AstraForge landing page to your NAS using Portainer.

## Prerequisites

- Portainer installed and running on your NAS
- Docker and Docker Compose available on your NAS
- SSH access to your NAS
- Git installed on your NAS (or ability to transfer files)

## Method 1: Deploy via Portainer Stacks (Recommended)

### Step 1: Prepare the Repository

On your development machine or directly on your NAS:

```bash
# Clone the repository (if not already done)
cd /path/to/your/repos
git clone <repository-url> Astraforge.dev
cd Astraforge.dev
```

### Step 2: Build the Docker Image

Option A - Build on your NAS:

```bash
# SSH into your NAS
ssh user@your-nas-ip

# Navigate to the project
cd /path/to/Astraforge.dev

# Build the image
docker build -t astraforge-landing:latest .
```

Option B - Build locally and transfer:

```bash
# Build on local machine
docker build -t astraforge-landing:latest .

# Save image to tar
docker save astraforge-landing:latest > astraforge-landing.tar

# Transfer to NAS
scp astraforge-landing.tar user@your-nas-ip:/tmp/

# SSH to NAS and load image
ssh user@your-nas-ip
docker load < /tmp/astraforge-landing.tar
rm /tmp/astraforge-landing.tar
```

### Step 3: Deploy via Portainer

1. **Open Portainer** in your browser (usually `http://your-nas-ip:9000`)

2. **Navigate to Stacks**:
   - Click on "Stacks" in the left sidebar
   - Click "Add stack"

3. **Configure the Stack**:
   - **Name**: `astraforge-landing`
   - **Build method**: Choose "Web editor"
   - Paste the contents of `docker-compose.yml`:

   ```yaml
   version: '3.8'

   services:
     astraforge-landing:
       image: astraforge-landing:latest
       container_name: astraforge-landing
       restart: unless-stopped
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
         - NEXT_TELEMETRY_DISABLED=1
       labels:
         - "com.centurylinklabs.watchtower.enable=true"
       networks:
         - astraforge-net
       healthcheck:
         test: ["CMD", "node", "-e", "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"]
         interval: 30s
         timeout: 10s
         retries: 3
         start_period: 40s

   networks:
     astraforge-net:
       driver: bridge
   ```

4. **Deploy**:
   - Click "Deploy the stack"
   - Wait for the deployment to complete

5. **Verify**:
   - Navigate to `http://your-nas-ip:3000`
   - You should see the AstraForge landing page

## Method 2: Deploy via Git Repository (Advanced)

If your Portainer has Git integration:

1. **Navigate to Stacks** → "Add stack"
2. Choose "Repository" as build method
3. Enter your Git repository URL
4. Specify the compose file path: `docker-compose.yml`
5. Deploy

## Method 3: Direct Docker Compose (Command Line)

If you prefer command-line deployment:

```bash
# SSH into your NAS
ssh user@your-nas-ip

# Navigate to project directory
cd /path/to/Astraforge.dev

# Build and start
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f
```

## Configuration Options

### Change Port

To use a different port (e.g., 8080 instead of 3000):

```yaml
ports:
  - "8080:3000"  # External:Internal
```

### Add Reverse Proxy

If using Traefik or Nginx Proxy Manager:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.astraforge.rule=Host(`astraforge.yourdomain.com`)"
  - "traefik.http.services.astraforge.loadbalancer.server.port=3000"
```

### Enable HTTPS (with Traefik)

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.astraforge.rule=Host(`astraforge.yourdomain.com`)"
  - "traefik.http.routers.astraforge.entrypoints=websecure"
  - "traefik.http.routers.astraforge.tls.certresolver=letsencrypt"
  - "traefik.http.services.astraforge.loadbalancer.server.port=3000"
```

## Updating the Deployment

### Method 1: Via Portainer UI

1. Navigate to **Stacks** → `astraforge-landing`
2. Click "Editor"
3. Make changes if needed
4. Click "Update the stack"
5. Select "Re-pull image and redeploy"

### Method 2: Rebuild Image

```bash
# SSH to NAS
ssh user@your-nas-ip
cd /path/to/Astraforge.dev

# Pull latest code
git pull

# Rebuild image
docker build -t astraforge-landing:latest .

# Restart via Portainer or CLI
docker compose up -d
```

### Method 3: Automated Updates with Watchtower

Add Watchtower to automatically update containers:

```yaml
services:
  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 3600 --label-enable
    restart: unless-stopped
```

Watchtower will check for updates hourly and redeploy containers with the label `com.centurylinklabs.watchtower.enable=true`.

## Monitoring

### Health Checks

The container includes a health check that verifies the service responds on port 3000.

View health status:

```bash
docker inspect --format='{{.State.Health.Status}}' astraforge-landing
```

### Logs

View logs via Portainer:
1. Navigate to **Containers**
2. Click on `astraforge-landing`
3. Click "Logs"

Or via command line:

```bash
docker logs -f astraforge-landing
```

## Troubleshooting

### Container Won't Start

Check logs:
```bash
docker logs astraforge-landing
```

Common issues:
- Port 3000 already in use → Change port mapping
- Image not found → Rebuild image
- Memory issues → Increase Docker memory allocation

### Page Not Loading

1. Check container status:
   ```bash
   docker ps -a
   ```

2. Check network connectivity:
   ```bash
   docker exec astraforge-landing wget -O- http://localhost:3000
   ```

3. Check firewall rules on NAS

### Performance Issues

Increase resources in Portainer:
1. Navigate to **Containers** → `astraforge-landing`
2. Click "Duplicate/Edit"
3. Under "Resources", adjust:
   - Memory limit: `512MB` → `1GB`
   - CPU limit: Increase as needed

## Backup & Restore

### Backup

No persistent data in this container, but backup your image:

```bash
docker save astraforge-landing:latest | gzip > astraforge-landing-backup.tar.gz
```

### Restore

```bash
gunzip -c astraforge-landing-backup.tar.gz | docker load
```

## Security Recommendations

1. **Use HTTPS**: Configure reverse proxy with SSL
2. **Restrict Access**: Use firewall rules or VPN
3. **Regular Updates**: Keep base images updated
4. **Monitor Logs**: Check for suspicious activity
5. **Non-root User**: Image already runs as non-root (nextjs user)

## Additional Resources

- [Portainer Documentation](https://docs.portainer.io/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## Support

For issues specific to the landing page, open an issue in the repository.
For Portainer issues, consult [Portainer documentation](https://docs.portainer.io/).
