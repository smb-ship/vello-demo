// Placeholder product screenshots drawn in code. Replace with real images later.
const SHOTS = {
  dashboard: { title: 'Patient overview', bars: [40, 62, 48, 75, 58, 88, 70] },
  schedule: { title: 'Team schedule', bars: [70, 35, 80, 45, 60, 30, 55] },
  compliance: { title: 'Audit readiness', bars: [30, 45, 55, 68, 74, 86, 94] },
  access: { title: 'Access controls', bars: [60, 60, 40, 40, 80, 50, 50] },
}
export default function Shot({ kind = 'dashboard', label }) {
  const s = SHOTS[kind] || SHOTS.dashboard
  return (
    <figure className="shot" aria-label={label || `Placeholder screenshot: ${s.title}`}>
      <div className="chrome"><i /><i /><i /><span>{s.title}</span></div>
      <div className="canvas">
        <div className="side"><b /><b /><b /><b /></div>
        <div className="chart">{s.bars.map((h, i) => <span key={i} style={{ height: h + '%' }} />)}</div>
      </div>
      <figcaption>Placeholder image</figcaption>
    </figure>
  )
}
