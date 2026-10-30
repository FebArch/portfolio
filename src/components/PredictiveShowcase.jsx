import React from 'react';
import { Activity, Thermometer, Mic, Cpu, MonitorSmartphone, Layers } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const PredictiveShowcase = () => {
  return (
    <div className="w-full py-24 border-t border-surface">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16 px-6">
        <span className="text-sm font-mono text-muted mb-6 tracking-widest uppercase flex items-center gap-2">
          <Cpu size={14} /> IoT & Edge Architecture
        </span>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
          Predictive Maintenance. <br />
          Hardware-to-Dashboard ecosystem.
        </h2>
        
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          An industrial IoT system engineering the complete pipeline from edge to interface. 
          ESP32 microcontrollers stream real-time telemetry from vibration, temperature, and acoustic sensors mounted on electric motor chassis via custom threaded modular enclosures.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <FiGithub size={18} strokeWidth={2.5} />
            View Repository
          </a>
        </div>
      </div>

      {/* Modern Command Center Layout */}
      <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-surface bg-surface/20 min-h-[500px] md:min-h-[600px] flex items-center justify-center p-6 md:p-12">
        
        {/* Background Image (Dashboard or Hardware Photo) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/predictive-bg.png" 
            alt="IoT Predictive Maintenance System" 
            className="w-full h-full object-cover opacity-40 dark:opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Floating Telemetry & Stack Cards */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-auto">
          
          {/* Hardware Card */}
          <div className="bg-background/80 backdrop-blur-md border border-surface rounded-2xl p-6 hover:border-muted transition-colors">
            <Cpu className="text-primary mb-4" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-primary mb-2">Edge Compute</h3>
            <p className="text-sm text-muted mb-4">ESP32 microcontrollers processing raw analog signals locally before transmission.</p>
            <div className="text-xs font-mono text-muted bg-surface/50 inline-block px-2 py-1 rounded">
              Threaded Enclosures
            </div>
          </div>

          {/* Sensors Card */}
          <div className="bg-background/80 backdrop-blur-md border border-surface rounded-2xl p-6 md:-translate-y-8 hover:border-muted transition-colors shadow-2xl shadow-black/50">
            <div className="flex gap-2 text-primary mb-4">
              <Activity size={20} strokeWidth={1.5} />
              <Thermometer size={20} strokeWidth={1.5} />
              <Mic size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium text-primary mb-2">Tri-Sensor Telemetry</h3>
            <p className="text-sm text-muted">Continuous acoustic monitoring, chassis vibration analysis, and motor thermal tracking.</p>
          </div>

          {/* Software Suite Card */}
          <div className="bg-background/80 backdrop-blur-md border border-surface rounded-2xl p-6 hover:border-muted transition-colors">
            <MonitorSmartphone className="text-primary mb-4" size={24} strokeWidth={1.5} />
            <h3 className="text-lg font-medium text-primary mb-2">Cross-Platform Suite</h3>
            <p className="text-sm text-muted mb-4">Unified real-time dashboards synchronized across Web, Electron, and React Native mobile.</p>
            <div className="text-xs font-mono text-muted bg-surface/50 inline-block px-2 py-1 rounded">
              Unified Codebase
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PredictiveShowcase;