import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLeaf,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPhoneAlt,
  FaPython,
  FaReact,
  FaTools,
} from 'react-icons/fa';
import {
  SiHtml5,
  SiJavascript,
  SiLeetcode,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';

export const profile = {
  name: 'Abhishek Kumar',
  roles: ['Software Developer', 'Java Developer', 'Python Programmer'],
  email: 'work.abhishek06@gmail.com',
  phone: '+91 62013 53335',
  location: 'Dehradun, India',
  resume: '/assets/Abhishek-Kumar-Resume.pdf',
  avatar: '/assets/abhishek-profile.jpeg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/abhianalytical', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-kumar-8936a8233', icon: FaLinkedin },
    { label: 'LeetCode', href: 'https://leetcode.com/abhishek_2727', icon: SiLeetcode },
    { label: 'Email', href: 'mailto:work.abhishek06@gmail.com', icon: FaEnvelope },
  ],
};

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Journey', 'Certifications', 'Services', 'Contact'];

export const stats = [
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Core Skills', value: 18, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '+' },
  { label: 'Hackathon Win', value: 1, suffix: 'st' },
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    subtitle: 'Core coding foundation',
    icon: FaCode,
    accent: 'from-cyanGlow to-mintGlow',
    skills: [
      { name: 'Java', level: 80, icon: FaJava },
      { name: 'Python', level: 70, icon: FaPython },
      { name: 'JavaScript', level: 60, icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    subtitle: 'Responsive user interfaces',
    icon: FaReact,
    accent: 'from-violetGlow to-cyanGlow',
    skills: [
      { name: 'HTML', level: 80, icon: SiHtml5 },
      { name: 'CSS', level: 80, icon: FaCss3Alt },
      { name: 'Tailwind CSS', level: 60, icon: SiTailwindcss },
      { name: 'React', level: 70, icon: FaReact },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'APIs and server-side learning',
    icon: FaNodeJs,
    accent: 'from-mintGlow to-cyanGlow',
    skills: [
      { name: 'Spring Boot', level: 68, icon: FaLeaf },
      { name: 'Node.js', level: 58, icon: FaNodeJs },
    ],
  },
  {
    title: 'Databases',
    subtitle: 'Data storage and queries',
    icon: FaDatabase,
    accent: 'from-cyanGlow to-violetGlow',
    skills: [
      { name: 'MySQL', level: 70, icon: SiMysql },
      { name: 'MongoDB', level: 60, icon: FaDatabase },
    ],
  },
  {
    title: 'Tools',
    subtitle: 'Developer workflow',
    icon: FaTools,
    accent: 'from-violetGlow to-mintGlow',
    skills: [
      { name: 'GitHub', level: 70, icon: FaGithub },
      { name: 'VS Code', level: 80, icon: FaCode },
    ],
  },
  {
    title: 'Concepts',
    subtitle: 'Problem solving basics',
    icon: FaDatabase,
    accent: 'from-cyanGlow to-violetGlow',
    skills: [
      { name: 'OOP', level: 70, icon: FaCode },
      { name: 'DSA', level: 70, icon: FaCode },
    ],
  },
];

export const projects = [
  {
    title: 'OrderEase - Food Ordering System',
    description:
      'Responsive frontend food ordering application with polished product browsing, cart functionality, and mobile-first UI patterns.',
    image: '/assets/project-placeholder.svg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    live: '#',
    github: '#',
  },
  {
    title: 'AI Chat Application',
    description:
      'Professional chat interface concept with prompt history, real-time style message states, and clean component architecture.',
    image: '/assets/project-placeholder.svg',
    tags: ['React', 'Tailwind', 'API Ready'],
    live: '#',
    github: '#',
  },
  {
    title: 'College Admission Portal',
    description:
      'Admission workflow dashboard concept for applications, course selection, student records, and status tracking.',
    image: '/assets/project-placeholder.svg',
    tags: ['React', 'MySQL', 'Forms'],
    live: '#',
    github: '#',
  },
];

export const timeline = [
  { title: 'BCA - Tula\'s Institute', detail: 'Built a strong foundation in programming, databases, and computer science fundamentals.' },
  { title: 'MCA - Uttaranchal University', detail: 'Advancing software engineering, full stack development, and practical project delivery.' },
  { title: 'Certifications', detail: 'Completed focused credentials in Python, Java OOP, SQL, and AWS Cloud Foundations.' },
  { title: 'Hackathon Achievement', detail: 'Won 1st Prize at Code with Gemini Hackathon by solving under pressure with teamwork.' },
];

export const certifications = [
  { title: 'Python Programming', issuer: 'RCPL', icon: FaPython },
  { title: 'OOPs in Java', issuer: 'SimpliLearn', icon: FaJava },
  { title: 'Introduction to SQL', issuer: 'SimpliLearn', icon: SiMysql },
  { title: 'AWS Cloud Foundations', issuer: 'AWS Academy', icon: FaAws },
];

export const services = [
  'Web Development',
  'Frontend Development',
  'Java Programming',
  'Responsive UI Design',
  'Software Solutions',
];

export const testimonials = [
  {
    name: 'Ashwin Kumar',
    role: 'Project Teammate',
    text: 'Abhishek brings calm problem solving and consistently turns ideas into clean working interfaces.',
  },
  {
    name: 'Shorabh Malik',
    role: 'Academic Mentor',
    text: 'He learns quickly, asks practical questions, and shows real ownership when building software projects.',
  },
  {
    name: 'Deepak Kumar',
    role: 'Hackathon Collaborator',
    text: 'His mix of Java logic and frontend execution helped the team move fast without losing quality.',
  },
];

export const contactCards = [
  { label: 'Email', value: profile.email, icon: FaEnvelope, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, icon: FaPhoneAlt, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'Location', value: profile.location, icon: FaMapMarkerAlt, href: '#' },
];
