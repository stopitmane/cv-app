import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PersonalInfo {
  name: string; title: string; email: string;
  phone: string; location: string;
  linkedin: string; github: string; portfolio: string;
}

interface Experience {
  position: string; company: string;
  duration: string; location: string;
  responsibilities: string[];
  tags: string[];
}

interface Education {
  degree: string; institution: string; year: string;
}

interface Project {
  name: string; description: string;
  technologies: string[]; link?: string; badge?: string;
}

interface Certification {
  name: string; issuer: string; date: string;
}

@Component({
  selector: 'app-cv',
  imports: [CommonModule, FormsModule],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class CvComponent {
  activeTab: 'edit' | 'preview' = 'preview';

  personalInfo: PersonalInfo = {
    name: 'Ajayi Taiwo John',
    title: 'Frontend Developer',
    email: 'johnajayi.bincom@gmail.com',
    phone: '+234 916 065 0495',
    location: 'Lagos, Nigeria',
    linkedin: 'https://www.linkedin.com/in/ajayi-john-124970265',
    github: 'https://github.com/stopitmane',
    portfolio: 'https://groovyjwttp-portfolio.vercel.app',
  };

  summary = 'IBM-certified Frontend Developer with production experience building React and TypeScript applications. Strong in component architecture, custom hooks, and typed systems — with solid backend exposure through Python, Django, and Node.js.';

  experience: Experience[] = [
    {
      position: 'Frontend Developer',
      company: 'Enerx Ltd',
      duration: 'Mar 2024 – Present',
      location: 'Adeniyi Jones, Lagos',
      responsibilities: [
        'Designed and developed a multi-page exhibition platform using React.js and Node.js serving real-world users in production.',
        'Implemented interactive UI features and responsive components for the John SciTec Website.',
        'Authored automated test cases and integrated third-party APIs and internal microservices.',
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'API Testing'],
    },
    {
      position: 'Full Stack Developer (Apprenticeship)',
      company: 'Bincom Academy',
      duration: 'Jul 2025 – Present',
      location: 'Yaba, Lagos',
      responsibilities: [
        'Building full-stack applications within cross-functional teams following professional code review workflows.',
        'Integrating RESTful APIs with Laravel and Node.js for projects serving over 15,000 active users.',
      ],
      tags: ['React', 'Node.js', 'Laravel', 'REST APIs'],
    },
    {
      position: 'Backend Developer Intern',
      company: 'DON-CLEM LTD',
      duration: 'Feb 2025 – Jun 2025',
      location: 'Lagos',
      responsibilities: [
        'Designed and built RESTful APIs with Django REST Framework.',
        'Configured production deployments with Nginx and Gunicorn.',
        'Reduced response times by implementing Celery and Redis for async task processing.',
      ],
      tags: ['Python', 'Django REST Framework', 'Nginx', 'Celery', 'Redis'],
    },
  ];

  education: Education[] = [
    {
      degree: 'B.Tech — Biomedical/Medical Engineering',
      institution: 'Federal University of Technology, Akure (FUTA)',
      year: '2016 – 2021',
    },
  ];

  coreSkills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'HTML/CSS', 'REST APIs'];
  alsoSkills = ['Python', 'Django', 'PHP', 'Laravel', 'Angular', 'PostgreSQL', 'Redis', 'Git', 'Docker'];

  projects: Project[] = [
    { name: 'DevDoc AI',          badge: 'AI',  technologies: ['React', 'TypeScript', 'Claude AI'],              link: 'https://devdoc-ai-liart.vercel.app/',                         description: 'AI-powered code documentation tool — generates JSDoc, READMEs, code reviews, and unit tests from pasted code. Custom TypeScript hooks and prompt-engineering layer.' },
    { name: 'TaskFlow API',       badge: 'PY',  technologies: ['Python', 'Django REST', 'PostgreSQL'],           link: 'https://github.com/stopitmane/taskflow-api',                  description: 'REST API with token auth, project/task CRUD, and custom actions. Service layer separates business logic from views. 9 passing tests. Deployed on Render.' },
    { name: 'DevTrack',           badge: 'TS',  technologies: ['React', 'TypeScript', 'Custom Hooks'],           link: 'https://devtrack-app.vercel.app/',                             description: 'Productivity dashboard — Pomodoro timer state machine + typed task manager. Pomodoro count auto-increments on session complete. No external state library.' },
    { name: 'Product Dashboard',  badge: 'TS',  technologies: ['TypeScript', 'React', 'React Query', 'MUI'],    link: 'https://product-dashboard-task-drab.vercel.app/',              description: 'Fully typed admin dashboard — strict interfaces, React Query for data fetching, multi-column filtering across 194 products.' },
    { name: 'NaijaCart',          badge: '',    technologies: ['React', 'Next.js', 'Node.js'],                   link: 'https://naijacart-wttp.vercel.app/',                           description: 'Nigerian e-commerce marketplace with product search, category navigation, and mobile-first checkout flow.' },
    { name: 'Developer Portfolio', badge: '',   technologies: ['HTML', 'CSS', 'JavaScript'],                     link: 'https://groovyjwttp-portfolio.vercel.app',                    description: '11-project portfolio with scroll animations, active nav, mobile menu, and a 3-column responsive grid — built without a framework.' },
  ];

  certifications: Certification[] = [
    { name: 'IBM Full Stack Software Developer',                  issuer: 'IBM – Coursera', date: '2024' },
    { name: 'Developing AI Applications with Python & Flask',     issuer: 'IBM – Coursera', date: '2024' },
    { name: 'Developing Back-End Apps with Node.js & Express',    issuer: 'IBM – Coursera', date: '2024' },
    { name: 'Python for Data Science, AI & Development',          issuer: 'IBM – Coursera', date: '2024' },
    { name: 'Full Stack Web Development Internship',              issuer: 'New Horizons',   date: '2023' },
    { name: 'Python – Intermediate',                              issuer: 'Bincom Academy', date: '2024' },
  ];
}
