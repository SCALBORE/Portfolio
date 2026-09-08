/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CornerHUD } from './components/CornerHUD';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProfileDossier } from './components/ProfileDossier';
import { AcademicDossier } from './components/AcademicDossier';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { WorkBlueprints } from './components/WorkBlueprints';
import { CredentialsSection } from './components/CredentialsSection';
import { TrajectorySection } from './components/TrajectorySection';
import { IdentityTerminal } from './components/IdentityTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { TerminalModal } from './components/TerminalModal';
import { ModuleModal } from './components/ModuleModal';
import { BlueprintModal } from './components/BlueprintModal';
import { Toast } from './components/Toast';
import { CourseModule, BlueprintProject } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);
  const [selectedBlueprint, setSelectedBlueprint] = useState<BlueprintProject | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3000);
  };

  useEffect(() => {
    const sections = ['profile', 'education', 'capabilities', 'work', 'credentials', 'trajectory', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#ff5449] selection:text-[#5c0004]">
      {/* 4 Corner Fixed Reticles */}
      <CornerHUD />

      {/* Main Top Navigation Header */}
      <Header 
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections with Top Header & Bottom Footer Clearance */}
      <main className="flex-1 w-full pt-16 pb-8">
        <HeroSection />
        <ProfileDossier />
        <AcademicDossier onSelectModule={setSelectedModule} />
        <CapabilitiesSection />
        <WorkBlueprints onSelectBlueprint={setSelectedBlueprint} />
        <CredentialsSection />
        <TrajectorySection />
        <IdentityTerminal 
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminalModal={() => setTerminalOpen(true)}
        />
        <ContactSection onShowToast={triggerToast} />
      </main>

      {/* Bottom Telemetry Rail */}
      <Footer />

      {/* Modals & Drawers */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
        onShowToast={triggerToast}
      />
      <TerminalModal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />
      <ModuleModal 
        module={selectedModule} 
        onClose={() => setSelectedModule(null)} 
      />
      <BlueprintModal 
        project={selectedBlueprint} 
        onClose={() => setSelectedBlueprint(null)} 
      />
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}

