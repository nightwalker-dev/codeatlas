export function Dashboard() {
  return (
    <div style={{ padding: 'var(--spacing-xl)' }}>
      <h2 style={{ color: 'var(--color-action)', fontSize: 'var(--font-size-xl)' }}>Dashboard</h2>
      <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-muted)' }}>Overview of your repositories and recent activity.</p>
      <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', border: '1px solid var(--color-success)', borderRadius: '8px', display: 'inline-block' }}>
        <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>All systems operational</span>
      </div>
    </div>
  );
}
