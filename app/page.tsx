"use client";

import {
  Shield,
  Container,
  Layers,
  GitBranch,
  Users,
  FileCheck,
  Terminal,
  Lock,
  Zap,
  Github,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Activity
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 grid-bg opacity-30" />
      <div className="scan-line" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-astra-cyan/20 bg-astra-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-astra-cyan" />
            <span className="font-mono text-2xl font-bold text-astra-cyan glow-text">
              ASTRAFORGE
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="font-mono text-sm hover:text-astra-cyan transition-colors">
              FEATURES
            </a>
            <a href="#security" className="font-mono text-sm hover:text-astra-cyan transition-colors">
              SECURITY
            </a>
            <a href="https://github.com/astraforge" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-astra-cyan transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GITHUB
            </a>
            <a href="#" className="btn-primary">
              GET STARTED
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 border border-astra-green/50 bg-astra-green/10">
                  <span className="terminal-text text-xs uppercase tracking-wider">
                    {'>'} SECURE EXECUTION ENGINE
                  </span>
                </div>
                <h1 className="font-mono text-6xl font-bold leading-tight">
                  <span className="text-gradient-cyan glow-text">SANDBOXED</span>
                  <br />
                  <span className="text-astra-text">EXECUTION FOR</span>
                  <br />
                  <span className="text-astra-cyan glow-text">AI AGENTS</span>
                </h1>
                <p className="text-xl text-astra-text-dim font-body leading-relaxed">
                  Isolated, ephemeral environments that allow LLM-based agents to run Python,
                  shell commands, and workflows securely—without risking your host system.
                </p>
              </div>

              <div className="flex gap-4">
                <a href="#" className="btn-primary flex items-center gap-2">
                  GET STARTED <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="btn-secondary flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> VIEW DOCS
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-astra-green" />
                  <span className="font-mono text-sm text-astra-text-dim">Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-astra-green" />
                  <span className="font-mono text-sm text-astra-text-dim">Production Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-astra-green" />
                  <span className="font-mono text-sm text-astra-text-dim">Self-Hosted</span>
                </div>
              </div>
            </div>

            {/* Terminal Demo */}
            <div className={`${mounted ? 'animate-slide-in' : 'opacity-0'} delay-300`}>
              <div className="container-box p-6 relative">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-astra-cyan/20">
                  <Terminal className="w-4 h-4 text-astra-green" />
                  <span className="font-mono text-sm text-astra-green">EXECUTION_LOG.sh</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-astra-amber/50 border border-astra-amber"></div>
                    <div className="w-3 h-3 rounded-full bg-astra-green/50 border border-astra-green"></div>
                  </div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-astra-green">$</span>
                    <span className="text-astra-text-dim">docker run astraforge/sandbox</span>
                  </div>
                  <div className="text-astra-cyan pl-4">
                    {'>'} Initializing secure workspace...
                  </div>
                  <div className="text-astra-green pl-4">
                    ✓ Sandbox container started [ID: a7f3c2]
                  </div>
                  <div className="text-astra-green pl-4">
                    ✓ Network isolation enabled
                  </div>
                  <div className="text-astra-green pl-4">
                    ✓ Resource limits applied
                  </div>
                  <div className="text-astra-cyan pl-4 mt-2">
                    {'>'} Running agent code...
                  </div>
                  <div className="text-astra-text-dim pl-4">
                    [AGENT] Analyzing stack trace...
                  </div>
                  <div className="text-astra-text-dim pl-4">
                    [AGENT] Generating patch...
                  </div>
                  <div className="text-astra-green pl-4">
                    ✓ Fix applied successfully
                  </div>
                  <div className="text-astra-green pl-4">
                    ✓ Tests passing (24/24)
                  </div>
                  <div className="text-astra-cyan pl-4">
                    {'>'} Creating merge request...
                  </div>
                  <div className="text-astra-green pl-4 font-bold animate-pulse-glow">
                    ✓ READY FOR REVIEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "SECURE BY DEFAULT", value: "100%" },
              { icon: Activity, label: "UPTIME SLA", value: "99.9%" },
              { icon: Zap, label: "AVG STARTUP", value: "<2s" },
              { icon: Lock, label: "ISOLATION LAYERS", value: "4" }
            ].map((stat, idx) => (
              <div key={idx} className="container-box p-6 text-center hover:border-glow transition-all duration-300">
                <stat.icon className="w-8 h-8 text-astra-cyan mx-auto mb-3" />
                <div className="font-mono text-3xl font-bold text-astra-cyan mb-2">{stat.value}</div>
                <div className="font-mono text-xs text-astra-text-dim uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border border-astra-cyan/50 bg-astra-cyan/10 mb-6">
              <span className="terminal-text text-xs uppercase tracking-wider">
                {'>'} CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-mono text-5xl font-bold text-astra-cyan glow-text mb-4">
              FEATURES
            </h2>
            <p className="text-xl text-astra-text-dim max-w-3xl mx-auto">
              Everything you need to safely execute AI agent workloads in production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Terminal,
                title: "ASTRA CONTROL",
                description: "Autonomous single-agent execution for debugging, testing, and patching in isolated workspaces with merge-ready output."
              },
              {
                icon: Layers,
                title: "DEVFACTORY",
                description: "Multi-agent orchestration system executing complex development workflows with human approval gates and state transitions."
              },
              {
                icon: AlertTriangle,
                title: "AUTO-REMEDIATION",
                description: "Glitchtip/Sentry alerts forward stack traces directly into workspaces for automatic patch generation and MR creation."
              },
              {
                icon: Users,
                title: "SHARED WORKSPACES",
                description: "Human reviewers and LLM executors attach to the same streamed workspace, replay runs, and resume conversations."
              },
              {
                icon: FileCheck,
                title: "BUILT FOR REVIEW",
                description: "Diff previews, run logs, and chat summaries keep reviewers informed before changes land in production."
              },
              {
                icon: Container,
                title: "FLEXIBLE DEPLOYMENT",
                description: "Supports Docker for local dev, Kubernetes for production, with gVisor and Kata/Firecracker isolation options."
              }
            ].map((feature, idx) => (
              <div key={idx} className="container-box p-8 hover:border-glow transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-astra-cyan mb-4 group-hover:text-astra-green transition-colors" />
                <h3 className="font-mono text-xl font-bold text-astra-cyan mb-3 group-hover:glow-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-astra-text-dim leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Levels Section */}
      <section id="security" className="relative z-10 py-20 px-6 bg-astra-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border border-astra-green/50 bg-astra-green/10 mb-6">
              <span className="terminal-text text-xs uppercase tracking-wider">
                {'>'} CHOOSE YOUR ISOLATION TIER
              </span>
            </div>
            <h2 className="font-mono text-5xl font-bold text-astra-green glow-text mb-4">
              SECURITY LEVELS
            </h2>
            <p className="text-xl text-astra-text-dim max-w-3xl mx-auto">
              Match the isolation tier to your deployment surface and workload profile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "LEVEL 1",
                title: "DOCKER",
                icon: Container,
                description: "Isolated Docker network with default seccomp and PID caps. Perfect for local dev.",
                features: ["Single Host", "Fast Startup", "Dev/Testing"]
              },
              {
                level: "LEVEL 2",
                title: "KUBERNETES",
                icon: Layers,
                description: "Namespaced pods with network policies and service accounts across nodes.",
                features: ["Multi-Node", "Production", "Auto-Scaling"]
              },
              {
                level: "LEVEL 3",
                title: "GVISOR",
                icon: Shield,
                description: "User-space kernel filtering syscalls, shrinking host kernel attack surface.",
                features: ["Syscall Filter", "Enhanced Security", "Multi-Tenant"]
              },
              {
                level: "LEVEL 4",
                title: "KATA/FIRECRACKER",
                icon: Lock,
                description: "Lightweight microVMs providing strongest tenant isolation for regulated environments.",
                features: ["MicroVM", "Maximum Isolation", "Compliance"]
              }
            ].map((tier, idx) => (
              <div key={idx} className="container-box p-8 hover:border-glow transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-astra-green/20 border-l border-b border-astra-green/50">
                  <span className="font-mono text-xs text-astra-green font-bold">{tier.level}</span>
                </div>
                <tier.icon className="w-12 h-12 text-astra-cyan mb-4 mt-6 group-hover:text-astra-green transition-colors" />
                <h3 className="font-mono text-2xl font-bold text-astra-cyan mb-3 group-hover:glow-text transition-all">
                  {tier.title}
                </h3>
                <p className="text-astra-text-dim mb-6 leading-relaxed">
                  {tier.description}
                </p>
                <div className="space-y-2">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-astra-green flex-shrink-0" />
                      <span className="font-mono text-sm text-astra-text-dim">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 border border-astra-amber/50 bg-astra-amber/10 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-astra-amber">
                {'>'} REAL-WORLD APPLICATIONS
              </span>
            </div>
            <h2 className="font-mono text-5xl font-bold text-astra-amber glow-text mb-4">
              USE CASES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ERROR REMEDIATION",
                description: "Stack traces from Sentry/Glitchtip automatically trigger agent fixes with merge requests."
              },
              {
                title: "CODE REVIEW",
                description: "AI agents analyze PRs, run tests, and provide feedback in isolated environments."
              },
              {
                title: "TESTING AUTOMATION",
                description: "Execute comprehensive test suites with AI-generated test cases in secure sandboxes."
              },
              {
                title: "DEBUGGING ASSISTANCE",
                description: "Agents reproduce bugs, analyze logs, and propose fixes without affecting production."
              },
              {
                title: "SECURITY SCANNING",
                description: "Run vulnerability assessments and dependency audits in controlled environments."
              },
              {
                title: "CI/CD INTEGRATION",
                description: "Integrate AI-powered quality gates into your deployment pipeline safely."
              }
            ].map((useCase, idx) => (
              <div key={idx} className="container-box p-8 hover:border-glow transition-all duration-300">
                <div className="font-mono text-sm text-astra-amber mb-3 uppercase tracking-wider">
                  {`[${String(idx + 1).padStart(2, '0')}]`}
                </div>
                <h3 className="font-mono text-xl font-bold text-astra-cyan mb-3">
                  {useCase.title}
                </h3>
                <p className="text-astra-text-dim leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="container-box p-12 text-center border-glow">
            <h2 className="font-mono text-4xl font-bold text-astra-cyan glow-text mb-6">
              READY TO DEPLOY?
            </h2>
            <p className="text-xl text-astra-text-dim mb-8 max-w-2xl mx-auto">
              Get started with AstraForge in minutes. Open source, self-hosted, and production-ready.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="btn-primary flex items-center gap-2">
                GET STARTED <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="btn-secondary flex items-center gap-2">
                <Github className="w-4 h-4" /> VIEW ON GITHUB
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-astra-cyan/20">
              <p className="font-mono text-sm text-astra-text-dim">
                $ docker compose up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-astra-cyan/20 bg-astra-black/80 backdrop-blur-md py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-astra-cyan" />
                <span className="font-mono text-xl font-bold text-astra-cyan">ASTRAFORGE</span>
              </div>
              <p className="text-sm text-astra-text-dim leading-relaxed">
                Sandboxed execution engine for AI agents. Secure, isolated, production-ready.
              </p>
            </div>

            <div>
              <h4 className="font-mono font-bold text-astra-cyan mb-4 uppercase text-sm">PRODUCT</h4>
              <ul className="space-y-2 text-sm text-astra-text-dim">
                <li><a href="#features" className="hover:text-astra-cyan transition-colors">Features</a></li>
                <li><a href="#security" className="hover:text-astra-cyan transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono font-bold text-astra-cyan mb-4 uppercase text-sm">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-astra-text-dim">
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono font-bold text-astra-cyan mb-4 uppercase text-sm">COMMUNITY</h4>
              <ul className="space-y-2 text-sm text-astra-text-dim">
                <li><a href="#" className="hover:text-astra-cyan transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-astra-cyan transition-colors">Contributing</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-astra-cyan/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-astra-text-dim">
              © 2024 AstraForge. Open Source under MIT License.
            </p>
            <div className="flex gap-6 text-sm text-astra-text-dim">
              <a href="#" className="hover:text-astra-cyan transition-colors">Privacy</a>
              <a href="#" className="hover:text-astra-cyan transition-colors">Terms</a>
              <a href="#" className="hover:text-astra-cyan transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
