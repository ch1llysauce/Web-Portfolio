export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'fullstack' | 'others';

export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    category: ProjectCategory[];
    description: string;
    tech_stack: string[];
    image: string;
    featured: boolean;
    links: {
        web?: string;
        github?: string;
        apk?: string;
    }
}