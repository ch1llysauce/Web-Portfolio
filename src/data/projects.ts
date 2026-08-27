import type { Project } from "../types/projects";

export const projects: Project[] = [
    {
        id: 'art-gallery',
        slug: 'art-gallery',
        title: 'Art Gallery',
        tagline: 'Frontend • Digital Art Showcase',
        category: ['web'],
        description: 'A modern website that showcases a curated collection of 3D artworks I have created.',
        tech_stack: ['React'],
        image: '',
        featured: false,
        links: {
            web: 'https://art-gallery-git-main-chills-projects-b7be7ec3.vercel.app',
            github: 'https://github.com/ch1llysauce/Art-Gallery.git'
        }
    },
    {
        id: 'physics-sim',
        slug: '2d-physics',
        title: '2d Physics Simulator',
        tagline: 'Physics Engine • Vanilla JS',
        category: ['web'],
        description: 'A 2d physics simulator using Javascript',
        tech_stack: ['JavaScript', 'HTML5 Canvas'],
        image: '',
        featured: false,
        links: {
            web: 'https://2d-physics-engine.vercel.app',
            github: 'https://github.com/ch1llysauce/2d-Physics.git'
        }
    },
    {
        id: 'hotel-management',
        slug: 'hotel-management-system',
        title: 'Hotel Management System',
        tagline: 'Fullstack • Property Management',
        category: ['web', 'fullstack'],
        description: 'A hotel management system using React and Firebase',
        tech_stack: ['React', 'Tailwind', 'Firebase'],
        image: '',
        featured: false,
        links: {
            web: 'https://hotelmanagement-e654a.web.app/',
            github: 'https://github.com/ch1llysauce/HotelManagementSystem.git'
        }
    },
    {
        id: 'habitsense',
        slug: 'habitsense',
        title: 'HabitSense',
        tagline: 'Mobile App • Productivity',
        category: ['mobile'],
        description: 'A habit tracking app using React Native and Firebase',
        tech_stack: ['React Native', 'Firebase'],
        image: '',
        featured: false,
        links: {
            apk: 'https://drive.google.com/file/d/1IIm8ba8LgaZFBSnNqLbyvyD5K2zq9PCr/view?usp=sharing',
            github: 'https://github.com/ch1llysauce/HabitSense.git'
        }
    },
    {
        id: 'algoinsight',
        slug: 'algoinsight',
        title: 'AlgoInsight',
        tagline: 'Web • FullStack • MERN',
        category: ['web', 'fullstack'],
        description: 'A platform for learning algorithms and data structures',
        tech_stack: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
        image: '',
        featured: true,
        links: {
            web: 'https://algo-insight-client.vercel.app',
            github: 'https://github.com/ch1llysauce/AlgoInsight.git'
        }
    },
    {
        id: 'mathmentor-ai',
        slug: 'mathmentor-ai',
        title: 'MathMentor AI',
        tagline: 'Fullstack • Web & Mobile • AI-Powered',
        category: ['web', 'fullstack', 'mobile'],
        description: 'A platform for learning mathematics and problem solving using AI.',
        tech_stack: ['React', 'React Native', 'Node', 'Express', 'MongoDB', 'Tailwind', 'Groq AI API'],
        image: '',
        featured: true,
        links: {
            web: 'https://math-mentor--ai.vercel.app',
            apk: 'https://drive.google.com/file/d/1m-BFq6Wm6XaJdYPxZoQUEToC9daYzTN0/view?usp=sharing',
            github: 'https://github.com/ch1llysauce/MathMentor-AI.git'
        }
    },
    {
        id: 'mediahub',
        slug: 'mediahub',
        title: 'MediaHub',
        tagline: 'Mobile App • Media Player',
        category: ['mobile'],
        description: 'A simple media player app using Flutter and Drift SQLite for local storage.',
        tech_stack: ['Flutter', 'Drift SQLite'],
        image: '',
        featured: true,
        links: {
            apk: 'https://drive.google.com/file/d/1k7cTHZLA6vkplZBmgBYV5SX3F7rF7xIU/view?usp=sharing',
            github: 'https://github.com/ch1llysauce/MediaHub.git'
        }
    }
]