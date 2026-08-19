import React, { useState } from 'react';
import { Code, Hammer, FlaskConical, ShieldAlert, Package, Rocket, Activity, Gauge } from 'lucide-react';

interface LifecycleStage {
  id: string;
  step: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  details: string;
  metrics: string;
}

export const ProductionLifecycle: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: LifecycleStage[] = [
    {
      id: 'code',
      step: '01',
      title: 'CODE',
      icon: Code,
      shortDesc: 'Version-controlled repository & PR gates',
      details: 'Strict branch protection, semantic commit conventions, and peer reviews.',
      metrics: 'GitOps trigger < 200ms',
    },
    {
      id: 'build',
      step: '02',
      title: 'BUILD',
      icon: Hammer,
      shortDesc: 'Hermetic compilation & artifact gen',
      details: 'Deterministic builds utilizing layer caching and isolated runners.',
      metrics: 'Zero cache-poisoning risk',
    },
    {
      id: 'test',
      step: '03',
      title: 'TEST',
      icon: FlaskConical,
      shortDesc: 'Automated unit & integration suites',
      details: 'Parallelized test matrix covering regression, contracts, and APIs.',
      metrics: '100% automated gate',
    },
    {
      id: 'secure',
      step: '04',
      title: 'SECURE',
      icon: ShieldAlert,
      shortDesc: 'Static analysis & vulnerability audit',
      details: 'Automated SAST, SCA dependency checking, and secret leak prevention.',
      metrics: 'Zero High/Critical CVEs',
    },
    {
      id: 'package',
      step: '05',
      title: 'PACKAGE',
      icon: Package,
      shortDesc: 'Immutable OCI container images',
      details: 'Minimal base images with cosign cryptographic signing & registry pushing.',
      metrics: 'Signed distroless images',
    },
    {
      id: 'deploy',
      step: '06',
      title: 'DEPLOY',
      icon: Rocket,
      shortDesc: 'Zero-downtime rolling release',
      details: 'Canary / blue-green rollouts with automated rollback triggers on failure.',
      metrics: '0ms downtime rollouts',
    },
    {
      id: 'observe',
      step: '07',
      title: 'OBSERVE',
      icon: Activity,
      shortDesc: 'Real-time telemetry & traces',
      details: 'Structured log aggregation, Prometheus metrics, and distributed tracing.',
      metrics: 'Sub-second anomaly alert',
    },
    {
      id: 'scale',
      step: '08',
      title: 'SCALE',
      icon: Gauge,
      shortDesc: 'Elastic traffic-driven scaling',
      details: 'Horizontal Pod Autoscaling (HPA) and cluster node provisioning on demand.',
      metrics: '30s dynamic scale-out',
    },
  ];

  return (
    <section id="production-lifecycle" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-medium text-[#2563EB] tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            THE PRODUCTION LAYER
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Your application is only the beginning.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Production requires infrastructure, delivery automation, security, observability and reliable operations working together.
          </p>
        </div>

        {/* Horizontal Desktop / Vertical Mobile Lifecycle Matrix */}
        <div className="mt-12">
          
          {/* Desktop Stepper (Horizontal) */}
          <div className="hidden lg:grid grid-cols-8 gap-2 bg-[#FFFFFF] p-2.5 rounded-2xl border border-[#18181B]/8 shadow-2xs">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`group text-left p-3.5 rounded-xl transition-all relative ${
                    isActive
                      ? 'bg-[#FAF9F5] border border-[#18181B]/15 shadow-2xs'
                      : 'hover:bg-[#FAF9F5]/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono text-[#71717A]">{stage.step}</span>
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#71717A] group-hover:text-[#18181B]'}`} />
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#18181B] mb-1">
                    {stage.title}
                  </div>
                  <div className="text-[11px] text-[#52525B] line-clamp-2 leading-snug">
                    {stage.shortDesc}
                  </div>

                  {isActive && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2563EB] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Stepper (Vertical Scroll / Stack) */}
          <div className="lg:hidden flex flex-col gap-2">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#2563EB] ring-1 ring-[#2563EB]/20 shadow-xs'
                      : 'bg-white/80 border-[#18181B]/8'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-50 text-[#2563EB]' : 'bg-[#18181B]/5 text-[#71717A]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#18181B]">
                          {stage.step} · {stage.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#2563EB]">{stage.metrics}</span>
                      </div>
                      <p className="text-xs text-[#52525B] mt-1">{stage.shortDesc}</p>
                      {isActive && (
                        <p className="text-xs text-[#18181B] mt-2 pt-2 border-t border-[#18181B]/6 font-medium">
                          {stage.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector for Selected Stage (Desktop view) */}
          <div className="hidden lg:block mt-4 p-5 rounded-2xl bg-white border border-[#18181B]/8 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-mono font-bold text-sm">
                  {stages[activeStage].step}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-mono font-bold text-[#18181B]">
                      STAGE {stages[activeStage].step}: {stages[activeStage].title} ARCHITECTURE
                    </h3>
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                      AUTOMATED
                    </span>
                  </div>
                  <p className="text-xs text-[#52525B] mt-0.5">
                    {stages[activeStage].details}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Target Guarantee</span>
                <span className="text-xs font-mono font-semibold text-[#18181B]">{stages[activeStage].metrics}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
