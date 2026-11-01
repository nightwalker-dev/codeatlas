export function Navigation() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 'var(--spacing-md) var(--spacing-xl)',
      backgroundColor: 'var(--color-canvas)',
      borderBottom: '1px solid var(--color-border)',
      color: 'var(--color-text)'
    }} aria-label="Main Navigation">
      <div style={{ fontWeight: 'bold', color: 'var(--color-action)', fontSize: 'var(--font-size-lg)' }}>CodeAtlas</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
        <span>User</span>
        <button style={{ backgroundColor: 'var(--color-action)', color: '#fff', border: 'none', padding: 'var(--spacing-sm) var(--spacing-md)', borderRadius: '4px' }}>Settings</button>
      </div>
    </header>
  );
}
