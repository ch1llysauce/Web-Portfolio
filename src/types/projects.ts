export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'fullstack' | 'others';

export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    category: ProjectCategory[];
    description: string;
    tech_stack: string[];
    image?: string;
    image_light?: string;
    image_dark?: string;
    image_position?: 'object-top' | 'object-center' | 'object-bottom' | 'object-left' | 'object-left-top' | 'object-contain';
    featured: boolean;
    links: {
        web?: string;
        github?: string;
        apk?: string;
    }
}