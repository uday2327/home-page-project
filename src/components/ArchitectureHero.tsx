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
      {/* Blueprint Visual Canvas */}
      <div className="product-card rounded-2xl overflow-hidden border border-[#18181B]/10 bg-[#FFFFFF] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="p-5 sm:p-8 bg-[#FAF9F5]/50">
          
          {/* Main Flow Representation */}
          <div className="space-y-4">
            
            {/* Top Node: Application Source */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#18181B]/8 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#18181B]/5 text-[#18181B]">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#18181B]">Application Code</div>
                  <div className="text-xs font-mono text-[#52525B] mt-0.5">React + Node.js</div>
                </div>
              </div>
            </div>

            {/* Down Connector */}
            <div className="flex justify-center">
              <div className="h-4 w-px bg-[#18181B]/20" />
            </div>

            {/* Cloud Platform Node */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#18181B]/8 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#2563EB]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#18181B]">Cloud Platform</div>
                  <div className="text-xs font-mono text-[#52525B] mt-0.5">Virtual Private Cloud (VPC)</div>
                </div>
              </div>
              <span className="text-[11px] text-[#71717A]">Multi-AZ</span>
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
                    <span className="text-sm font-semibold text-[#18181B]">Docker</span>
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
                    <span className="text-sm font-semibold text-[#18181B]">PostgreSQL</span>
                  </div>
                  {selectedTech === 'database' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  ) : null}
                </div>
                <p className="text-xs text-[#52525B]">Persistent relational storage</p>
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
                  <span className="text-sm font-semibold text-[#18181B]">Kubernetes</span>
                </div>
                {selectedTech === 'kubernetes' && <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />}
              </div>
              <p className="text-xs text-[#52525B]">Container orchestration, scaling and service discovery</p>
            </button>

          </div>

          {/* Interactive layer details */}
          <div className="mt-8 pt-6 border-t border-[#18181B]/8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#18181B]">
                Architecture layers
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
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
                  <div className="mb-1">
                    <span className="text-sm font-semibold text-[#18181B]">{activeTech.name}</span>
                    <span className="ml-2 text-xs text-[#71717A]">{activeTech.category}</span>
                  </div>
                  <p className="text-sm text-[#18181B] leading-relaxed">
                    {activeTech.description}
                  </p>
                  <p className="text-xs font-mono text-[#52525B] mt-2">
                    <span className="text-[#2563EB] font-medium">Details:</span> {activeTech.spec}
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
