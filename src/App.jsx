import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';

// Layout
import Topbar  from './components/layout/Topbar';
import Sidebar from './components/layout/Sidebar';

// Sections
import HeroSection      from './components/sections/HeroSection';
import BrandStatement   from './components/sections/BrandStatement';
import OutcomeCards     from './components/sections/OutcomeCards';
import MotivationBanner from './components/sections/MotivationBanner';

// Roadmap
import RoadmapSection from './components/roadmap/RoadmapSection';

// Community
import CommunitySection from './components/community/CommunitySection';

// Admin
import AdminPanel from './components/admin/AdminPanel';

// ─── Inner shell (needs AppContext) ─────────────────────
function Shell() {
  const { section } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-ou-bg text-ou-text h-full overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Fixed topbar */}
      <Topbar onHamburger={() => setSidebarOpen((o) => !o)} />

      {/* App body below topbar */}
      <div className="flex" style={{ position: 'fixed', top: 54, left: 0, right: 0, bottom: 0 }}>

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-[80] bg-black/50 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden ou-scroll">
          {/* OVERVIEW */}
          {section === 'hero' && (
            <>
              <HeroSection />
              <BrandStatement />
              <OutcomeCards />
              <MotivationBanner />
            </>
          )}

          {/* ROADMAP */}
          {section === 'rm' && <RoadmapSection />}

          {/* COMMUNITY */}
          {section === 'comm' && <CommunitySection />}

          {/* ADMIN */}
          {section === 'admin' && <AdminPanel />}
        </main>
      </div>
    </div>
  );
}

// ─── Root with context provider ─────────────────────────
export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
