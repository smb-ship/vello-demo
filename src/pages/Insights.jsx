import { Link } from 'react-router-dom'

export default function Insights() {
  return (
    <section className="wrap page">
      <h1>Insights</h1>
      <p className="lead">This page used to live at <code>/resources</code>. It was renamed to <code>/insights</code>, and the old link now redirects here.</p>
      <p>Try it: open <Link to="/resources">/resources</Link> and watch the address bar change.</p>
      <ul className="list">
        <li>Placeholder article: Five ways to cut scheduling gaps</li>
        <li>Placeholder article: A simple audit checklist</li>
      </ul>
    </section>
  )
}
