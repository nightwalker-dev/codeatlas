import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { RepositoryImport } from './pages/RepositoryImport';

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'RepositoryImport':
        return <RepositoryImport />;
      case 'FileExplorer':
        return <div style={{ padding: 'var(--spacing-xl)' }}><h2>File Explorer</h2><p>Select a file to view its contents.</p></div>;
      case 'DependencyGraph':
        return <div style={{ padding: 'var(--spacing-xl)' }}><h2>Dependency Graph</h2><p>Visual map of module relationships.</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: 'var(--color-canvas)' }}>
      <Navigation />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;
