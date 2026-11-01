

export function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: 'var(--color-midnight-black)',
      borderBottom: '1px solid var(--color-muted-sage-grey)',
      color: 'var(--color-warm-cream-beige)'
    }}>
      <div style={{ fontWeight: 'bold', color: 'var(--color-electric-cobalt-blue)' }}>CodeAtlas</div>
      <div>
        <span style={{ marginRight: '1rem' }}>User</span>
        <button style={{ backgroundColor: 'var(--color-electric-cobalt-blue)', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}>Settings</button>
      </div>
    </nav>
  );
}
