import React, { createContext, useContext, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDOM(theme: Theme) {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'light') {
        root.classList.remove('dark');
        root.classList.add('light');
        body.classList.remove('dark');
        body.classList.add('light');
    } else {
        root.classList.remove('light');
        root.classList.add('dark');
        body.classList.remove('light');
        body.classList.add('dark');
    }
    localStorage.setItem('chilly_portfolio_theme', theme);
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('chilly_portfolio_theme');
        const initial: Theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
        applyThemeToDOM(initial);
        return initial;
    });

    const toggleTheme = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';

        if (!document.startViewTransition) {
            applyThemeToDOM(next);
            setTheme(next);
            return;
        }

        document.startViewTransition(() => {
            flushSync(() => {
                applyThemeToDOM(next);
                setTheme(next);
            });
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
