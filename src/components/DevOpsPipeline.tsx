import React, { useState } from 'react';
import { 
  GitBranch, 
  Hammer, 
  FlaskConical, 
  ShieldCheck, 
  Box, 
  Archive, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
} from 'lucide-react';

interface PipelineStage {
  id: string;
  name: string;
  icon: React.ElementType;
  status: string;
  summary: string;
  command: string;
  output: string[];
}

export const DevOpsPipeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('git');

  const stages: PipelineStage[] = [
    {
      id: 'git',
      name: 'GIT',
      icon: GitBranch,
      status: 'Passed',
      summary: 'Main branch merge trigger & commit verification',
      command: 'git log -1 --format="%h - %s (%an)"',
      output: [
        'Commit: 9f4a82b (chore: update api gateway routing)',
        'Signed-off-by: platform-lead <infra@stackpilot.dev>',
        'Trigger: Push event on main branch validated',
      ],
    },
    {
      id: 'build',
      name: 'BUILD',
      icon: Hammer,
      status: 'Passed',
      summary: 'Deterministic hermetic compilation & layer cache',
      command: 'turbo run build --filter=web --cache-dir=.cache',
      output: [
        'Cached build outputs matched remote hash: 4a2b9...',
        'Typescript compiled without errors in 1.42s',
        'Production bundle minified: 142.6 kB (gzipped)',
      ],
    },
    {
      id: 'test',
      name: 'TEST',
      icon: FlaskConical,
      status: 'Passed',
      summary: 'Unit, integration, and API contract test suite',
      command: 'vitest run --coverage --reporter=json',
      output: [
        'PASS test/unit/auth.test.ts (24 tests)',
        'PASS test/integration/db.test.ts (18 tests)',
        'Coverage: 96.4% statements, 94.1% branches',
      ],
    },
    {
      id: 'security',
      name: 'SECURITY',
      icon: ShieldCheck,
      status: 'Passed',
      summary: 'SAST static scan & automated dependency CVE audit',
      command: 'trivy fs --severity HIGH,CRITICAL --security-checks vuln,config .',
      output: [
        'Scanning node_modules and lockfile...',
        'Total dependencies audited: 1,248 packages',
        'Vulnerabilities found: 0 HIGH, 0 CRITICAL',
      ],
    },
    {
      id: 'docker',
      name: 'DOCKER',
      icon: Box,
      status: 'Passed',
      summary: 'Multi-stage rootless container packaging',
      command: 'docker buildx build --platform linux/amd64 -t app:v2.4.0 .',
      output: [
        '#1 [internal] load build definition from Dockerfile',
        '#2 copying distroless node20 base image',
        '#3 exporting image sha256:d82e18... 48.2 MB',
      ],
    },
    {
      id: 'registry',
      name: 'REGISTRY',
      icon: Archive,
      status: 'Passed',
      summary: 'OCI artifact publishing & Cosign cryptographic signature',
      command: 'cosign sign --key k8s://secrets/cosign.key cr.stackpilot.dev/app:v2.4.0',
      output: [
        'Pushed image: cr.stackpilot.dev/app:v2.4.0 (digest: sha256:d82e18)',
        'Generated attestation SBOM (Software Bill of Materials)',
        'Cosign keyless signature confirmed valid on Rekor transparency log',
      ],
    },
    {
      id: 'kubernetes',
      name: 'KUBERNETES',
      icon: Cpu,
      status: 'Passed',
      summary: 'Declarative GitOps sync & progressive canary rollout',
      command: 'kubectl apply -k ./overlays/production --prune',
      output: [
        'deployment.apps/stackpilot-api created',
        'horizontalpodautoscaler.autoscaling/api-hpa unchanged',
        'service/api-svc routing ready on cluster IP: 10.96.14.22',
      ],
    },
    {
      id: 'production',
      name: 'PRODUCTION',
      icon: CheckCircle2,
      status: 'Live',
      summary: 'Traffic switch, telemetry confirmation, zero downtime',
      command: 'curl -s -o /dev/null -w "%{http_code}" https://api.stackpilot.dev/healthz',
      output: [
        'HTTP Response 200 OK',
        'Active Pods: 6 / 6 Healthy',
        'Canary promotion complete · 100% live traffic serving',
      ],
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section id="devops-pipeline" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-medium text-[#2563EB] tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            SECTION 05 · DEVOPS AUTOMATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Automation that moves with your code.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Every commit passes through an automated verification pipeline that builds, tests, secures, packages, and deploys without human bottleneck.
          </p>
        </div>

        {/* Interactive Pipeline Track */}
        <div className="bg-white rounded-2xl border border-[#18181B]/8 p-5 sm:p-7 shadow-2xs">
          
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#18181B]/6">
            <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
              Interactive Pipeline Runner
            </span>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ● 8 / 8 STAGES AUTOMATED
            </span>
          </div>

          {/* Desktop Pipeline Horizontal Flow */}
          <div className="hidden md:flex items-center justify-between gap-1 relative py-3">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStageId === stage.id;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    onClick={() => setActiveStageId(stage.id)}
                    aria-pressed={isSelected}
                    className={`flex-1 flex flex-col items-center p-2.5 rounded-xl transition-all relative border ${
                      isSelected
                        ? 'bg-[#FAF9F5] border-[#2563EB] ring-1 ring-[#2563EB]/20 shadow-2xs'
                        : 'border-transparent hover:bg-[#FAF9F5]/70 hover:border-[#18181B]/10'
                    }`}
                  >
                    <div className={`p-2 rounded-lg mb-1.5 transition-colors ${
                      isSelected ? 'bg-blue-50 text-[#2563EB]' : 'bg-[#18181B]/5 text-[#52525B]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#18181B]">
                      {stage.name}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-600 mt-0.5">
                      ✓ {stage.status}
                    </span>
                  </button>

                  {idx < stages.length - 1 && (
                    <div className="text-[#18181B]/20 px-0.5">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Pipeline Flow (Grid / Stack) */}
          <div className="md:hidden grid grid-cols-4 gap-2 mb-4">
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isSelected = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  aria-pressed={isSelected}
                  className={`p-2 rounded-lg text-center border transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                      : 'bg-[#FAF9F5] border-[#18181B]/8 text-[#52525B]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 mx-auto mb-1" />
                  <span className="text-[10px] font-mono font-bold block">{stage.name}</span>
                </button>
              );
            })}
          </div>

          {/* Simulated stage output for the portfolio demo */}
          <div className="mt-4 rounded-xl bg-[#18181B] text-[#FAF9F5] p-4 sm:p-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="text-[#FAF9F5] font-semibold text-[11px]">
                  DEMO STAGE INSPECTOR: {activeStage.name}
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                DEMO STATUS: {activeStage.status.toUpperCase()}
              </span>
            </div>

            <div className="mb-3">
              <span className="text-[#A1A1AA] text-[11px]">Description: </span>
              <span className="text-white text-[11px]">{activeStage.summary}</span>
            </div>

            <div className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-1.5">
              <div className="text-[#3B82F6] flex items-center gap-2">
                <span className="text-white/40">$</span>
                <span>{activeStage.command}</span>
              </div>
              <div className="space-y-1 pt-1 text-[#A1A1AA] text-[11px]">
                {activeStage.output.map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
