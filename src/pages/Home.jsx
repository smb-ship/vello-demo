import { useState } from 'react'
import { Link } from 'react-router-dom'
import Shot from '../Shot.jsx'

const FEATURES = [
  { t: 'Shared patient record', d: 'Bring notes, orders, and messages into one view your whole team can read.' },
  { t: 'Smarter scheduling', d: 'Fill gaps in the day and spot overbooked clinics before they happen.' },
  { t: 'Audit-ready reporting', d: 'Export the reports your compliance team asks for in a few clicks.' },
  { t: 'Role-based access', d: 'Give each person the right level of access, and see who opened what.' },
]
// Each role has its own screenshot kind.
// Bug fix demo: Compliance used to point at "schedule" (a mismatched image). It now uses "compliance".
const ROLES = [
  { id: 'clinicians', name: 'Clinicians', kind: 'dashboard', lead: 'Spend less time searching, more time with patients.', pts: ['See a patient summary at a glance', 'Send secure notes to colleagues', 'Get reminders for follow-ups'] },
  { id: 'admins', name: 'Practice managers', kind: 'schedule', lead: 'Keep clinics full and teams balanced.', pts: ['View every calendar in one place', 'Track no-shows and waits', 'Plan staffing a week ahead'] },
  { id: 'compliance', name: 'Compliance leads', kind: 'compliance', lead: 'Know where you stand before the audit starts.', pts: ['Track policy tasks to completion', 'Keep a clear activity log', 'Export reports on demand'] },
  { id: 'it', name: 'IT teams', kind: 'access', lead: 'Control access without slowing anyone down.', pts: ['Set permissions by role', 'Connect single sign-on', 'Review access changes'] },
]
const PROOF = [
  { n: '4.8 / 5', l: 'Sample satisfaction score' },
  { n: '38%', l: 'Sample drop in admin time' },
  { n: '120+', l: 'Sample clinics onboarded' },
]

export default function Home() {
  const [role, setRole] = useState(ROLES[0].id)
  const active = ROLES.find(r => r.id === role)
  return (
    <>
      <section className="hero wrap">
        <div>
          <h1>Care teams work better when everything is in one place.</h1>
          <p className="lead">Northwell Demo is a made-up healthcare platform that helps clinics manage records, schedules, and reports without switching tools.</p>
          <div className="row">
            <a className="btn" href="#cta">Book a demo</a>
            <a className="btn ghost" href="#features">See features</a>
          </div>
        </div>
        <Shot kind="dashboard" />
      </section>

      <section className="trust wrap" aria-label="Sample trust logos">
        <p>Placeholder logos, not real customers</p>
        <ul>{['Harbor Clinic', 'Pinecrest Health', 'Marlow Group', 'Aster Care', 'Linden Medical'].map(n => <li key={n}>{n}</li>)}</ul>
      </section>

      <section id="features" className="wrap sec">
        <h2>Four tools your team will use every day</h2>
        <div className="tiles">
          {FEATURES.map(f => (
            <article className="tile" key={f.t}>
              <span className="ico" aria-hidden="true" />
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="roles" className="roles sec">
        <div className="wrap">
          <h2>Built for the people on your team</h2>
          <div className="tabs" role="tablist" aria-label="User roles">
            {ROLES.map(r => (
              <button key={r.id} role="tab" aria-selected={r.id === role} onClick={() => setRole(r.id)}>{r.name}</button>
            ))}
          </div>
          <div className="panel" role="tabpanel">
            <div>
              <h3>{active.lead}</h3>
              <ul>{active.pts.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
            <Shot kind={active.kind} />
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <h2>Results teams could expect</h2>
        <p className="note">All numbers below are invented sample data for this demo.</p>
        <div className="proof">
          {PROOF.map(p => <div key={p.l}><strong>{p.n}</strong><span>{p.l}</span></div>)}
        </div>
        <blockquote>"Placeholder quote: setup was quick and our team found it easy to learn." <cite>Sample user, fictional clinic</cite></blockquote>
      </section>

      <section id="cta" className="cta">
        <div className="wrap">
          <h2>See it with your own workflow</h2>
          <p>Book a 30-minute walkthrough. This button is a demo and goes to the HR1 sample page.</p>
          <Link className="btn light" to="/hr1">Book a demo</Link>
        </div>
      </section>
    </>
  )
}
