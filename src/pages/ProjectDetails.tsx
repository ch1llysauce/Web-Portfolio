import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-40 pb-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">The project you are looking for does not exist or has been moved.</p>
        <Link to="/projects">
          <Button variant="primary" size="md">
            Back to All Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-10">
      {/* Back Button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          Back to Projects
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <Badge key={cat} variant="category">
              {cat}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.links.web && (
            <Button variant="primary" size="md" href={project.links.web} external>
              Live Demo
            </Button>
          )}
          {project.links.apk && (
            <Button variant="primary" size="md" href={project.links.apk} external>
              Download APK
            </Button>
          )}
          {project.links.github && (
            <Button variant="primary" size="md" href={project.links.github} external>
              Source Code
            </Button>
          )}
        </div>
      </div>

      {/* Hero / Media Banner */}
      <div className="aspect-video w-full overflow-hidden rounded-3xl bg-black/5 dark:bg-[#161c2e] border border-black/10 dark:border-[#232d4b] shadow-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Tech Stack Breakdown */}
      <div className="rounded-2xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-6 space-y-3 backdrop-blur-xl shadow-xl">
        <h2 className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Technologies & Tools Used
        </h2>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech_stack.map((tech) => (
            <Badge key={tech} variant="tech" className="text-xs py-1 px-3">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
};