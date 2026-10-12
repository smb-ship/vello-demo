import { Link } from 'react-router-dom'

export default function Hr1() {
  return (
    <section className="wrap page">
      <h1>HR1 readiness guide (sample page)</h1>
      <p className="lead">This is a simple landing page at <code>/hr1</code>. All text is placeholder copy and is not legal, policy, or medical advice.</p>
      <div className="tiles three">
        {[['Check your team', 'List who is affected by changes in your organization.'],
          ['Review your workflows', 'Note which daily tasks may need updating.'],
          ['Plan your next step', 'Choose an owner and a date for each task.']].map(([t, d]) => (
          <article className="tile" key={t}><h3>{t}</h3><p>{d}</p></article>
        ))}
      </div>
      <form className="lead-form" onSubmit={e => { e.preventDefault(); e.currentTarget.reset(); alert('Demo only: nothing was sent.') }}>
        <label htmlFor="email">Work email</label>
        <input id="email" type="email" required placeholder="you@example.com" />
        <button className="btn">Get the sample checklist</button>
      </form>
      <p><Link to="/">Back to home</Link></p>
    </section>
  )
}
