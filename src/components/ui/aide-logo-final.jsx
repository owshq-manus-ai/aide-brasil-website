import React from 'react';

// Final AIDE Brasil Logo Component
export const AIDELogo = ({ size = 60 }) => (
  <img 
    src="/logo-aide-brasil.png" 
    alt="AIDE Brasil"
    style={{
      height: size,
      width: 'auto',
      objectFit: 'contain'
    }}
  />
);

// Logo with text for header
export const LogoWithText = () => (
  <div className="flex items-center gap-3">
    <AIDELogo size={55} />
    <div>
      <h1 className="text-xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          AIDE
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400">
          {' '}Brasil
        </span>
      </h1>
      <p className="text-xs text-white/60">AI Data Engineering</p>
    </div>
  </div>
);

export default AIDELogo;