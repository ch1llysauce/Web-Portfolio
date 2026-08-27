export interface Milestone {
    id: string;
    year: string;
    title: string;
    subtitle: string;
    description: string;
    tech_stack: string[];
    isEducation?: boolean;
    expectedGraduation?: string;
}