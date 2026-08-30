import type { Project } from "../types/projects";

export const projects: Project[] = [
    {
        id: 'mediahub',
        slug: 'mediahub',
        title: 'MediaHub',
        tagline: 'MOBILE • FLUTTER',
        category: ['mobile'],
        description: 'Centralized media automation and video processing application with background rendering capabilities.',
        tech_stack: ['Flutter', 'Dart', 'SQLite'],
        image_light: '/projects/light/mediahub.png',
        image_dark: '/projects/dark/mediahub.png',
        image_position: 'object-top',
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
        image_light: '/projects/light/mathmentor.png',
        image_dark: '/projects/dark/mathmentor.png',
        image_position: 'object-left-top',
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
        image_light: '/projects/light/algoinsight.png',
        image_dark: '/projects/dark/algoinsight.png',
        image_position: 'object-left-top',
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
        image_light: '/projects/light/Habitsense.png',
        image_dark:'/projects/dark/Habitsense.png',
        image_position: 'object-top',
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
        image_light: '/projects/light/hotelmanagementsystem.png',
        image_dark: '/projects/dark/hotelmanagementsystem.png',
        image_position: 'object-left-top',
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
        image_light: '/projects/light/2d-physics-simulator.png',
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
        image_light: '/projects/light/art-gallery.png',
        featured: false,
        links: {
            web: 'https://chilly-art-gallery.vercel.app',
            github: 'https://github.com/ch1llysauce/Art-Gallery.git'
        }
    },
];