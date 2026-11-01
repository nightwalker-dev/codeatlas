export function RepositoryImport() {
  return (
    <div style={{ padding: 'var(--spacing-xl)' }}>
      <h2 style={{ color: 'var(--color-action)', fontSize: 'var(--font-size-xl)' }}>Import Repository</h2>
      <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-lg)' }}>Connect a new repository to start indexing.</p>
      <button style={{ backgroundColor: 'var(--color-warning)', color: '#fff', border: 'none', padding: 'var(--spacing-sm) var(--spacing-lg)', borderRadius: '4px', fontWeight: 'bold' }}>Import Now</button>
    </div>
  );
}
