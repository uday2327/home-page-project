import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Globe,
} from 'lucide-react';

export const BlueprintBuilder: React.FC = () => {
  // Wizard States
  const [appType, setAppType] = useState<string>('SaaS Platform');
  const [frontend, setFrontend] = useState<string>('React');
  const [backend, setBackend] = useState<string>('Node.js');
  const [database, setDatabase] = useState<string>('PostgreSQL');
  
  const [priorities, setPriorities] = useState<string[]>([
    'Scalability',
    'Security',
    'Automated deployments',
    'Observability',
  ]);

  // Generation status: 'idle' | 'generating' | 'ready'
  const [status, setStatus] = useState<'idle' | 'generating' | 'ready'>('idle');
  const [genPhase, setGenPhase] = useState<'Analyzing' | 'Designing' | 'Ready'>('Analyzing');
  const [expandedRow, setExpandedRow] = useState<string | null>('docker');

  const appTypes = [
    'Web Application',
    'SaaS Platform',
    'API',
    'AI Application',
    'E-commerce',
  ];

  const frontends = ['React', 'Next.js', 'Vue.js', 'TypeScript SPA'];
  const backends = ['Node.js', 'Python (FastAPI)', 'Go', 'Java / Spring'];
  const databases = ['PostgreSQL', 'MongoDB', 'Redis Cluster', 'MySQL'];

  const priorityOptions = [
    'Scalability',
    'Security',
    'Automated deployments',
    'Observability',
  ];

  const togglePriority = (p: string) => {
    if (priorities.includes(p)) {
      if (priorities.length > 1) {
        setPriorities(priorities.filter((item) => item !== p));
      }
    } else {
      setPriorities([...priorities, p]);
    }
  };

  const handleGenerate = () => {
    setStatus('generating');
    setGenPhase('Analyzing');

    setTimeout(() => {
      setGenPhase('Designing');
      setTimeout(() => {
        setGenPhase('Ready');
        setStatus('ready');
      }, 700);
    }, 700);
  };

  const techExplanations = [
    {
      id: 'docker',
      tech: 'Docker',
      summary: 'Package the application consistently across environments.',
      details: 'Hermetic OCI container builds ensure bit-for-bit runtime reproducibility between local dev, staging QA, and production clusters.',
    },
    {
      id: 'kubernetes',
      tech: 'Kubernetes',
      summary: 'Orchestrate, scale and manage containerized workloads.',
      details: 'Automates scheduling, zero-downtime rolling updates, self-healing pod recovery, and horizontal pod scaling under load.',
    },
    {
      id: 'puppet',
      tech: 'Puppet',
      summary: 'Maintain desired system configuration and reduce configuration drift.',
      details: 'Enforces declarative state on underlying nodes and bastion hosts, eliminating unmanaged manual changes and configuration drift.',
    },
    {
      id: 'terraform',
      tech: 'Terraform',
      summary: 'Provision reproducible infrastructure using version-controlled configuration.',
      details: 'Complete VPCs, subnets, IAM policies, and cloud resources represented as auditable, versioned code with state locking.',
    },
    {
      id: 'cicd',
      tech: 'CI/CD',
      summary: 'Automate testing and delivery from commit to deployment.',
      details: 'Parallel test suites, container image security gates, and GitOps synchronization to prevent broken builds from ever reaching production.',
    },
    {
      id: 'observability',
      tech: 'Observability',
      summary: 'Understand application and infrastructure behavior through metrics, logs and traces.',
      details: 'End-to-end distributed tracing with OpenTelemetry, aggregated structured logging, and Prometheus alerting.',
    },
  ];

  return (
    <section id="blueprint-builder" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-medium text-[#2563EB] tracking-wider uppercase mb-2">
            BUILD YOUR ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Design your production stack.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Tell us what you're building. Explore how it could move from application code to secure production.
          </p>
        </div>

        {/* Wizard & Configurator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Wizard Controls */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#18181B]/8 shadow-2xs space-y-6">
            
            {/* STEP 1 */}
            <div>
              <div className="mb-3">
                <span className="text-[11px] font-medium text-[#71717A] tracking-wider block mb-1">
                  STEP 1
                </span>
                <span className="text-sm font-semibold text-[#18181B]">
                  What are you building?
                </span>
              </div>
              <div className="space-y-1.5">
                {appTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => { setAppType(type); if (status === 'ready') setStatus('idle'); }}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                      appType === type
                        ? 'bg-[#18181B] text-white border-[#18181B]'
                        : 'bg-[#FAF9F5]/60 text-[#18181B] border-transparent hover:border-[#18181B]/15 hover:bg-[#FAF9F5]'
                    }`}
                  >
                    <span>{type}</span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      appType === type ? 'border-white bg-[#2563EB]' : 'border-[#18181B]/20'
                    }`}>
                      {appType === type && <Check className="w-2.5 h-2.5 text-white" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2 */}
            <div className="pt-5 border-t border-[#18181B]/6">
              <div className="mb-3">
                <span className="text-[11px] font-medium text-[#71717A] tracking-wider block mb-1">
                  STEP 2
                </span>
                <span className="text-sm font-semibold text-[#18181B]">
                  Your technology stack
                </span>
              </div>

              <div className="space-y-3">
                {/* Frontend Select */}
                <div>
                  <label className="text-[11px] text-[#71717A] mb-1 block">Frontend framework</label>
                  <select
                    value={frontend}
                    onChange={(e) => { setFrontend(e.target.value); if (status === 'ready') setStatus('idle'); }}
                    aria-label="Frontend Framework"
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-lg px-3 py-1.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    {frontends.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* Backend Select */}
                <div>
                  <label className="text-[11px] text-[#71717A] mb-1 block">Backend runtime</label>
                  <select
                    value={backend}
                    onChange={(e) => { setBackend(e.target.value); if (status === 'ready') setStatus('idle'); }}
                    aria-label="Backend Runtime"
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-lg px-3 py-1.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    {backends.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* Database Select */}
                <div>
                  <label className="text-[11px] text-[#71717A] mb-1 block">Database</label>
                  <select
                    value={database}
                    onChange={(e) => { setDatabase(e.target.value); if (status === 'ready') setStatus('idle'); }}
                    aria-label="Primary Database"
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-lg px-3 py-1.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    {databases.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="pt-5 border-t border-[#18181B]/6">
              <div className="mb-3">
                <span className="text-[11px] font-medium text-[#71717A] tracking-wider block mb-1">
                  STEP 3
                </span>
                <span className="text-sm font-semibold text-[#18181B]">
                  What matters most?
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {priorityOptions.map((p) => {
                  const isChecked = priorities.includes(p);
                  return (
                    <button
                      key={p}
                      onClick={() => { togglePriority(p); if (status === 'ready') setStatus('idle'); }}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border flex items-center gap-2 ${
                        isChecked
                          ? 'bg-blue-50/70 border-blue-200 text-[#18181B] font-medium'
                          : 'bg-[#FAF9F5]/40 border-transparent text-[#71717A] hover:bg-[#FAF9F5]'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-[#18181B]/20 bg-white'
                      }`}>
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                      <span className="truncate">{p}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTA button */}
            <button
              onClick={handleGenerate}
              disabled={status === 'generating'}
              className="w-full py-3 px-4 rounded-xl bg-[#18181B] text-[#FAF9F5] text-xs font-semibold tracking-wide hover:bg-[#27272A] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-75 cursor-pointer"
            >
              {status === 'generating' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#3B82F6]" />
                  <span>{genPhase.toUpperCase()} ARCHITECTURE...</span>
                </>
              ) : (
                <>
                  <span>Generate Production Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {/* Right Column: Blueprint Result & Topology */}
          <div className="lg:col-span-7">
            {status === 'generating' ? (
              /* Generating animation state */
              <div className="bg-white rounded-2xl border border-[#18181B]/8 p-12 text-center shadow-2xs">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] mx-auto flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 animate-spin" />
                </div>
                <h3 className="text-base font-mono font-bold text-[#18181B] tracking-tight">
                  Synthesizing Blueprint
                </h3>
                <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-[#52525B]">
                  <span className={genPhase === 'Analyzing' ? 'text-[#2563EB] font-bold' : 'text-[#71717A]'}>
                    1. Analyzing Stack
                  </span>
                  <span>→</span>
                  <span className={genPhase === 'Designing' ? 'text-[#2563EB] font-bold' : 'text-[#71717A]'}>
                    2. Designing Topology
                  </span>
                  <span>→</span>
                  <span className={genPhase === 'Ready' ? 'text-emerald-600 font-bold' : 'text-[#71717A]'}>
                    3. Ready
                  </span>
                </div>
              </div>
            ) : (
              /* Resulting production architecture */
              <div className="bg-white rounded-2xl border border-[#18181B]/8 overflow-hidden shadow-2xs">
                
                {/* Result Header */}
                <div className="px-5 py-3.5 bg-[#F8F7F2] border-b border-[#18181B]/8 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-medium text-[#71717A] uppercase tracking-wider block">Production architecture</span>
                    <span className="text-sm font-semibold text-[#18181B]">
                      {appType}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ready
                  </span>
                </div>

                {/* Topology Canvas */}
                <div className="p-6 bg-[#FAF9F5]/40 space-y-4">
                  
                  {/* Users */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-[#18181B]/10 shadow-2xs font-mono text-xs font-medium text-[#18181B]">
                      <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>USERS</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-3 w-px bg-[#18181B]/20" />
                  </div>

                  {/* CDN */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm p-2.5 rounded-xl bg-white border border-[#18181B]/10 text-center shadow-2xs">
                      <div className="text-[10px] text-[#71717A] uppercase">Global CDN</div>
                      <div className="text-xs font-medium text-[#18181B]">Cloudflare / CloudFront</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-3 w-px bg-[#18181B]/20" />
                  </div>

                  {/* Load Balancer */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm p-2.5 rounded-xl bg-white border border-[#2563EB]/40 ring-1 ring-[#2563EB]/10 text-center shadow-2xs">
                      <div className="text-[10px] text-[#2563EB] uppercase font-semibold">Load balancer</div>
                      <div className="text-xs font-medium text-[#18181B]">Application Load Balancer</div>
                      <div className="text-[10px] text-[#71717A] mt-0.5">TLS termination</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-3 w-px bg-[#18181B]/20" />
                  </div>

                  {/* App Pods Dual Grid */}
                  <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                    <div className="p-3 rounded-xl bg-white border border-[#18181B]/10 text-center shadow-2xs">
                        <div className="text-[10px] text-emerald-600 font-medium">● Healthy</div>
                      <div className="text-xs font-mono font-semibold text-[#18181B] mt-0.5">{frontend} + {backend}</div>
                        <div className="text-[10px] text-[#71717A]">Port 8080</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#18181B]/10 text-center shadow-2xs">
                        <div className="text-[10px] text-emerald-600 font-medium">● Healthy</div>
                      <div className="text-xs font-mono font-semibold text-[#18181B] mt-0.5">{frontend} + {backend}</div>
                        <div className="text-[10px] text-[#71717A]">Port 8080</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-3 w-px bg-[#18181B]/20" />
                  </div>

                  {/* Database Node */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm p-3 rounded-xl bg-white border border-[#18181B]/10 text-center shadow-2xs">
                      <div className="text-[10px] text-[#71717A] uppercase">Database</div>
                      <div className="text-xs font-medium text-[#18181B] flex items-center justify-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#18181B]" />
                        <span>{database} (Primary + Replica Sync)</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#71717A] text-center pt-1">
                    Built around your selected stack and priorities.
                  </p>

                </div>

                {/* Supporting infrastructure */}
                <div className="p-5 bg-white border-t border-[#18181B]/8 space-y-3">
                  <div className="text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2">
                    Supporting Production Infrastructure
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6">
                      <span className="text-[10px] text-[#71717A] uppercase block">Delivery Pipeline</span>
                      <span className="text-[#18181B] font-medium text-[11px]">
                        GitHub → CI/CD → Tests → Security → Docker → Registry → Deployment
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6">
                      <span className="text-[10px] text-[#71717A] uppercase block">Infrastructure as Code</span>
                      <span className="text-[#18181B] font-medium text-[11px]">
                        Terraform (Declarative Multi-AZ Spec)
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6">
                      <span className="text-[10px] text-[#71717A] uppercase block">Configuration Management</span>
                      <span className="text-[#18181B] font-medium text-[11px]">
                        Puppet (Desired-State Drift Remediation)
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6">
                      <span className="text-[10px] text-[#71717A] uppercase block">Orchestration Tier</span>
                      <span className="text-[#18181B] font-medium text-[11px]">
                        Kubernetes (Auto-healing & HPA)
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6">
                      <span className="text-[10px] text-[#71717A] uppercase block">Observability</span>
                      <span className="text-[#18181B] font-medium text-[11px]">
                        Metrics + Logs + Traces + Alerts
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#18181B]/6">
                      <span className="text-[10px] text-[#71717A] uppercase block">Security & Policy</span>
                      <span className="text-[#18181B] font-medium text-[11px]">
                        IAM + Secrets + Scanning + Policies
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Technology explanation */}
            <div className="mt-8 bg-white rounded-2xl border border-[#18181B]/8 p-5 shadow-2xs">
              <h3 className="text-sm font-mono font-bold text-[#18181B] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                Why this architecture?
              </h3>

              <div className="divide-y divide-[#18181B]/6">
                {techExplanations.map((item) => {
                  const isExpanded = expandedRow === item.id;
                  return (
                    <div key={item.id} className="py-2.5">
                      <button
                        onClick={() => setExpandedRow(isExpanded ? null : item.id)}
                        className="w-full flex items-center justify-between text-left group"
                      >
                        <div>
                          <span className="text-xs font-mono font-bold text-[#18181B] mr-2">
                            {item.tech}
                          </span>
                          <span className="text-xs text-[#52525B]">
                            {item.summary}
                          </span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#71717A]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#71717A] group-hover:text-[#18181B]" />
                        )}
                      </button>

                      {isExpanded && (
                        <p className="mt-2 text-xs text-[#52525B] leading-relaxed pl-2 border-l-2 border-[#2563EB] font-normal bg-[#FAF9F5]/60 p-2 rounded-r-lg">
                          {item.details}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
