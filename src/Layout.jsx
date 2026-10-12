import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const [banner, setBanner] = useState(true)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const close = () => setOpen(false)
  return (
    <>
      {banner && (
        <div className="banner" role="region" aria-label="Announcement">
          <p><strong>Sample announcement:</strong> New reporting dashboards are in preview. <Link to="/insights">Read the placeholder update</Link></p>
          <button onClick={() => setBanner(false)} aria-label="Dismiss announcement">×</button>
        </div>
      )}
      <header className="nav">
        <Link to="/" className="logo" onClick={close}><span className="mark" aria-hidden="true" />Northwell Demo</Link>
        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>Menu</button>
        <nav id="menu" className={open ? 'open' : ''}>
          <a href="/#features" onClick={close}>Features</a>
          <a href="/#roles" onClick={close}>Who it's for</a>
          <Link to="/insights" aria-current={pathname === '/insights' ? 'page' : undefined} onClick={close}>Insights</Link>
          <Link to="/hr1" aria-current={pathname === '/hr1' ? 'page' : undefined} onClick={close}>HR1</Link>
          <a className="btn small" href="/#cta" onClick={close}>Book a demo</a>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="foot">
        <p><strong>Practice demo.</strong> Original placeholder content for a portfolio exercise. Not the VelloHealth website, not affiliated with VelloHealth, and not medical or legal advice. "Northwell Demo" is a made-up product name.</p>
      </footer>
    </>
  )
}
