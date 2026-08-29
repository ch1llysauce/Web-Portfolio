import type { Project } from "../types/projects";

export const projects: Project[] = [
    {
        id: 'mediahub',
        slug: 'mediahub',
        title: 'MediaHub',
        tagline: 'MOBILE • FLUTTER',
        category: ['mobile'],
        description: 'Centralized media automation and video processing application with background rendering capabilities.',
        tech_stack: ['Flutter', 'Dart', 'SQLite', 'FFmpeg'],
        image: '',
        featured: true,
        links: {
            apk: 'https://drive.google.com/file/d/1k7cTHZLA6vkplZBmgBYV5SX3F7rF7xIU/view?usp=sharing',
            github: 'https://github.com/ch1llysauce/MediaHub.git'
        }
    },
    {
        id: 'mathmentor-ai',
        slug: 'mathmentor-ai',
        title: 'MathMentor AI',
        tagline: 'AI • FULL-STACK',
        category: ['ai', 'fullstack', 'mobile', 'web'],
        description: 'AI-Powered Mathematics learning platform with step-by-step problem solving, automated hints, and progress tracking.',
        tech_stack: ['React Native', 'Node.js', 'MongoDB', 'AI'],
        image: '',
        featured: true,
        links: {
            web: 'https://math-mentor--ai.vercel.app',
            apk: 'https://drive.google.com/file/d/1m-BFq6Wm6XaJdYPxZoQUEToC9daYzTN0/view?usp=sharing',
            github: 'https://github.com/ch1llysauce/MathMentor-AI.git'
        }
    },
    {
        id: 'algoinsight',
        slug: 'algoinsight',
        title: 'AlgoInsight',
        tagline: 'WEB • MERN',
        category: ['web', 'fullstack'],
        description: 'Algorithm visualizer platform with step-by-step state animations and execution complexity analysis.',
        tech_stack: ['MERN', 'React', 'Charts'],
        image: '',
        featured: true,
        links: {
            web: 'https://algo-insight-client.vercel.app',
            github: 'https://github.com/ch1llysauce/AlgoInsight.git'
        }
    },
    {
        id: 'habitsense',
        slug: 'habitsense',
        title: 'HabitSense',
        tagline: 'MOBILE • REACT NATIVE',
        category: ['mobile'],
        description: 'Cross-platform mobile habit tracking system with cloud sync and custom notifications.',
        tech_stack: ['React Native', 'Firebase'],
        image: '',
        featured: false,
        links: {
            apk: 'https://drive.google.com/file/d/1IIm8ba8LgaZFBSnNqLbyvyD5K2zq9PCr/view?usp=sharing',
            github: 'https://github.com/ch1llysauce/HabitSense.git'
        }
    },
    {
        id: 'hotel-management',
        slug: 'hotel-management-system',
        title: 'Hotel Management System',
        tagline: 'WEB • FULLSTACK',
        category: ['web', 'fullstack'],
        description: 'Property booking and room management system with real-time reservation analytics.',
        tech_stack: ['React.js', 'Firebase'],
        image: '',
        featured: false,
        links: {
            web: 'https://hotelmanagement-e654a.web.app/',
            github: 'https://github.com/ch1llysauce/HotelManagementSystem.git'
        }
    },
    {
        id: 'physics-sim',
        slug: '2d-physics',
        title: '2D Physics Simulator',
        tagline: 'WEB • CANVAS',
        category: ['web'],
        description: 'Interactive 2D physics engine simulating rigid body dynamics, gravity, and collisions.',
        tech_stack: ['HTML', 'CSS', 'JavaScript'],
        image: '',
        featured: false,
        links: {
            web: 'https://2d-physics-engine.vercel.app',
            github: 'https://github.com/ch1llysauce/2d-Physics.git'
        }
    },
    {
        id: 'art-gallery',
        slug: 'art-gallery',
        title: 'Art Gallery',
        tagline: 'WEB • FRONTEND',
        category: ['web'],
        description: 'A modern interactive website showcasing digital art collections and 3D web experiences.',
        tech_stack: ['React.js'],
        image: '',
        featured: false,
        links: {
            web: 'https://art-gallery-git-main-chills-projects-b7be7ec3.vercel.app',
            github: 'https://github.com/ch1llysauce/Art-Gallery.git'
        }
    },
];