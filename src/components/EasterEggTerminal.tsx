import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Send } from 'lucide-react';

interface EasterEggTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggTerminal: React.FC<EasterEggTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; type: 'in' | 'out' | 'accent' }>>([
    { text: 'CLOUDFORGE Unified Cloud CLI v2.4.0', type: 'accent' },
    { text: 'Type "help" to view diagnostic commands or "exit" to close.', type: 'out' },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${input}`, type: 'in' as const }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Available Diagnostic Commands:', type: 'accent' },
          { text: '  status      - Display simulated cluster health telemetry', type: 'out' },
          { text: '  drift-check - Audit Puppet declarative state and drift remediation', type: 'out' },
          { text: '  scan        - Run Trivy vulnerability & CVE security inspection', type: 'out' },
          { text: '  deploy      - Simulate a canary deployment', type: 'out' },
          { text: '  bonus       - Acdyon Frontend Challenge Easter Egg message', type: 'out' },
          { text: '  clear       - Clear terminal history', type: 'out' },
          { text: '  exit        - Close terminal overlay', type: 'out' }
        );
        break;

      case 'status':
        newHistory.push(
          { text: 'Executing: kubectl get nodes,pods -o wide', type: 'accent' },
          { text: '  Nodes: 3/3 Ready (k8s-node-east-01, east-02, east-03)', type: 'out' },
          { text: '  Pods: 6/6 Running | 0 Restarting | Health: 100%', type: 'out' },
          { text: '  Throughput: 24.8K req/min | Error Rate: 0.08% | SLA: 99.99%', type: 'out' }
        );
        break;

      case 'drift-check':
        newHistory.push(
          { text: 'Executing: puppet agent -t --noop', type: 'accent' },
          { text: '  Catalog: compiled in 0.42s across 3 nodes', type: 'out' },
          { text: '  CIS Baseline: 142/142 controls enforced', type: 'out' },
          { text: '  Status: Zero drift detected. Fleet is 100% converged.', type: 'out' }
        );
        break;

      case 'scan':
        newHistory.push(
          { text: 'Executing: trivy image --severity HIGH,CRITICAL cr.cloudforge.dev/app:v2.4.0', type: 'accent' },
          { text: '  Target: distroless-node20-rootless:latest', type: 'out' },
          { text: '  Results: 0 Vulnerabilities found. Cosign signature verified.', type: 'out' }
        );
        break;

      case 'deploy':
        newHistory.push(
          { text: 'Executing: argocd app sync production-stack', type: 'accent' },
          { text: '  Phase 1: Canary pod created (10% traffic weight)', type: 'out' },
          { text: '  Phase 2: Automated metric analysis passed (Error rate < 0.1%)', type: 'out' },
          { text: '  Phase 3: Promoted to 100% live traffic with 0ms dropped requests.', type: 'out' }
        );
        break;

      case 'bonus':
      case 'easter-egg':
      case 'acdyon':
        newHistory.push(
          { text: '[bonus] Found the Secret Engineering CLI!', type: 'accent' },
          { text: '  "We don’t want a trivia quiz. We want to watch you think like an engineer."', type: 'out' },
          { text: '  A frontend demo built with systems thinking and careful detail.', type: 'out' },
          { text: '  CloudForge: Built for Acdyon Technologies Frontend Challenge 2026.', type: 'accent' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for a list of available commands.`,
          type: 'out',
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#18181B] text-[#FAF9F5] rounded-2xl border border-white/15 shadow-2xl overflow-hidden font-mono text-xs animate-in fade-in zoom-in-95 duration-200">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-black/40 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#3B82F6]" />
            <span className="font-semibold text-white">cloudforge-cli ~ /opt/production</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#A1A1AA] border border-white/10 px-1.5 py-0.5 rounded">ESC to close</span>
            <button
              onClick={onClose}
              className="p-1 text-[#A1A1AA] hover:text-white hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="p-4 h-80 overflow-y-auto space-y-1.5 scrollbar-thin">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`leading-relaxed ${
                item.type === 'in'
                  ? 'text-white font-semibold'
                  : item.type === 'accent'
                  ? 'text-[#3B82F6] font-medium'
                  : 'text-[#D4D4D8]'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleCommand} className="p-3 bg-black/50 border-t border-white/10 flex items-center gap-2">
          <span className="text-[#3B82F6] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'status', 'drift-check', 'scan', 'bonus'..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
