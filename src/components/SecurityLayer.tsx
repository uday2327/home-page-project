import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCode, 
  Box, 
  Layers, 
  Eye, 
  Database, 
  Cpu, 
  CheckCircle2
} from 'lucide-react';

export const SecurityLayer: React.FC = () => {
  const [activeControl, setActiveControl] = useState<string>('iam');

  const lifecycleStages = [
    { name: 'CODE', control: 'Code Analysis & SAST', icon: FileCode },
    { name: 'BUILD', control: 'Dependency Checks (SCA)', icon: Box },
    { name: 'CONTAINER', control: 'Distroless & Image Scan', icon: Cpu },
    { name: 'INFRASTRUCTURE', control: 'IaC Policy & Checkov', icon: Layers },
    { name: 'RUNTIME', control: 'eBPF Runtime Monitoring', icon: Eye },
    { name: 'DATA', control: 'KMS Encryption at Rest', icon: Database },
  ];

  const controls = [
    {
      id: 'iam',
      title: 'Least-Privilege IAM',
      category: 'Identity',
      desc: 'Scoped role-based access controls with short-lived tokens and zero hardcoded credentials.',
      standard: 'Zero standing admin access',
    },
    {
      id: 'secrets',
      title: 'Automated Secrets Management',
      category: 'Credentials',
      desc: 'Integration with Vault and KMS for dynamic key injection and automated 30-day credential rotation.',
      standard: 'KMS envelope encryption',
    },
    {
      id: 'code-analysis',
      title: 'Static Code & Dependency Analysis',
      category: 'Pipeline Gate',
      desc: 'Automated blocking gates for CVE vulnerabilities, dependency drift, and credential leaks before merge.',
      standard: 'Block on High/Crit CVEs',
    },
    {
      id: 'container-sec',
      title: 'Container & Image Hardening',
      category: 'Packaging',
      desc: 'Minimal distroless base images, non-root user execution, and immutable Cosign digital signatures.',
      standard: 'Signed OCI artifacts',
    },
    {
      id: 'iac-scan',
      title: 'IaC Security Scanning',
      category: 'Infrastructure',
      desc: 'Automated Terraform policy validation verifying secure security groups, private subnets, and TLS.',
      standard: 'Checkov & tfsec enforcement',
    },
    {
      id: 'network',
      title: 'Zero-Trust Network Controls',
      category: 'Perimeter',
      desc: 'Private VPC subnets, strict egress filtering, mutual TLS (mTLS) service mesh, and WAF protection.',
      standard: 'Encrypted mTLS mesh',
    },
    {
      id: 'runtime',
      title: 'Runtime Anomaly Monitoring',
      category: 'Operations',
      desc: 'Kernel-level eBPF detection for unexpected binary executions, privilege escalations, and port scans.',
      standard: 'Real-time telemetry alert',
    },
    {
      id: 'encryption',
      title: 'End-to-End Encryption',
      category: 'Storage',
      desc: 'TLS 1.3 in transit with automated cert-manager renewal and AES-256 GCM encryption for all stored volumes.',
      standard: 'AES-256 & TLS 1.3',
    },
  ];

  const currentControl = controls.find((c) => c.id === activeControl) || controls[0];

  return (
    <section id="security-layer" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-medium text-[#2563EB] tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            SECTION 06 · DEVSECOPS & RESILIENCY
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Security isn't a final step.
          </h2>
          <p className="mt-2 text-xl sm:text-2xl text-[#52525B] font-medium tracking-tight">
            It's part of every step.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Security controls are engineered as an unbroken layer surrounding code, dependencies, containers, infrastructure, runtime, and persistence.
          </p>
        </div>

        {/* Security Surrounding Visual Wrapper */}
        <div className="product-card rounded-2xl p-6 sm:p-8 bg-white border border-[#18181B]/8 shadow-2xs">
          
          {/* Top Bar Banner: Continuous Security Perimeter */}
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold text-[#18181B]">
                PERIMETER: Continuous Security Envelope Active
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#2563EB] font-semibold">
              Zero-Trust Enforcement
            </span>
          </div>

          {/* Full Lifecycle Flow Wrapped in Security */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {lifecycleStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.name}
                  className="p-3 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8 text-center"
                >
                  <span className="text-[10px] font-mono text-[#71717A] block mb-1">
                    0{idx + 1}
                  </span>
                  <Icon className="w-4 h-4 mx-auto text-[#18181B] mb-1.5" />
                  <div className="text-xs font-mono font-bold text-[#18181B] mb-1">
                    {stage.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#2563EB] leading-tight">
                    {stage.control}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Security Controls Grid */}
          <div className="pt-6 border-t border-[#18181B]/6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider">
                Integrated Security Controls Matrix
              </span>
              <span className="text-[11px] font-mono text-[#71717A]">
                Click control to inspect standard
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {controls.map((item) => {
                const isSelected = activeControl === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveControl(item.id)}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#FAF9F5] border-[#2563EB] ring-1 ring-[#2563EB]/20 shadow-2xs'
                        : 'bg-white border-[#18181B]/8 hover:border-[#18181B]/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-[#71717A] uppercase">{item.category}</span>
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />}
                    </div>
                    <div className="text-xs font-mono font-bold text-[#18181B] mb-1">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-[#52525B] leading-snug">
                      {item.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Control Detail Bar */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="font-semibold text-[#18181B]">Active Standard: {currentControl.title}</span>
              </div>
              <span className="text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[11px] font-medium">
                {currentControl.standard}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
