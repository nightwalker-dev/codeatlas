interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const itemStyle = {
    cursor: 'pointer',
    padding: 'var(--spacing-sm) var(--spacing-md)',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    border: 'none',
    textAlign: 'left' as const,
    width: '100%',
    transition: 'background-color 0.2s',
  };

  const navItems = [
    { id: 'Dashboard', label: 'Dashboard' },
    { id: 'RepositoryImport', label: 'Repository Import' },
    { id: 'FileExplorer', label: 'File Explorer' },
    { id: 'DependencyGraph', label: 'Dependency Graph' },
  ];

  return (
    <aside style={{
      width: '250px',
      backgroundColor: 'var(--color-canvas)',
      borderRight: '1px solid var(--color-border)',
      padding: 'var(--spacing-xl) var(--spacing-md)',
      height: '100%',
      color: 'var(--color-text)'
    }} aria-label="Sidebar Navigation">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        {navItems.map(item => (
          <li key={item.id}>
            <button
              style={{
                ...itemStyle,
                backgroundColor: currentView === item.id ? 'var(--color-border)' : 'transparent'
              }}
              aria-current={currentView === item.id ? 'page' : undefined}
              onClick={() => setCurrentView(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
