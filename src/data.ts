export const profile = {
  name: 'Gajanand Kumar',
  nickname: 'Gajju',
  role: 'BCA Student | Developer | Tech Enthusiast',
  college: 'Lalit Narayan Mishra College of Business Management',
  location: 'Muzaffarpur, Bihar, India',
  // PLACEHOLDER: replace with real links/email
  email: 'gajanandk854@gmail.com',
  github: 'https://github.com/GAJJUBHAIH',
  linkedin: 'https://www.linkedin.com/in/gajanand-kumar-b2837b3ab/',
  instagram: 'https://www.instagram.com/mazstygamer',
  resumeUrl: '/resume.pdf', // PLACEHOLDER: add resume.pdf to /public
  avatarUrl: '/profile.jpg'
};

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Python', 'C', 'C++', 'SQL', 'Git & GitHub'
];

export type Project = {
  title: string;
  category: 'Web' | 'AI' | 'College' | 'App';
  description: string;
  link: string; // PLACEHOLDER
};

export const projects: Project[] = [
  { title: 'Three13 Fitness Platform', category: 'Web', description: 'A modern fitness platform with workout tracking and a clean UI.', link: '#' },
  { title: 'PDF Master Ultimate', category: 'App', description: 'All-in-one PDF toolkit: merge, split, convert and compress.', link: '#' },
  { title: 'AI Tools', category: 'AI', description: 'A collection of AI-powered utilities and experiments.', link: '#' },
  { title: 'College Projects', category: 'College', description: 'Academic projects built during the BCA program.', link: '#' },
  { title: 'Personal Web Apps', category: 'Web', description: 'Side projects exploring new frameworks and ideas.', link: '#' }
];

export const education = [
  { year: 'Present', title: 'BCA', place: 'Lalit Narayan Mishra College of Business Management' }
];

export const achievements = [
  'Academic achievements in the BCA program',
  'Certifications in web development and programming',
  'Participated in hackathons',
  'Leadership and team activities'
];

export const services = [
  { title: 'Web Development', desc: 'Responsive, performant websites and web apps.' },
  { title: 'UI/UX Design', desc: 'Clean, modern, user-centered interfaces.' },
  { title: 'AI Integration', desc: 'Embedding AI features into products and tools.' },
  { title: 'Technical Consulting', desc: 'Guidance on stack, architecture and best practices.' }
];

export const stats = [
  { label: 'Projects', value: 10 },
  { label: 'Technologies', value: 10 },
  { label: 'Cups of Coffee', value: 500 }
];
