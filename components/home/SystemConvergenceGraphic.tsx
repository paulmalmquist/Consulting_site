'use client';

export function SystemConvergenceGraphic() {
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 sm:min-h-[300px] sm:p-6 md:min-h-[360px] md:p-8">
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Scattered system nodes - initial state */}
        <g className="system-nodes">
          {/* Salesforce */}
          <g className="node" data-system="salesforce">
            <circle cx="80" cy="80" r="24" className="node-circle" />
            <text x="80" y="115" className="node-label">Salesforce</text>
          </g>

          {/* MRI */}
          <g className="node" data-system="mri">
            <circle cx="520" cy="90" r="24" className="node-circle" />
            <text x="520" y="125" className="node-label">MRI</text>
          </g>

          {/* ERP */}
          <g className="node" data-system="erp">
            <circle cx="150" cy="180" r="24" className="node-circle" />
            <text x="150" y="215" className="node-label">ERP</text>
          </g>

          {/* Ticketing */}
          <g className="node" data-system="ticketing">
            <circle cx="450" cy="190" r="24" className="node-circle" />
            <text x="450" y="225" className="node-label">Ticketing</text>
          </g>

          {/* Excel */}
          <g className="node" data-system="excel">
            <circle cx="100" cy="300" r="24" className="node-circle" />
            <text x="100" y="335" className="node-label">Excel</text>
          </g>

          {/* Email */}
          <g className="node" data-system="email">
            <circle cx="500" cy="310" r="24" className="node-circle" />
            <text x="500" y="345" className="node-label">Email</text>
          </g>

          {/* BI */}
          <g className="node" data-system="bi">
            <circle cx="250" cy="120" r="24" className="node-circle" />
            <text x="250" y="155" className="node-label">BI</text>
          </g>

          {/* Core Research */}
          <g className="node" data-system="docs">
            <circle cx="350" cy="280" r="24" className="node-circle" />
            <text x="350" y="315" className="node-label">Core Research</text>
          </g>
        </g>

        {/* Connecting lines - pulsing */}
        <g className="connection-lines">
          <line x1="80" y1="80" x2="300" y2="200" className="connection-line" />
          <line x1="520" y1="90" x2="300" y2="200" className="connection-line" />
          <line x1="150" y1="180" x2="300" y2="200" className="connection-line" />
          <line x1="450" y1="190" x2="300" y2="200" className="connection-line" />
          <line x1="100" y1="300" x2="300" y2="200" className="connection-line" />
          <line x1="500" y1="310" x2="300" y2="200" className="connection-line" />
          <line x1="250" y1="120" x2="300" y2="200" className="connection-line" />
          <line x1="350" y1="280" x2="300" y2="200" className="connection-line" />
        </g>

        {/* Central consolidated object - final state */}
        <g className="capability-core">
          {/* Outer hexagon */}
          <path
            d="M 300 140 L 340 160 L 340 200 L 300 220 L 260 200 L 260 160 Z"
            className="core-shape"
          />

          {/* Inner modules */}
          <g className="core-modules">
            <rect x="270" y="155" width="25" height="20" rx="2" className="module" />
            <text x="282.5" y="168" className="module-label">Intake</text>

            <rect x="305" y="155" width="25" height="20" rx="2" className="module" />
            <text x="317.5" y="168" className="module-label">Decisions</text>

            <rect x="270" y="185" width="25" height="20" rx="2" className="module" />
            <text x="282.5" y="198" className="module-label">Controls</text>

            <rect x="305" y="185" width="25" height="20" rx="2" className="module" />
            <text x="317.5" y="198" className="module-label">Reports</text>
          </g>

          {/* Core label */}
          <text x="300" y="240" className="core-label">Capability Operating Model</text>
        </g>
      </svg>
    </div>
  );
}
