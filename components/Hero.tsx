
import React from 'react';

export const Hero: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-white">
      {/* Background Layer with Image and Gradients */}
      <div className="absolute inset-0 -z-10">
        {/* Banner Image - Minimal, Elegant, Premium Texture for Retail Legacy */}
        <img 
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Retail Heritage" 
          className="w-full h-full object-cover opacity-40 blur-[1px]"
        />
        
        {/* Gradient Overlay for Cleanness */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white"></div>
        
        {/* Subtle Radial Accents for Depth */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-100 text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-12 animate-fade-up shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
          Established Legacy Since 1948
        </div>
        
        {/* High-Impact Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-900 leading-[1.05] mb-12 animate-fade-up tracking-tight">
          75+ Years of Retail<br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600">
            Legacy.
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-600 mb-16 leading-relaxed animate-fade-up font-light" style={{ animationDelay: '0.2s' }}>
          From the trusted heritage of Seematti to a diversified digital enterprise, Zias delivers world-class E-Commerce, ERP, Education, and AI-driven business solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => { window.location.hash = '#service-software'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200/50 flex items-center justify-center text-lg"
          >
            Explore Our Solutions 
            <i className="fa-solid fa-arrow-right ml-3 text-sm group-hover:translate-x-1.5 transition-transform"></i>
          </button>
          <button 
            onClick={navigateToContact}
            className="w-full sm:w-auto px-12 py-5 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm text-lg"
          >
            Request a Free Demo
          </button>
        </div>
      </div>
      
      {/* Floating Category Elements - Refined Glassmorphism */}
      <div className="mt-28 container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        {[
          { icon: 'fa-globe', label: 'B2B & B2C Platforms' },
          { icon: 'fa-microchip', label: 'AI & Automation' },
          { icon: 'fa-chart-line', label: 'Global Scaling' },
          { icon: 'fa-shield-halved', label: 'Enterprise Security' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[40px] shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-500 group cursor-default">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-slate-100 flex items-center justify-center text-blue-600 text-2xl mb-5 group-hover:scale-110 transition-transform">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <span className="text-sm font-bold text-slate-800 tracking-wide text-center uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
