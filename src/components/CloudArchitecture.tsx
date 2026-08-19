import React, { useState } from 'react';
import { Cpu, Network, Database, CheckCircle2 } from 'lucide-react';

export const CloudArchitecture: React.FC = () => {
  const [selectedCloud, setSelectedCloud] = useState<'aws' | 'azure' | 'gcp'>('aws');

  const cloudEcosystems = {
    aws: {
      name: 'Amazon Web Services (AWS)',
      short: 'AWS',
      compute: 'Amazon EKS · ECS Fargate · AWS Lambda',
      networking: 'VPC Multi-AZ · ALB / NLB · CloudFront Global CDN',
      data: 'Amazon Aurora (Postgres) · S3 Buckets · AWS Backup Vault',
      iac: 'Terraform AWS Provider 5.x · AWS CDK',
    },
    azure: {
      name: 'Microsoft Azure',
      short: 'Azure',
      compute: 'Azure Kubernetes Service (AKS) · Container Apps · Functions',
      networking: 'Azure VNet Peering · Application Gateway · Front Door CDN',
      data: 'Azure Database for PostgreSQL · Blob Storage · Recovery Services',
      iac: 'Terraform Azurerm 3.x · Bicep',
    },
    gcp: {
      name: 'Google Cloud Platform (GCP)',
      short: 'GCP',
      compute: 'Google Kubernetes Engine (GKE Autopilot) · Cloud Run',
      networking: 'VPC Service Controls · Cloud Load Balancing · Cloud CDN',
      data: 'Cloud SQL Postgres · Cloud Storage · Persistent Disk Snapshots',
      iac: 'Terraform Google Provider · Config Connector',
    },
  };

  const current = cloudEcosystems[selectedCloud];

  return (
    <section id="cloud-architecture" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-medium text-[#2563EB] tracking-wider uppercase mb-2">
            CLOUD & PLATFORM
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#18181B] leading-tight">
            Cloud architecture built for what comes next.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
            Multi-cloud infrastructure models engineered for resilience, isolated failure domains, repeatable provisioning, and enterprise compliance.
          </p>
        </div>

        {/* Cloud Ecosystem Selector Pills */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-[#71717A] mr-2">Cloud provider</span>
          {(['aws', 'azure', 'gcp'] as const).map((cloud) => (
            <button
              key={cloud}
              onClick={() => setSelectedCloud(cloud)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all border ${
                selectedCloud === cloud
                  ? 'bg-[#18181B] text-white border-[#18181B]'
                  : 'bg-white text-[#52525B] border-[#18181B]/8 hover:border-[#18181B]/20'
              }`}
            >
              {cloudEcosystems[cloud].short}
            </button>
          ))}
        </div>

        {/* Architectural Topology Visual Card */}
        <div className="product-card rounded-2xl p-6 sm:p-8 bg-white border border-[#18181B]/8 shadow-2xs">
          
          {/* Top Application Node */}
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8 max-w-sm mx-auto text-center">
            <span className="text-[10px] text-[#71717A] uppercase block">Application</span>
            <span className="text-xs font-semibold text-[#18181B]">Application workload</span>
          </div>

          <div className="flex justify-center my-2">
            <div className="h-4 w-px bg-[#18181B]/20" />
          </div>

          {/* Cloud Platform Layer */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60 max-w-md mx-auto text-center">
            <span className="text-[10px] text-[#2563EB] uppercase font-semibold block">Platform</span>
            <span className="text-xs font-semibold text-[#18181B]">{current.name}</span>
          </div>

          <div className="flex justify-center my-2">
            <div className="h-4 w-px bg-[#18181B]/20" />
          </div>

          {/* 3 Distributed Architecture Tiers (Compute, Networking, Data) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Compute */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#18181B]/6">
                <Cpu className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-semibold text-[#18181B] uppercase">Compute</span>
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-[#52525B]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Containers (Docker/OCI)
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Kubernetes Workloads
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Serverless Tasks
                </li>
              </ul>
              <div className="mt-3 pt-2 border-t border-[#18181B]/6 text-[10px] font-mono text-[#71717A]">
                {current.compute}
              </div>
            </div>

            {/* Networking */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#18181B]/6">
                <Network className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-semibold text-[#18181B] uppercase">Networking</span>
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-[#52525B]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> VPC / Isolated Subnets
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Layer 7 Load Balancing
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Global Anycast CDN
                </li>
              </ul>
              <div className="mt-3 pt-2 border-t border-[#18181B]/6 text-[10px] font-mono text-[#71717A]">
                {current.networking}
              </div>
            </div>

            {/* Data */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#18181B]/6">
                <Database className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-semibold text-[#18181B] uppercase">Data & storage</span>
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-[#52525B]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Relational & NoSQL DBs
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Object Storage (S3/Blob)
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Continuous Backup & PITR
                </li>
              </ul>
              <div className="mt-3 pt-2 border-t border-[#18181B]/6 text-[10px] font-mono text-[#71717A]">
                {current.data}
              </div>
            </div>

          </div>

          {/* IaC & Provisioning Footer */}
          <div className="mt-6 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#18181B]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <span className="text-[#71717A]">Provisioned via: <strong className="text-[#18181B]">{current.iac}</strong></span>
              <span className="text-[11px] text-[#71717A]">
                Terraform-managed
              </span>
          </div>

        </div>

      </div>
    </section>
  );
};
