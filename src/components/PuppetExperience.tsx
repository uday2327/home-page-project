import React, { useState } from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';

export const PuppetExperience: React.FC = () => {
  const [driftFixed, setDriftFixed] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const handleToggleDrift = () => {
    if (driftFixed) {
      setDriftFixed(false);
    } else {
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        setDriftFixed(true);
      }, 600);
    }
  };

  const capabilities = [
    { title: 'Desired-State Configuration', desc: 'Declare the target state of every system attribute in version-controlled manifests.' },
    { title: 'Configuration Management', desc: 'Centralized catalog compilation ensuring reproducible machine states across environments.' },
    { title: 'Server Standardization', desc: 'Eliminate snowflake servers and unmanaged manual tweaks through automated agent runs.' },
    { title: 'Configuration Drift Prevention', desc: 'Continuously detects unauthorized system changes and restores verified baseline.' },
    { title: 'Package & Service Management', desc: 'Manages OS kernel packages, runtime daemons, security patches, and services.' },
    { title: 'Security Baselines & Hardening', desc: 'Applies CIS benchmark compliance, SSH key hardening, and firewall policies across nodes.' },
  ];

  return (
    <section id="puppet-experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-medium text-[#2563EB] tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            SECTION 19 · CONFIGURATION MANAGEMENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Keep infrastructure consistent.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Without automated configuration, servers gradually drift into fragile snowflakes. We use Puppet desired-state enforcement to guarantee total fleet consistency.
          </p>
        </div>

        {/* Before vs After Interactive Comparison Visual */}
        <div className="product-card rounded-2xl p-6 sm:p-8 bg-white border border-[#18181B]/8 shadow-2xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#18181B]/6">
            <div>
              <span className="text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider">
                Fleet State Orchestration
              </span>
              <p className="text-xs text-[#52525B] mt-0.5">
                Toggle below to simulate configuration drift vs Puppet enforcement.
              </p>
            </div>

            <button
              onClick={handleToggleDrift}
              disabled={isSyncing}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 border ${
                driftFixed
                  ? 'bg-[#FAF9F5] text-[#18181B] border-[#18181B]/15 hover:bg-[#FAF9F5]/80'
                  : 'bg-[#18181B] text-white border-[#18181B] hover:bg-[#27272A]'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{driftFixed ? 'Simulate Manual Drift' : 'Apply Puppet Desired State'}</span>
            </button>
          </div>

          {/* Visualization Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Without Configuration Automation */}
            <div className={`p-5 rounded-xl border transition-all ${
              !driftFixed ? 'bg-amber-50/40 border-amber-300 ring-1 ring-amber-300/30' : 'bg-[#FAF9F5]/40 border-[#18181B]/8 opacity-75'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#71717A] uppercase">
                  Without Configuration Automation
                </span>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300">
                  DRIFT DETECTED
                </span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-[#18181B]/8 flex items-center justify-between">
                  <span>Server 1 (Prod-Web-01)</span>
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[11px]">
                    Config A · Node 18.2
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#18181B]/8 flex items-center justify-between">
                  <span>Server 2 (Prod-Web-02)</span>
                  <span className="text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200 text-[11px]">
                    Config B · Node 20.1 (Drift)
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#18181B]/8 flex items-center justify-between">
                  <span>Server 3 (Prod-Web-03)</span>
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[11px]">
                    Config C · Missing Patch
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#71717A] mt-3 font-mono">
                ⚠ Risk: Inconsistent behavior, unexpected deployment failures, unpatched CVEs.
              </p>
            </div>

            {/* Right: With Puppet Desired State */}
            <div className={`p-5 rounded-xl border transition-all ${
              driftFixed ? 'bg-blue-50/30 border-[#2563EB]/40 ring-1 ring-[#2563EB]/15' : 'bg-[#FAF9F5]/40 border-[#18181B]/8 opacity-75'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">
                  With Puppet Desired State
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ● 100% IN CONVERGENCE
                </span>
              </div>
              
              <div className="p-2.5 mb-2.5 rounded-lg bg-white border border-[#2563EB]/20 text-center font-mono text-xs">
                <span className="text-[10px] text-[#71717A] uppercase block">Declarative Manifest</span>
                <span className="font-bold text-[#18181B]">DESIRED STATE (manifest.pp) → PUPPET AGENT</span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-center justify-between">
                  <span>Server 1 (Prod-Web-01)</span>
                  <span className="text-emerald-700 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Config Standard v2.4
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-center justify-between">
                  <span>Server 2 (Prod-Web-02)</span>
                  <span className="text-emerald-700 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Config Standard v2.4
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-center justify-between">
                  <span>Server 3 (Prod-Web-03)</span>
                  <span className="text-emerald-700 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Config Standard v2.4
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[#52525B] mt-3 font-mono">
                ✓ Guaranteed: Exact package version, CIS hardening baseline, and SSH policies.
              </p>
            </div>

          </div>

          {/* Puppet Capabilities Grid */}
          <div className="mt-8 pt-6 border-t border-[#18181B]/6">
            <h3 className="text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-4">
              Puppet Architectural Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {capabilities.map((cap) => (
                <div key={cap.title} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#18181B]/6">
                  <div className="text-xs font-mono font-bold text-[#18181B] mb-1">
                    {cap.title}
                  </div>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
