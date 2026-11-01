
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: 'var(--color-midnight-black)' }}>
      <Navigation />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          {/* Main content will go here */}
          <h1>Welcome to CodeAtlas</h1>
          <p style={{ color: 'var(--color-acid-lime)' }}>Status: Operational</p>
        </main>
      </div>
    </div>
  );
}

export default App;
