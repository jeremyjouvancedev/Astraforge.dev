# AstraForge Landing Page

Marketing landing page for AstraForge - Sandboxed execution engine for AI agents.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Lucide React** for icons

## Design Aesthetic

**Terminal Brutalism meets Cyber Grid** - A distinctive design featuring:
- Monospace typography (JetBrains Mono + IBM Plex Mono)
- Deep space black with electric cyan/green accents
- Animated grid backgrounds and scan lines
- Container/box motifs representing sandboxing
- Terminal-inspired interactions
- Geometric, sharp elements emphasizing isolation

## Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Deployment

### Docker + Portainer

See `docs/portainer-deployment.md` for detailed instructions on deploying to your NAS via Portainer.

Quick start:

```bash
# Build the image
docker build -t astraforge-landing:latest .

# Run with docker-compose
docker compose up -d
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── Dockerfile              # Production container
├── docker-compose.yml      # Portainer deployment
└── README.md
```

## Customization

### Colors

Edit colors in `tailwind.config.ts`:

```ts
colors: {
  'astra-black': '#0a0a0f',
  'astra-cyan': '#00f0ff',
  'astra-green': '#00ff41',
  // ...
}
```

### Content

Main content is in `app/page.tsx`. Update sections:
- Hero text and CTAs
- Features list
- Security levels
- Use cases
- Footer links

## License

MIT License - See main AstraForge repo for details.
