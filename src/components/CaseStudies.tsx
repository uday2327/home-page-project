import React, { useState } from 'react';
import { GitBranch, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  architecture: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDetails: {
    ingress: string;
    runtime: string;
    data: string;
    iac: string;
  };
}

export const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases: CaseStudy[] = [
    {
      id: 'fullstack-saas-platform',
      title: 'Full-Stack Multi-Tenant SaaS Platform',
      category: 'Cloud Architecture & Delivery',
      summary: 'Engineered high-availability cloud architecture with Docker containerization, automated GitHub Actions CI/CD, and PostgreSQL replication on AWS.',
      architecture: 'CloudFront CDN → Application Load Balancer → Multi-AZ Docker ECS Clusters → RDS PostgreSQL with Automated Read Replicas & S3 Object Storage.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS ECS', 'Terraform', 'GitHub Actions'],
      githubUrl: 'https://github.com/uday2327',
      liveUrl: 'https://cloudforge.dev/work/saas-platform',
      architectureDetails: {
        ingress: 'AWS ALB + CloudFront TLS 1.3 edge termination',
        runtime: 'Docker OCI containerized tasks across 2 availability zones',
        data: 'Managed PostgreSQL with write-ahead logging (WAL) & automated snapshots',
        iac: 'Terraform modules with remote state locking in S3 + DynamoDB',
      },
    },
    {
      id: 'gitops-k8s-platform',
      title: 'Declarative GitOps & Kubernetes Platform',
      category: 'Container Orchestration & Drift Control',
      summary: 'Designed declarative Kubernetes cluster deployment leveraging ArgoCD GitOps pipelines, Puppet system configuration management, and Prometheus monitoring.',
      architecture: 'Git Repository → ArgoCD Operator → Production Kubernetes Cluster (HPA Autoscaling, Ingress NGINX, Sealed Secrets) + Puppet Fleet Node Hardening.',
      technologies: ['Kubernetes', 'Puppet', 'ArgoCD', 'Terraform', 'Go', 'Prometheus', 'Grafana'],
      githubUrl: 'https://github.com/uday2327',
      liveUrl: 'https://cloudforge.dev/work/k8s-gitops',
      architectureDetails: {
        ingress: 'NGINX Ingress Controller with cert-manager automated Let\'s Encrypt certificates',
        runtime: 'Kubernetes Pods with Horizontal Pod Autoscaler (HPA) and resource limits',
        data: 'StatefulSet persistent storage volumes with automatic volume snapshots',
        iac: 'Puppet manifests for host CIS baseline + Terraform for GKE cluster bootstrap',
      },
    },
    {
      id: 'devsecops-pipeline',
      title: 'Automated DevSecOps & Zero-Trust Cloud Delivery',
      category: 'Security & Automation',
      summary: 'Implemented end-to-end continuous security validation pipeline with automated container image scanning, HashiCorp Vault secrets injection, and IaC linting.',
      architecture: 'Commit Hook → GitHub Actions CI Matrix → Trivy Container Scan → Checkov IaC Audit → Vault Dynamic Credential Injection → Production Blue/Green Deployment.',
      technologies: ['Next.js', 'Python FastAPI', 'HashiCorp Vault', 'Trivy', 'GitHub Actions', 'Docker', 'AWS KMS'],
      githubUrl: 'https://github.com/uday2327',
      liveUrl: 'https://cloudforge.dev/work/devsecops',
      architectureDetails: {
        ingress: 'WAF Rate Limiting + API Gateway OAuth2 JWT token verification',
        runtime: 'Distroless non-root Docker images deployed to isolated VPC subnets',
        data: 'AWS KMS envelope-encrypted Aurora serverless PostgreSQL',
        iac: 'Automated policy-as-code gate enforcing zero open security groups',
      },
    },
  ];

  const active = cases[selectedCase];

  return (
    <section id="our-work" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-medium text-[#2563EB] tracking-wider uppercase mb-2">
            OUR WORK
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Systems, explained plainly.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Example architecture breakdowns for teams that need reliability, security, and a delivery path they can actually maintain.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex flex-col sm:flex-row gap-0 border-b border-[#18181B]/10 mb-8">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(idx)}
              className={`flex-1 text-left px-1 py-3 sm:px-3 border-b-2 transition-colors ${
                selectedCase === idx
                  ? 'border-[#2563EB] text-[#18181B]'
                  : 'border-transparent text-[#52525B] hover:text-[#18181B]'
              }`}
            >
              <span className="text-[10px] text-[#71717A] uppercase block">Case 0{idx + 1}</span>
              <span className="text-xs font-mono font-medium text-current block mt-0.5 leading-snug">
                {c.title}
              </span>
            </button>
          ))}
        </div>

        {/* Editorial product visual */}
        <div className="product-card rounded-2xl bg-white border border-[#18181B]/8 overflow-hidden shadow-2xs">
          
          {/* Visual Header / Diagram Box (Large Dominant Preview) */}
          <div className="p-6 sm:p-10 bg-[#FAF9F5]/70 border-b border-[#18181B]/8 relative">
            <div className="max-w-3xl mx-auto space-y-4">
              
              {/* Architecture Blueprint Visualization Canvas */}
              <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#18181B]/10 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#18181B]/6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#18181B] uppercase">
                      Architecture overview
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#18181B]/6">
                    {active.category}
                  </span>
                </div>

                <div className="font-mono text-xs text-[#18181B] leading-relaxed p-3.5 bg-[#FAF9F5] rounded-lg border border-[#18181B]/6">
                  <span className="text-[10px] uppercase text-[#71717A] block font-semibold mb-1">
                    Architecture flow:
                  </span>
                  {active.architecture}
                </div>

                {/* Sub-layers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-[#FAF9F5]/80 border border-[#18181B]/6">
                    <span className="text-[10px] text-[#71717A] uppercase block">Ingress & Edge</span>
                    <span className="text-[#18181B] text-[11px] font-medium">{active.architectureDetails.ingress}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF9F5]/80 border border-[#18181B]/6">
                    <span className="text-[10px] text-[#71717A] uppercase block">Runtime Workload</span>
                    <span className="text-[#18181B] text-[11px] font-medium">{active.architectureDetails.runtime}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF9F5]/80 border border-[#18181B]/6">
                    <span className="text-[10px] text-[#71717A] uppercase block">Data Tier</span>
                    <span className="text-[#18181B] text-[11px] font-medium">{active.architectureDetails.data}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF9F5]/80 border border-[#18181B]/6">
                    <span className="text-[10px] text-[#71717A] uppercase block">IaC & Config</span>
                    <span className="text-[#18181B] text-[11px] font-medium">{active.architectureDetails.iac}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Case Details & Tech Stack */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
                  {active.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] tracking-tight mt-0.5">
                  {active.title}
                </h3>
              </div>

              {/* Source / Demo Links */}
              <div className="flex items-center gap-2">
                {active.githubUrl && (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-[#18181B]/10 hover:bg-[#FAF9F5] text-[#18181B] transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <a
                  href="#project-intake"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#18181B] text-white hover:bg-[#27272A] transition-colors"
                >
                  <span>Build Similar Stack</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="text-sm text-[#52525B] leading-relaxed mb-6">
              {active.summary}
            </p>

            {/* Technologies */}
            <div className="pt-4 border-t border-[#18181B]/6">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block mb-2">
                  Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {active.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#18181B]/8 text-xs font-mono font-medium text-[#18181B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
