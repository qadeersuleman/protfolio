"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DetailModal } from "@/components/DetailModal";
import { ProjectItem, CertificateItem } from "@/data/portfolio-data";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<ProjectItem | CertificateItem | null>(null);
  const [modalType, setModalType] = useState<"project" | "certificate" | null>(null);

  const handleSelectProject = (project: ProjectItem) => {
    setModalItem(project);
    setModalType("project");
    setModalOpen(true);
  };

  const handleSelectCertificate = (certificate: CertificateItem) => {
    setModalItem(certificate);
    setModalType("certificate");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalItem(null);
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-rose-200">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={handleSelectProject} />
        <Certificates onSelectCertificate={handleSelectCertificate} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Global High-Res Interactive Detail Modal */}
      <DetailModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        item={modalItem}
        itemType={modalType}
      />
    </div>
  );
}
