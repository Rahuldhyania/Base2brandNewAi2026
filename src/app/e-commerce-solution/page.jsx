"use client";

import Layout from "@/components/apple/Layout";
import StarsBackground from "@/components/erp/StarsBackground";
import EcommerceSolution from "./EcommerceSolution";
import "./ecommerce.css";
export default function EcommerceSolutionPage() {
  return (
    <Layout tint="green">
      <div className="theme-e-commerce-solution relative min-h-screen overflow-x-hidden">
        <StarsBackground
          className="!fixed inset-0 z-0 pointer-events-none"
          starColor="#95BF47"
        />

        <div className="relative z-[1]">
          <EcommerceSolution />
        </div>
      </div>
    </Layout>
  );
}
