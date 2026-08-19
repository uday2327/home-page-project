import React from 'react';
import { Cloud, GitMerge, ShieldCheck, ArrowRight } from 'lucide-react';

export const SolutionPillars: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'CLOUD & PLATFORM',
      headline: 'Build the foundation.',
      description: 'Cloud architectures and platform foundations designed for scalability, resilience and developer velocity.',
      icon: Cloud,
      accent: '#2563EB',
      capabilities: [
        'Cloud Architecture',
        'AWS · Azure · GCP',
        'Kubernetes Platforms',
        'Networking & VPC',
        'Load Balancing',
        'Databases & Storage',
        'Global CDN',
        'Serverless Compute',
        'Infrastructure as Code',
        'Cost-Aware Architecture',
        'Disaster Recovery',
      ],
      ctaText: 'Explore Cloud & Platform',
      targetHref: '#cloud-architecture',
    },
    {
      number: '02',
      title: 'DEVOPS AUTOMATION',
      headline: 'Automate the path to production.',
      description: 'Replace repetitive operational work with reliable, repeatable delivery workflows.',
      icon: GitMerge,
      accent: '#2563EB',
      capabilities: [
        'CI/CD Pipelines',
        'Docker Containerization',
        'Kubernetes Workloads',
        'Terraform IaC',
        'Puppet Config Mgmt',
        'Ansible Automation',
        'GitHub Actions & Jenkins',
        'GitOps Declarative Delivery',
        'Deployment Automation',
        'Environment Standardization',
      ],
      ctaText: 'Explore DevOps Automation',
      targetHref: '#devops-pipeline',
    },
    {
      number: '03',
      title: 'SECURITY & RELIABILITY',
      headline: 'Secure every layer.',
      description: 'Build security, observability and resilience directly into the software delivery lifecycle.',
      icon: ShieldCheck,
      accent: '#2563EB',
      capabilities: [
        'DevSecOps Pipelines',
        'Least-Privilege IAM',
        'Secrets Management',
        'Container & K8s Security',
        'Infrastructure Security',
        'Vulnerability Scanning',
        'Monitoring & Alerting',
        'Centralized Logging',
        'Distributed Tracing',
        'Automated Backups & DR',
        'Reliability Engineering (SRE)',
      ],
      ctaText: 'Explore Security & Reliability',
      targetHref: '#security-layer',
    },
  ];

  // Problem-to-technology mapping
  const problemMappings = [
    { problem: 'Configuration Management', tech: 'Puppet', role: 'Idempotent state enforcement & drift prevention' },
    { problem: 'Containerization', tech: 'Docker', role: 'Hermetic packaging and minimal base image security' },
    { problem: 'Orchestration', tech: 'Kubernetes', role: 'Declarative scaling, auto-recovery & traffic routing' },
    { problem: 'Infrastructure Provisioning', tech: 'Terraform', role: 'Version-controlled, reproducible cloud topology' },
    { problem: 'Delivery & CI/CD', tech: 'GitHub Actions', role: 'Automated test matrices and container dispatch' },
    { problem: 'Observability & Telemetry', tech: 'Prometheus / Grafana / OTel', role: 'High-cardinality metrics, traces & active alerting' },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-[#2563EB] tracking-wider uppercase mb-2">
            CORE CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Three disciplines. One unified production standard.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            We operate across the entire lifecycle to ensure applications deploy reliably, scale effortlessly, and remain resilient under production load.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="product-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#18181B]/20"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-[#71717A] tracking-wider font-semibold">
                      {pillar.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#FAF9F5] border border-[#18181B]/6 text-[#18181B]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-xs font-semibold tracking-wider text-[#71717A] uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <h4 className="text-lg font-bold text-[#18181B] tracking-tight mb-3">
                    {pillar.headline}
                  </h4>
                  <p className="text-xs text-[#52525B] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-4 border-t border-[#18181B]/6 space-y-2 mb-6">
                    <div className="text-[11px] text-[#71717A] uppercase tracking-wider mb-2">
                      Capabilities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="inline-flex items-center text-[11px] font-mono text-[#18181B] bg-[#FAF9F5] px-2 py-0.5 rounded-md border border-[#18181B]/6"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pillar Action Link */}
                <a
                  href={pillar.targetHref}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#18181B]/6 text-xs font-mono font-medium text-[#18181B] hover:text-[#2563EB] transition-colors group-hover:translate-x-0.5"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Problem-first technology architecture */}
        <div className="mt-16 pt-12 border-t border-[#18181B]/8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-medium text-[#71717A] uppercase tracking-wider block">
                Engineering Discipline
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#18181B] tracking-tight mt-1">
                Technology organized by the problem it solves
              </h3>
            </div>
            <span className="text-xs font-mono text-[#71717A]">
              Proven architectural tooling
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {problemMappings.map((item) => (
              <div
                key={item.problem}
                className="p-4 rounded-xl bg-white border border-[#18181B]/8 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                    {item.problem}
                  </div>
                  <div className="text-sm font-mono font-bold text-[#18181B] mt-0.5 mb-1.5">
                    {item.tech}
                  </div>
                </div>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
