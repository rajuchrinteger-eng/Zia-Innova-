
import React from 'react';

const platforms = [
  {
    name: 'SeemattiStores.com',
    desc: 'Our flagship B2C/B2B platform powering the future of retail with smart logistics and AI-driven curation.',
    icon: 'fa-shopping-bag',
    color: 'text-slate-800',
    blobColor: 'bg-blue-50/50',
    hash: '#service-seemattistores',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'E-Academy',
    desc: 'A comprehensive digital learning ecosystem bridging skills and opportunities for the next-gen workforce.',
    icon: 'fa-graduation-cap',
    color: 'text-slate-800',
    blobColor: 'bg-emerald-50/50',
    hash: '#service-eacademy',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'EzyCampus ERP',
    desc: 'Revolutionizing academic management with seamless operations, finance tracking, and role-based access.',
    icon: 'fa-school',
    color: 'text-slate-800',
    blobColor: 'bg-purple-50/50',
    hash: '#service-ezycampus',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600'
  }
];

export const Ecosystem: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">The Zias Digital Ecosystem</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Interconnected platforms designed to scale businesses, educate minds, and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {platforms.map((p, i) => (
            <div 
              key={i} 
              className="relative bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up overflow-hidden group cursor-pointer flex flex-col" 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate(p.hash)}
            >
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src={p.image} 
                   alt={p.name} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Icon Container - Moved outside to prevent clipping */}
              <div className="absolute left-8 top-56 transform -translate-y-1/2 z-10">
                <div className="w-16 h-16 bg-white shadow-lg shadow-slate-900/10 rounded-2xl flex items-center justify-center text-2xl text-slate-800 transition-transform group-hover:scale-110">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
              </div>

              <div className="relative pt-12 p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{p.name}</h4>
                <p className="text-slate-500 leading-relaxed mb-8 text-[15px] flex-grow">
                  {p.desc}
                </p>
                
                <button className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                  Explore Platform <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
