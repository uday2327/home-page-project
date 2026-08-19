import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const ProjectIntake: React.FC = () => {
  const [appType, setAppType] = useState<string>('Web Application');
  const [stage, setStage] = useState<string>('Development');
  const [cloud, setCloud] = useState<string>('AWS');
  const [scale, setScale] = useState<string>('Growing');
  const [message, setMessage] = useState<string>('');
  
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Cloud Architecture',
    'CI/CD',
    'Docker',
    'Kubernetes',
    'Infrastructure as Code',
    'Security',
    'Monitoring',
  ]);

  const [submitted, setSubmitted] = useState<boolean>(false);

  const needsList = [
    'Cloud Architecture',
    'CI/CD',
    'Docker',
    'Kubernetes',
    'Infrastructure as Code',
    'Security',
    'Monitoring',
  ];

  const toggleNeed = (item: string) => {
    if (selectedNeeds.includes(item)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== item));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="project-intake" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-medium text-[#2563EB] tracking-wider uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            SECTION 11 & 28 · PROJECT INTAKE & SCOPING
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Tell us what you're building.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            We don't do generic pricing tiers. Every production system has distinct throughput, compliance, and reliability demands. Request an architecture review to get an engineering roadmap tailored to your stack.
          </p>
        </div>

        {/* Section 28: Pricing Philosophy Disclaimer Box */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-[#18181B]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span className="text-[#18181B] font-semibold">Honest Engineering Scoping:</span>
            <span className="text-[#52525B]">No arbitrary $499/$999 packages. Custom architecture proposals only.</span>
          </div>
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
            Zero Obligation
          </span>
        </div>

        {/* Form Container */}
        <div className="product-card rounded-2xl bg-white p-6 sm:p-10 border border-[#18181B]/8 shadow-2xs">
          {submitted ? (
            /* Submission Confirmation */
            <div className="py-8 text-center max-w-lg mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#18181B] tracking-tight">
                Architecture Review Requested
              </h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Thank you. We have compiled your production requirements for <strong>{appType}</strong> on <strong>{cloud}</strong>. A lead platform architect will analyze your topology specifications and respond within one business day.
              </p>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8 text-left font-mono text-xs space-y-1.5">
                <div><span className="text-[#71717A]">Target Stack:</span> {appType} ({stage} Stage)</div>
                <div><span className="text-[#71717A]">Cloud Provider:</span> {cloud}</div>
                <div><span className="text-[#71717A]">Scale Horizon:</span> {scale}</div>
                <div><span className="text-[#71717A]">Selected Capabilities:</span> {selectedNeeds.join(', ')}</div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-xl bg-[#18181B] text-white text-xs font-mono font-medium hover:bg-[#27272A] transition-colors"
              >
                Edit Specification
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Field 1: What are you building? */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2">
                    What are you building?
                  </label>
                  <select
                    value={appType}
                    onChange={(e) => setAppType(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Web Application">Web Application</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="API">API</option>
                    <option value="AI Application">AI Application</option>
                    <option value="E-commerce">E-commerce</option>
                  </select>
                </div>

                {/* Field 2: Current stage */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2">
                    Current stage
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Idea / Prototype">Idea / Prototype</option>
                    <option value="Development">Development</option>
                    <option value="Production (Scaling)">Production (Scaling)</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                  </select>
                </div>

                {/* Field 3: Cloud */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2">
                    Target Cloud Provider
                  </label>
                  <select
                    value={cloud}
                    onChange={(e) => setCloud(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="AWS">AWS</option>
                    <option value="Azure">Azure</option>
                    <option value="GCP">GCP</option>
                    <option value="Not sure / Multi-cloud">Not sure / Multi-cloud</option>
                  </select>
                </div>

                {/* Field 4: Expected scale */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2">
                    Expected scale
                  </label>
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#18181B] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Prototype (< 1k users)">Prototype (&lt; 1k users)</option>
                    <option value="Growing (10k - 100k users)">Growing (10k - 100k users)</option>
                    <option value="High Traffic (> 1M requests/day)">High Traffic (&gt; 1M requests/day)</option>
                    <option value="Enterprise / Regulated">Enterprise / Regulated</option>
                  </select>
                </div>

              </div>

              {/* Field 5: What do you need? (Checkboxes) */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2.5">
                  What do you need?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {needsList.map((item) => {
                    const isChecked = selectedNeeds.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleNeed(item)}
                        className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all border flex items-center gap-2 ${
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
                        <span className="truncate">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 6: Message */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#18181B] uppercase tracking-wider mb-2">
                  Architecture Notes / Specific Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about existing bottlenecks, compliance targets (SOC2/HIPAA), or current deployment challenges..."
                  className="w-full bg-[#FAF9F5] border border-[#18181B]/10 rounded-xl p-3 text-xs text-[#18181B] focus:outline-none focus:border-[#2563EB] font-sans"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#18181B] text-white text-xs font-mono font-semibold tracking-wider hover:bg-[#27272A] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Request Architecture Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
