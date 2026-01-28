
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import { TOPIC_DATA, SLIDE_COUNT, NAV_MAPPING } from './constants';

const App: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIdx(prev => Math.min(prev + 1, SLIDE_COUNT - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIdx(prev => Math.max(prev - 1, 0));
  }, []);

  const jumpTo = (idx: number) => {
    setCurrentIdx(idx);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTopic) {
        if (e.key === 'Escape') setActiveTopic(null);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, activeTopic]);

  // Background Particles Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number, y: number, vx: number, vy: number, size: number }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00f2ff';
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  const activeNavIdx = NAV_MAPPING[currentIdx];

  const TopicCard = ({ id, icon, title, description }: { id: string, icon: string, title: string, description: string }) => (
    <div 
      onClick={() => setActiveTopic(id)}
      className="card group bg-white/[0.03] border border-white/10 rounded-xl p-4 transition-all duration-500 cursor-pointer hover:border-neon-blue hover:bg-neon-blue/[0.08] hover:-translate-y-1 relative h-full flex flex-col"
    >
      <i className={`fa-solid ${icon} text-lg text-neon-blue mb-3`}></i>
      <h4 className="text-neon-blue text-sm font-orbitron uppercase mb-1">{title}</h4>
      <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
      <div className="mt-auto pt-3 text-[8px] font-mono text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity">QUICK CONCEPT + AI</div>
    </div>
  );

  const UnitLabel = ({ children }: { children: string }) => (
    <div className="text-neon-purple font-orbitron text-[10px] tracking-widest uppercase mb-1">{children}</div>
  );

  const SectionHeader = ({ children }: { children: string }) => (
    <h2 className="text-neon-blue font-orbitron text-xl lg:text-2xl mb-6 flex items-center gap-4">
      {children}
    </h2>
  );

  return (
    <div className="h-screen w-screen flex p-4 lg:p-6 gap-4 lg:gap-6 relative overflow-hidden font-inter">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 blur-[1px]" />

      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-6 left-6 z-[1100] w-12 h-12 glass rounded-xl text-neon-blue flex items-center justify-center text-xl shadow-lg border border-white/10"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <Sidebar 
        activeNavIdx={activeNavIdx} 
        onJump={jumpTo} 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      <main className="flex-grow glass rounded-3xl relative overflow-hidden flex flex-col">
        <div className="flex-grow overflow-y-auto custom-scrollbar p-6 lg:p-12 relative">
          
          {/* SLIDE 0: INTRO */}
          {currentIdx === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
              <img 
                src="https://drive.google.com/thumbnail?id=1uY7-npxkT8NStw2u79Eyj8Kbhcpxmimb&sz=1000" 
                className="w-24 lg:w-32 drop-shadow-[0_0_15px_#00f2ff] animate-pulse" 
                alt="Logo"
              />
              <div className="px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-[10px] font-bold uppercase tracking-widest border border-neon-blue/20">
                Master Class Edition v14.1
              </div>
              <h1 className="font-orbitron text-4xl lg:text-7xl font-bold leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white to-neon-blue">
                DISTRIBUTED<br/>SYSTEMS
              </h1>
              <p className="text-slate-400 text-sm lg:text-base tracking-[3px] uppercase">V14.1 - ENHANCED EXAM NOTES</p>
              <button 
                onClick={nextSlide}
                className="mt-12 bg-neon-blue/10 border border-neon-blue text-white px-10 py-3 rounded-full font-orbitron hover:bg-neon-blue hover:text-slate-900 transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] flex items-center gap-4 group"
              >
                START MASTERCLASS <i className="fa-solid fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          )}

          {/* UNIT I SLIDES */}
          {currentIdx === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT I: INTRODUCTION</UnitLabel>
              <SectionHeader>Goals & Foundations</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TopicCard id="goals" icon="fa-bullseye" title="Goals of DS" description="Transparency, Scalability, and Sharing." />
                <TopicCard id="hardware" icon="fa-microchip" title="Hardware Concepts" description="Multiprocessor vs Multicomputer setups." />
                <TopicCard id="software" icon="fa-layer-group" title="Software Concepts" description="DOS, NOS and Middleware breakdown." />
              </div>
            </div>
          )}

          {currentIdx === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT I: COMMUNICATION</UnitLabel>
              <SectionHeader>Invocation & Interaction</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TopicCard id="client_server" icon="fa-users-viewfinder" title="Client-Server" description="Architectures and Distribution tiers." />
                <TopicCard id="rpc_rmi" icon="fa-terminal" title="RPC & RMI" description="Marshaling, stubs, and remote objects." />
                <TopicCard id="comm_oriented" icon="fa-wave-square" title="Messaging & Streams" description="Persistence, QoS and data flow sync." />
              </div>
            </div>
          )}

          {/* UNIT II SLIDES */}
          {currentIdx === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT II: PROCESS MANAGEMENT</UnitLabel>
              <SectionHeader>Threads & Execution</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TopicCard id="threads" icon="fa-code-fork" title="Threads in DS" description="Multithreaded client/server performance." />
                <TopicCard id="server_design" icon="fa-server" title="Server Design" description="Stateful vs Stateless architectures." />
                <TopicCard id="migration" icon="fa-truck-ramp-box" title="Code Migration" description="Mobility models and process segments." />
              </div>
            </div>
          )}

          {currentIdx === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT II: COORDINATION</UnitLabel>
              <SectionHeader>Sync & Mutual Exclusion</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TopicCard id="clocks" icon="fa-clock" title="Clock Sync" description="Physical vs Lamport logical ordering." />
                <TopicCard id="mutex" icon="fa-hand-dots" title="Mutual Exclusion" description="Distributed locking algorithms." />
                <TopicCard id="bully_ring" icon="fa-crown" title="Bully & Ring" description="Leader election strategies." />
              </div>
            </div>
          )}

          {currentIdx === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT II: RELIABILITY</UnitLabel>
              <SectionHeader>Transactions</SectionHeader>
              <div className="max-w-md">
                <TopicCard id="transactions" icon="fa-file-contract" title="Atomic Commit" description="ACID properties and the Two-Phase Commit handshake." />
              </div>
            </div>
          )}

          {/* UNIT III SLIDES */}
          {currentIdx === 6 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT III: DATA CONSISTENCY</UnitLabel>
              <SectionHeader>Consistency & Replication</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopicCard id="replication" icon="fa-clone" title="Object Replication" description="Update propagation and node placement." />
                <TopicCard id="consistency_data" icon="fa-database" title="Data-Centric Models" description="Sequential, Causal & FIFO consistency." />
                <TopicCard id="consistency_client" icon="fa-user-check" title="Client-Centric Models" description="Monotonic reads & write consistency." />
              </div>
            </div>
          )}

          {currentIdx === 7 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT III: FAULT TOLERANCE</UnitLabel>
              <SectionHeader>Resilience & Recovery</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TopicCard id="process_resilience" icon="fa-people-group" title="Process Resilience" description="Groups and agreement protocols." />
                <TopicCard id="fault_tolerance" icon="fa-heart-pulse" title="Fault Models" description="Byzantine masking and resilience." />
                <TopicCard id="recovery" icon="fa-rotate-left" title="System Recovery" description="Backward rollback vs Forward log logic." />
              </div>
            </div>
          )}

          {currentIdx === 8 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT III: SECURITY</UnitLabel>
              <SectionHeader>Security Architectures</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TopicCard id="kerberos" icon="fa-key" title="KERBEROS" description="Authentication via Ticket handshake." />
                <TopicCard id="ssl_crypto" icon="fa-shield-halved" title="SSL & Crypto" description="Secure transport and encryption." />
                <TopicCard id="security_mgmt" icon="fa-user-shield" title="Security Mgmt" description="Access policies, Keys and Auditing." />
              </div>
            </div>
          )}

          {/* UNIT IV SLIDES */}
          {currentIdx === 9 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT IV: DISTRIBUTED OBJECTS</UnitLabel>
              <SectionHeader>Middleware Standards</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopicCard id="corba" icon="fa-object-ungroup" title="CORBA" description="Interface definitions and ORBs." />
                <TopicCard id="dcom" icon="fa-windows" title="Distributed COM" description="Microsoft binary object standard." />
              </div>
            </div>
          )}

          {currentIdx === 10 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT IV: FILE SYSTEMS</UnitLabel>
              <SectionHeader>DFS Design & NFS</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopicCard id="dfs_design" icon="fa-diagram-project" title="DFS Design" description="Naming, Caching and update semantics." />
                <TopicCard id="sun_nfs" icon="fa-folder-tree" title="Sun NFS" description="VFS abstraction and Statelessness." />
              </div>
            </div>
          )}

          {/* UNIT V SLIDES */}
          {currentIdx === 11 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT V: SHARED MEMORY</UnitLabel>
              <SectionHeader>DSM Architecture</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopicCard id="dsm" icon="fa-server" title="DSM Servers" description="Shared memory across nodes logic." />
                <TopicCard id="dsm_consistency" icon="fa-sync" title="Memory Models" description="Release, Entry and Coherence logic." />
              </div>
            </div>
          )}

          {currentIdx === 12 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT V: WEB & COORDINATION</UnitLabel>
              <SectionHeader>WWW & JINI Systems</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TopicCard id="www" icon="fa-globe" title="World Wide Web" description="HTTP/CDNs global document system." />
                <TopicCard id="jini" icon="fa-plug" title="JINI Coordination" description="Service discovery and federation." />
              </div>
            </div>
          )}

          {currentIdx === 13 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <UnitLabel>UNIT V: IMPLEMENTATIONS</UnitLabel>
              <SectionHeader>Programming Middleware</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TopicCard id="java_rmi" icon="fa-brands fa-java" title="JAVA RMI" description="Native JVM remote invocation flow." />
                <TopicCard id="ole_activex" icon="fa-solid fa-puzzle-piece" title="OLE & ActiveX" description="Microsoft component standards." />
                <TopicCard id="orbix_visibrokes" icon="fa-solid fa-cubes" title="Orbix/Visibrokes" description="Commercial CORBA tools." />
                <TopicCard id="som" icon="fa-solid fa-sitemap" title="IBM SOM" description="Binary language neutral model." />
              </div>
            </div>
          )}

          {currentIdx === 14 && (
             <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
               <img 
                 src="https://drive.google.com/thumbnail?id=1uY7-npxkT8NStw2u79Eyj8Kbhcpxmimb&sz=500" 
                 className="w-20 drop-shadow-[0_0_10px_#bc13fe]" 
                 alt="Logo"
               />
               <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-neon-purple uppercase tracking-tighter">
                 MISSION COMPLETE
               </h1>
               <p className="text-slate-400">Master Class Technical Deep-Dive Complete.</p>
               <button 
                 onClick={() => jumpTo(0)}
                 className="mt-8 bg-neon-purple/10 border border-neon-purple text-white px-10 py-3 rounded-full font-orbitron hover:bg-neon-purple hover:text-slate-900 transition-all shadow-[0_0_20px_rgba(188,19,254,0.3)] flex items-center gap-4 group"
               >
                 RESTART MASTERCLASS <i className="fa-solid fa-rotate-right group-hover:rotate-180 transition-transform duration-500"></i>
               </button>
             </div>
          )}

        </div>

        {/* Footer Controls */}
        <div className="p-6 flex items-center justify-between border-t border-white/10 glass z-10">
          <div className="flex gap-4">
            <a href="https://www.instagram.com/careercue.co/" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-3 text-slate-400 hover:text-neon-blue transition-colors font-mono text-[11px]">
              <i className="fa-brands fa-instagram"></i> careercue.co
            </a>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass border border-white/10 text-white flex items-center justify-center hover:bg-neon-blue hover:text-slate-900 transition-all"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass border border-white/10 text-white flex items-center justify-center hover:bg-neon-blue hover:text-slate-900 transition-all"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/master_rahul.ind/" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-3 text-slate-400 hover:text-neon-blue transition-colors font-mono text-[11px]">
              master_rahul.ind <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div 
            className="absolute bottom-0 left-0 h-1 bg-neon-blue transition-all duration-300 shadow-[0_0_10px_#00f2ff]" 
            style={{ width: `${((currentIdx + 1) / SLIDE_COUNT) * 100}%` }}
          />
        </div>
      </main>

      {activeTopic && (
        <Modal 
          isOpen={true} 
          onClose={() => setActiveTopic(null)} 
          topicId={activeTopic} 
          topic={TOPIC_DATA[activeTopic]} 
        />
      )}
    </div>
  );
};

export default App;
