import React from "react";
import "../styles/Logo.css";


export default function Logo({ small = false }) {
  return (
    <div className={`brand ${small ? "small" : ""}`} aria-hidden="false">
      <span className="brand-text" aria-hidden="true">Gr</span>

      {}
      <svg
        className="brand-disc"
        viewBox="0 0 64 64"
        role="img"
        aria-label="Groovify logo"
        focusable="false"
      >
        <defs>
          <radialGradient id="discGrad" cx="35%" cy="35%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="40%" stopColor="var(--accent)" />
            <stop offset="75%" stopColor="var(--accent-2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
          </radialGradient>

          <linearGradient id="ringGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
            <stop offset="60%" stopColor="var(--accent-2)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {}
        <g className="ring-group">
          <circle className="ring" cx="32" cy="32" r="26" fill="none" stroke="url(#ringGrad)" strokeWidth="2.8" strokeLinecap="round" />
        </g>

        {}
        <circle cx="32" cy="32" r="16" fill="url(#discGrad)" className="disc-core" />

        {}
        <circle cx="32" cy="32" r="4" fill="rgba(0,0,0,0.6)" />

        {}
        <g className="grooves" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none">
          <path d="M20 28 A12 12 0 0 0 44 36" />
          <path d="M22 24 A16 16 0 0 0 42 40" />
        </g>
      </svg>

      <span className="brand-text" aria-hidden="true">ovify</span>
    </div>
  );
}
