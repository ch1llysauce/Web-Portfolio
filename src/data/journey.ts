import type { Milestone } from "../types/journey";

export const journeyMilestones: Milestone[] = [
    {
        id: 'ai-mobile-era',
        year: '2025 - Present',
        title: 'Mobile & AI Engineering',
        subtitle: 'Production & Architecture',
        description: 'Specializing in offline-first mobile applications, state sync, and integrating LLM-powered features into production systems.',
        tech_stack: ['React Native', 'Expo', 'Flutter', 'Groq AI API']
    },
    {
        id: 'fullstack-web-era',
        year: '2025',
        title: 'Full-Stack Web Development',
        subtitle: 'Scalable Web Platforms',
        description: 'Engineered database-driven web platforms, RESTful services, and real-time interactive user interfaces.',
        tech_stack: ['React', 'Node.js', 'Express', 'Firebase', 'MongoDB']
    },
    {
        id: 'frontend-web',
        year: '2024',
        title: 'Frontend Web Development',
        subtitle: 'Interactive Web Interfaces',
        description: 'Developed interactive web interfaces using React and Tailwind CSS.',
        tech_stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
    },
    {
        id: 'academic-foundation',
        year: '2023 - 2027',
        title: 'BS Computer Science',
        subtitle: 'Academic Foundations',
        description: 'Core computer science fundamentals covering algorithms, software architectures, low-level programming, and object-oriented paradigms.',
        tech_stack: ['C++', 'Java', 'Data Structures', 'OOP', 'Python', 'Dart'],
        isEducation: true,
        expectedGraduation: 'Expected Graduation: 2027'
    }
];