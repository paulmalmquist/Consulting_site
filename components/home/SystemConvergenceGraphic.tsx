'use client';

export function SystemConvergenceGraphic() {
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 sm:min-h-[300px] sm:p-6 md:min-h-[360px] md:p-8">
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Scattered execution domain nodes - initial state */}
        <g className="system-nodes">
          {/* CRM */}
          <g className="node" data-system="crm">
            <circle cx="80" cy="80" r="30" className="node-circle" />
            <text x="80" y="120" className="node-label">CRM</text>
          </g>

          {/* Data Warehouse */}
          <g className="node" data-system="datawarehouse">
            <circle cx="520" cy="90" r="30" className="node-circle" />
            <text x="520" y="130" className="node-label">Data Warehouse</text>
          </g>

          {/* ERP */}
          <g className="node" data-system="erp">
            <circle cx="150" cy="180" r="30" className="node-circle" />
            <text x="150" y="220" className="node-label">ERP</text>
          </g>

          {/* Helpdesk */}
          <g className="node" data-system="helpdesk">
            <circle cx="450" cy="190" r="30" className="node-circle" />
            <text x="450" y="230" className="node-label">Helpdesk</text>
          </g>

          {/* Accounting */}
          <g className="node" data-system="accounting">
            <circle cx="100" cy="300" r="30" className="node-circle" />
            <text x="100" y="340" className="node-label">Accounting</text>
          </g>

          {/* Project Management */}
          <g className="node" data-system="projectmgmt">
            <circle cx="500" cy="310" r="30" className="node-circle" />
            <text x="500" y="350" className="node-label">Project Management</text>
          </g>

          {/* BI */}
          <g className="node" data-system="bi">
            <circle cx="250" cy="120" r="30" className="node-circle" />
            <text x="250" y="160" className="node-label">BI</text>
          </g>

          {/* Document Management */}
          <g className="node" data-system="docmgmt">
            <circle cx="350" cy="280" r="30" className="node-circle" />
            <text x="350" y="320" className="node-label">Document Management</text>
          </g>

          {/* Reporting */}
          <g className="node" data-system="reporting">
            <circle cx="75" cy="200" r="30" className="node-circle" />
            <text x="75" y="240" className="node-label">Reporting</text>
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
          <line x1="75" y1="200" x2="300" y2="200" className="connection-line" />
        </g>

        {/* Central NV logo - emerges as convergence target */}
        <g className="nv-logo-core" transform="translate(300, 200)">
          {/* NV Logo outline */}
          <g transform="scale(0.35) translate(-100, -80)">
            {/* N letter */}
            <path
              d="M 20 20 L 20 120 L 35 120 L 35 55 L 75 120 L 90 120 L 90 20 L 75 20 L 75 85 L 35 20 Z"
              className="nv-letter"
            />
            {/* V letter */}
            <path
              d="M 110 20 L 140 120 L 155 120 L 185 20 L 168 20 L 147.5 95 L 127 20 Z"
              className="nv-letter"
            />
          </g>

          {/* Subtle glow effect */}
          <circle cx="0" cy="0" r="50" className="nv-glow" />
        </g>
      </svg>
    </div>
  );
}
