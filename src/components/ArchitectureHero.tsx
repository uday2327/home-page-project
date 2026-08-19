import React, { useState } from 'react';
import { Layers, ShieldCheck, Box, Server, Database, GitBranch, Cpu, CheckCircle2 } from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
  spec: string;
}

export const ArchitectureHero: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('docker');

  const techDetails: Record<string, TechNode> = {
    docker: {
      id: 'docker',
      name: 'Docker',
      category: 'Containerization',
      icon: Box,
      description: 'Consistent application packaging across environments.',
      spec: 'Multi-stage OCI build · Distroless base · Zero root privileges',
    },
    kubernetes: {
      id: 'kubernetes',
      name: 'Kubernetes',
      category: 'Orchestration',
      icon: Cpu,
      description: 'Orchestrate, scale and recover containerized workloads.',
      spec: 'Auto-healing pods · HPA scaling · Zero-downtime rolling deploys',
    },
    terraform: {
      id: 'terraform',
      name: 'Terraform',
      category: 'Infrastructure as Code',
      icon: Layers,
      description: 'Reproducible infrastructure through code.',
      spec: 'State-locked S3/GCS backend · Declarative cloud topology · Drift audit',
    },
    puppet: {
      id: 'puppet',
      name: 'Puppet',
      category: 'Configuration Management',
      icon: Server,
      description: 'Keep system configuration consistent through desired state.',
      spec: 'Idempotent manifests · Continuous drift correction · Security baselines',
    },
    security: {
      id: 'security',
      name: 'Security',
      category: 'DevSecOps & IAM',
      icon: ShieldCheck,
      description: 'Security controls integrated throughout delivery.',
      spec: 'Trivy image scanning · Least-privilege IAM · Automated secret rotation',
    },
    database: {
      id: 'database',
      name: 'PostgreSQL',
      category: 'Managed Data Layer',
      icon: Database,
      description: 'Reliable application data with recovery built in.',
      spec: 'Automated snapshots · Replica + WAL · Failover-ready storage',
    },
  };

  const activeTech = techDetails[selectedTech];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 sm:mt-14">
      {/* Product Mockup Container */}
      <div className="product-card rounded-2xl overflow-hidden border border-[#18181B]/10 bg-[#FFFFFF] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        
        {/* Mock Window Top Bar */}
        <div className="px-4 py-3 bg-[#F8F7F2] border-b border-[#18181B]/8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#18181B]/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#18181B]/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#18181B]/20 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-[#71717A] tracking-tight font-medium">
              production-blueprint.live.spec
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
              TOPOLOGY SYNCED
            </span>
          </div>
        </div>

        {/* Blueprint Visual Canvas */}
        <div className="p-5 sm:p-8 bg-[#FAF9F5]/50">
          
          {/* Main Flow Representation */}
          <div className="space-y-4">
            
            {/* Top Node: Application Source */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#18181B]/8 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#18181B]/5 text-[#18181B]">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider">Source Layer</div>
                  <div className="text-sm font-semibold text-[#18181B]">Application Code · React + Node.js</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#52525B] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-[#18181B]/6">
                v2.4.0-prod
              </span>
            </div>

            {/* Down Connector */}
            <div className="flex justify-center">
              <div className="h-4 w-px bg-[#18181B]/20" />
            </div>

            {/* Cloud Platform Node */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#18181B]/8 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#2563EB]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider">Cloud Fabric</div>
                  <div className="text-sm font-semibold text-[#18181B]">Cloud Platform & Virtual Private Cloud (VPC)</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#2563EB] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60 font-medium">
                Multi-AZ Isolated
              </span>
            </div>

            {/* Split Connectors */}
            <div className="relative py-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <div className="h-3 w-px bg-[#18181B]/20" />
                </div>
                <div className="flex justify-center">
                  <div className="h-3 w-px bg-[#18181B]/20" />
                </div>
              </div>
            </div>

            {/* Dual Pillars: Container Packaging + Managed Database */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Container / Packaging */}
                  <button
                onClick={() => setSelectedTech('docker')}
                    aria-pressed={selectedTech === 'docker'}
                className={`text-left p-3.5 rounded-xl transition-all border ${
                  selectedTech === 'docker'
                    ? 'bg-white border-[#2563EB] ring-1 ring-[#2563EB]/20 shadow-xs'
                    : 'bg-white/80 border-[#18181B]/8 hover:border-[#18181B]/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs font-mono font-semibold text-[#18181B]">Container (Docker)</span>
                  </div>
                  {selectedTech === 'docker' && <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />}
                </div>
                <p className="text-xs text-[#52525B]">Standardized runtime artifact</p>
              </button>

              {/* Database Node */}
              <button
                onClick={() => setSelectedTech('database')}
                aria-pressed={selectedTech === 'database'}
                className={`w-full text-left p-3.5 rounded-xl transition-all border ${
                  selectedTech === 'database'
                    ? 'bg-white border-[#2563EB] ring-1 ring-[#2563EB]/20 shadow-xs'
                    : 'bg-white/80 border-[#18181B]/8 hover:border-[#18181B]/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs font-mono font-semibold text-[#18181B]">Database (PostgreSQL)</span>
                  </div>
                  {selectedTech === 'database' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  ) : (
                    <span className="text-[10px] font-mono text-[#71717A] bg-[#FAF9F5] px-1.5 py-0.5 rounded border border-[#18181B]/6">
                      Replica + WAL
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#52525B]">Automated snapshot & failover</p>
              </button>
            </div>

            {/* Down Connector */}
            <div className="flex justify-center">
              <div className="h-4 w-px bg-[#18181B]/20" />
            </div>

            {/* Kubernetes Orchestration Layer */}
            <button
              onClick={() => setSelectedTech('kubernetes')}
              aria-pressed={selectedTech === 'kubernetes'}
              className={`w-full text-left p-3.5 rounded-xl transition-all border ${
                selectedTech === 'kubernetes'
                  ? 'bg-white border-[#2563EB] ring-1 ring-[#2563EB]/20 shadow-xs'
                  : 'bg-white/80 border-[#18181B]/8 hover:border-[#18181B]/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-xs font-mono font-semibold text-[#18181B]">Kubernetes Cluster Orchestration</span>
                </div>
                {selectedTech === 'kubernetes' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                ) : (
                  <span className="text-[10px] font-mono text-[#71717A]">Click to inspect</span>
                )}
              </div>
              <p className="text-xs text-[#52525B]">Production cluster · Ingress controller · Service discovery · Pod autoscaler</p>
            </button>

            {/* Down Connector */}
            <div className="flex justify-center">
              <div className="h-4 w-px bg-[#18181B]/20" />
            </div>

            {/* Production Destination */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#18181B] text-[#FAF9F5] shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
                <div>
                  <div className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">Live Target</div>
                  <div className="text-sm font-semibold tracking-tight">Secure, High-Availability Production</div>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/20">
                99.99% SLA
              </span>
            </div>

          </div>

          {/* Section 11: Interactive Exploration Tabs */}
          <div className="mt-6 pt-5 border-t border-[#18181B]/8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] font-medium">
                Select Platform Layer:
              </span>
              <span className="text-[11px] text-[#71717A] font-mono">
                Interactive Architecture Inspector
              </span>
            </div>

            {/* Node Trigger Pills */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(techDetails) as Array<keyof typeof techDetails>).map((key) => {
                const node = techDetails[key];
                const isSelected = selectedTech === key;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedTech(node.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#18181B] text-[#FAF9F5] shadow-xs'
                        : 'bg-white text-[#52525B] hover:text-[#18181B] border border-[#18181B]/8 hover:border-[#18181B]/20'
                    }`}
                  >
                    <span>{node.name}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />}
                  </button>
                );
              })}
            </div>

            {/* Inspection Output Panel */}
            <div className="mt-3.5 p-3.5 rounded-xl bg-white border border-[#18181B]/8 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-[#18181B]">{activeTech.name}</span>
                    <span className="text-[10px] text-[#71717A] font-mono px-1.5 py-0.2 bg-[#FAF9F5] rounded border border-[#18181B]/6">
                      {activeTech.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#18181B] font-medium leading-relaxed">
                    {activeTech.description}
                  </p>
                  <p className="text-[11px] font-mono text-[#52525B] mt-1.5">
                    <span className="text-[#2563EB] font-semibold">Configured:</span> {activeTech.spec}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
