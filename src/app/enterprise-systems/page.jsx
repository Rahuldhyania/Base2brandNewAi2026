"use client";

import Layout from "@/components/apple/Layout";
import Capabilities from "@/components/erp/Capabilities";
import CTA from "@/components/erp/CTA";
import Hero from "@/components/erp/Hero";
import Integrations from "@/components/erp/Integrations";
import Modules from "@/components/erp/Modules";
import ProcessFlow from "@/components/erp/ProcessFlow";
import StarsBackground from "@/components/erp/StarsBackground";

export default function ErpPage() {
    return (
        <Layout tint="blue">
            <div className="theme-enterprise-systems relative min-h-screen overflow-x-hidden">
                <StarsBackground
                    className="!fixed inset-0 z-0 pointer-events-none"
                    starColor="#ffffff"
                />

                <div className="relative z-[1]">
                    <Hero />
                    <Capabilities />
                    <Modules />
                    <ProcessFlow />
                    <Integrations />
                    <CTA />
                </div>
            </div>
        </Layout>
    );
}
