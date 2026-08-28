import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {path === '/projects' ? <Projects /> : <Home />}
      </main>
      <Footer />
    </div>
  );
}

export default App;