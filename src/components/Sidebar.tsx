

export function Sidebar() {
  return (
    <aside style={{
      width: '250px',
      backgroundColor: 'var(--color-midnight-black)',
      borderRight: '1px solid var(--color-muted-sage-grey)',
      padding: '2rem 1rem',
      height: '100%',
      color: 'var(--color-warm-cream-beige)'
    }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <li style={{ cursor: 'pointer', padding: '0.5rem', borderRadius: '4px' }}>Dashboard</li>
        <li style={{ cursor: 'pointer', padding: '0.5rem', borderRadius: '4px' }}>Repository Import</li>
        <li style={{ cursor: 'pointer', padding: '0.5rem', borderRadius: '4px' }}>File Explorer</li>
        <li style={{ cursor: 'pointer', padding: '0.5rem', borderRadius: '4px' }}>Dependency Graph</li>
      </ul>
    </aside>
  );
}
