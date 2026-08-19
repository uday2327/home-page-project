import React, { useState } from 'react';
import { Cpu, RefreshCw, Plus, Minus, CheckCircle2, Network, Eye, KeyRound } from 'lucide-react';

interface Pod {
  id: number;
  name: string;
  status: 'Running' | 'Healing' | 'Terminating';
  cpu: string;
  memory: string;
}

export const KubernetesExperience: React.FC = () => {
  const [pods, setPods] = useState<Pod[]>([
    { id: 1, name: 'api-web-7f89b-1', status: 'Running', cpu: '12m', memory: '112Mi' },
    { id: 2, name: 'api-web-7f89b-2', status: 'Running', cpu: '18m', memory: '118Mi' },
    { id: 3, name: 'api-web-7f89b-3', status: 'Running', cpu: '14m', memory: '110Mi' },
    { id: 4, name: 'api-web-7f89b-4', status: 'Running', cpu: '22m', memory: '124Mi' },
    { id: 5, name: 'api-web-7f89b-5', status: 'Running', cpu: '16m', memory: '115Mi' },
    { id: 6, name: 'api-web-7f89b-6', status: 'Running', cpu: '19m', memory: '120Mi' },
  ]);

  const killPod = (id: number) => {
    setPods((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: 'Healing' } : p))
    );

    setTimeout(() => {
      setPods((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: 'Running' } : p))
      );
    }, 1200);
  };

  const scaleUp = () => {
    if (pods.length < 8) {
      const nextId = pods.length + 1;
      setPods([...pods, { id: nextId, name: `api-web-7f89b-${nextId}`, status: 'Running', cpu: '15m', memory: '110Mi' }]);
    }
  };

  const scaleDown = () => {
    if (pods.length > 3) {
      setPods(pods.slice(0, -1));
    }
  };

  const topics = [
    { title: 'Rolling Deployments', desc: 'Deploy new versions with zero downtime through graduated pod replacements.', icon: RefreshCw },
    { title: 'Dynamic Scaling', desc: 'Horizontal Pod Autoscaler (HPA) scales pods based on CPU, memory, or HTTP metrics.', icon: Cpu },
    { title: 'Self-Healing Health Checks', desc: 'Liveness and readiness probes replace crashed or unresponsive containers in seconds.', icon: CheckCircle2 },
    { title: 'Service Discovery & Ingress', desc: 'Automatic internal DNS and Ingress controller traffic routing without hardcoded IPs.', icon: Network },
    { title: 'ConfigMaps & Secrets', desc: 'Inject environment configurations and encrypted credentials without image rebuilds.', icon: KeyRound },
    { title: 'Cluster Observability', desc: 'Native Prometheus metrics, node exporters, and cluster event stream tracking.', icon: Eye },
  ];

  return (
    <section id="kubernetes-experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-medium text-[#2563EB] tracking-wider uppercase mb-2">
            KUBERNETES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Run containers without babysitting them.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Production Kubernetes clusters engineered for hands-off resiliency, automatic pod failover, zero-downtime rolling upgrades, and elasticity.
          </p>
        </div>

        {/* Polished Kubernetes Cluster Visual */}
        <div className="product-card rounded-2xl p-6 sm:p-8 bg-white border border-[#18181B]/8 shadow-2xs">
          
          {/* Cluster Top Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#18181B]/6">
            <div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider">
                  Kubernetes cluster
                </span>
              </div>
              <span className="text-xs text-[#52525B] font-mono mt-0.5 block">
                API workload · {pods.length} replicas
              </span>
            </div>

            {/* Interactive Cluster Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={scaleDown}
                disabled={pods.length <= 3}
                className="p-1.5 rounded-lg border border-[#18181B]/10 hover:bg-[#FAF9F5] text-[#18181B] disabled:opacity-40 font-mono text-xs flex items-center gap-1"
                title="Scale In Replica"
              >
                <Minus className="w-3.5 h-3.5" />
                <span className="text-[11px]">Scale In</span>
              </button>

              <button
                onClick={scaleUp}
                disabled={pods.length >= 8}
                className="p-1.5 rounded-lg border border-[#18181B]/10 hover:bg-[#FAF9F5] text-[#18181B] disabled:opacity-40 font-mono text-xs flex items-center gap-1"
                title="Scale Out Replica"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="text-[11px]">Scale Out</span>
              </button>

              <span className="text-[10px] text-emerald-700 font-medium">
                <span className="mr-1">●</span>{pods.filter(p => p.status === 'Running').length}/{pods.length} ready
              </span>
            </div>
          </div>

          {/* Pod Grid with Click-to-Kill Self-Healing Demo */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
              Pod health
            </span>
            <span className="text-[11px] font-mono text-[#2563EB]">
              Self-healing enabled
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pods.map((pod) => (
              <div
                key={pod.id}
                onClick={() => killPod(pod.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer group text-left ${
                  pod.status === 'Healing'
                    ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-300/30'
                    : 'bg-[#FAF9F5]/70 border-[#18181B]/8 hover:border-[#2563EB] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#71717A]">#{pod.id}</span>
                  {pod.status === 'Healing' ? (
                    <RefreshCw className="w-3 h-3 text-amber-600 animate-spin" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </div>
                <div className="text-xs font-mono font-bold text-[#18181B] truncate">
                  {pod.name}
                </div>
                <div className="mt-2 pt-2 border-t border-[#18181B]/6 flex items-center justify-between text-[10px] font-mono text-[#71717A]">
                  <span>{pod.cpu}</span>
                  <span>{pod.memory}</span>
                </div>
                <div className="mt-1 text-[9px] font-mono text-center">
                  {pod.status === 'Healing' ? (
                    <span className="text-amber-700 font-semibold">Self-Healing...</span>
                  ) : (
                    <span className="text-[#71717A] group-hover:text-[#2563EB]">Click to kill</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#18181B]/6">
            <h3 className="text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-4">
              Kubernetes principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topics.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#18181B]/6">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
                      <div className="text-xs font-mono font-bold text-[#18181B]">
                        {t.title}
                      </div>
                    </div>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
