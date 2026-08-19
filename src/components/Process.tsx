import React from 'react';
import { Search, Compass, Cpu, Gauge } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      headline: 'Application & Scale Baseline',
      desc: 'Understand the application, team workflows, throughput requirements, and scaling horizons.',
      icon: Search,
      deliverables: 'Architecture audit · Threat matrix · Scale profile',
    },
    {
      number: '02',
      title: 'ARCHITECT',
      headline: 'Declarative Blueprint Design',
      desc: 'Design cloud foundations, automated delivery pipelines, zero-trust security boundaries, and reliability targets.',
      icon: Compass,
      deliverables: 'VPC topology · IaC schema · Security controls',
    },
    {
      number: '03',
      title: 'AUTOMATE',
      headline: 'Infrastructure & Pipeline Build',
      desc: 'Build reproducible infrastructure with Terraform, system configuration with Puppet, and CI/CD with GitOps.',
      icon: Cpu,
      deliverables: 'Terraform modules · Puppet manifests · CI/CD gates',
    },
    {
      number: '04',
      title: 'OPERATE',
      headline: 'Continuous Production Telemetry',
      desc: 'Monitor health metrics, optimize cloud expenditures, tune autoscaling thresholds, and continuously harden production.',
      icon: Gauge,
      deliverables: 'Prometheus metrics · SRE runbooks · SLA alerts',
    },
  ];

  return (
    <section id="how-we-work" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-medium text-[#2563EB] tracking-wider uppercase mb-2">
            HOW WE WORK
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            How we work.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            A disciplined four-phase engineering approach that transitions software from local development to hardened production without surprises.
          </p>
        </div>

        {/* Visual Lifecycle Banner */}
        <div className="p-3.5 rounded-xl bg-white border border-[#18181B]/8 mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="text-[#71717A] uppercase">Our process</span>
          <div className="flex flex-wrap items-center gap-2 text-[#18181B] font-bold">
            <span>01 DISCOVER</span>
            <span className="text-[#71717A]">→</span>
            <span>02 ARCHITECT</span>
            <span className="text-[#71717A]">→</span>
            <span>03 AUTOMATE</span>
            <span className="text-[#71717A]">→</span>
            <span>04 OPERATE</span>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="product-card rounded-2xl p-5 sm:p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#71717A]">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6 text-[#18181B]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-1">
                    {step.title}
                  </h3>
                  <h4 className="text-sm font-bold text-[#18181B] tracking-tight mb-2">
                    {step.headline}
                  </h4>
                  <p className="text-xs text-[#52525B] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#18181B]/6">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase block mb-1">
                    Deliverable
                  </span>
                  <span className="text-[11px] font-mono text-[#18181B] font-medium">
                    {step.deliverables}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
