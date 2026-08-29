import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';

export function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="min-h-screen bg-slate-50 dark:bg-[#070913] text-slate-800 dark:text-slate-200 flex flex-col font-sans selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
                    {/* Fixed Global Ambient Glows (Hardware-accelerated, zero-lag canvas) */}
                    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                        {/* Top-Left Blue/Indigo Glow (Behind Headings & Title) */}
                        <div
                            className="absolute -top-[10%] -left-[10%] sm:left-[0%] w-[650px] h-[550px] rounded-full blur-[1px] opacity-70 dark:opacity-90"
                            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(99,102,241,0.06) 50%, rgba(0,0,0,0) 70%)' }}
                        />
                        {/* Top-Right Ambient Aura (Behind Hero Terminal & Filters) */}
                        <div
                            className="absolute -top-[10%] -right-[10%] sm:right-[5%] w-[650px] h-[550px] rounded-full blur-[1px] opacity-70 dark:opacity-90"
                            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.20) 0%, rgba(6,182,212,0.06) 50%, rgba(0,0,0,0) 70%)' }}
                        />
                        {/* Center-Left Violet Glow (Behind About, Projects, & Cards) */}
                        <div
                            className="absolute top-[40%] -left-[10%] sm:left-[0%] w-[650px] h-[600px] rounded-full blur-[1px] opacity-60 dark:opacity-85"
                            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(168,85,247,0.04) 50%, rgba(0,0,0,0) 70%)' }}
                        />
                        {/* Bottom-Right Cyan/Emerald Glow (Behind Contact, Journey & Footer) */}
                        <div
                            className="absolute bottom-[0%] -right-[10%] sm:right-[5%] w-[650px] h-[550px] rounded-full blur-[1px] opacity-60 dark:opacity-80"
                            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.04) 50%, rgba(0,0,0,0) 70%)' }}
                        />
                    </div>

                    <div className="relative z-10 flex flex-col flex-grow">
                        <LoadingScreen />
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/projects/:slug" element={<ProjectDetails />} />
                                <Route path="*" element={<Home />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
