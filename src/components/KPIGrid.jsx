// src/components/KPIGrid.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Small visual helper: tiny sparkline placeholder using inline SVG.
 * Replace with real chart component when you have data.
 */
function Sparkline({ positive = true }) {
  return (
    <svg
      width="60"
      height="24"
      viewBox="0 0 60 24"
      aria-hidden="true"
      className="inline-block"
    >
      <polyline
        points={positive ? '0,18 12,10 24,12 36,6 48,8 60,2' : '0,6 12,12 24,9 36,18 48,14 60,20'}
        fill="none"
        stroke={positive ? 'url(#g)' : '#f87171'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * KPICard
 * - label: small text (e.g., "Current GPA")
 * - value: main number or string
 * - deltaText: small change indicator (▲ +0.12)
 * - delta: number sign for color (positive/negative/0)
 * - meta: optional small muted text (e.g., "this term")
 */
function KPICard({ label, value, deltaText, delta = 0, meta }) {
  const deltaPositive = delta > 0;
  const deltaNeutral = delta === 0;

  return (
    <div className="bg-blue-600 border border-indigo-400 rounded-2xl p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-indigo-100">{label}</div>
          <div className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">{value}</div>
          <div className={`mt-2 text-sm ${deltaNeutral ? 'text-indigo-100' : deltaPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {deltaText}
          </div>
          {meta && <div className="mt-1 text-xs text-indigo-100">{meta}</div>}
        </div>

        <div className="ml-3 self-end">
          <Sparkline positive={deltaPositive || deltaNeutral} />
        </div>
      </div>
    </div>
  );
}

KPICard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deltaText: PropTypes.string,
  delta: PropTypes.number,
  meta: PropTypes.string,
};

KPICard.defaultProps = {
  deltaText: '',
  delta: 0,
  meta: '',
};

/**
 * KPIGrid
 * Accepts `items` array of { label, value, deltaText, delta, meta }.
 * Renders a responsive 4-column grid on large screens, 2 on small, 1 on tiny.
 */
export default function KPIGrid({ items }) {
  return (
    <section
      aria-label="Key performance indicators"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {items.map((it) => (
        <KPICard
          key={it.label}
          label={it.label}
          value={it.value}
          deltaText={it.deltaText}
          delta={it.delta}
          meta={it.meta}
        />
      ))}
    </section>
  );
}

KPIGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      deltaText: PropTypes.string,
      delta: PropTypes.number,
      meta: PropTypes.string,
    })
  ).isRequired,
};
 