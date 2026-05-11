import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPython,
  FaReact,
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

export const skills = [
  { name: 'Java', level: 88, category: 'Programming', icon: FaJava },
  { name: 'Python', level: 84, category: 'Programming', icon: FaPython },
  { name: 'JavaScript', level: 80, category: 'Programming', icon: SiJavascript },
  { name: 'HTML', level: 92, category: 'Frontend', icon: SiHtml5 },
  { name: 'CSS', level: 86, category: 'Frontend', icon: FaCss3Alt },
  { name: 'Tailwind CSS', level: 82, category: 'Frontend', icon: SiTailwindcss },
  { name: 'React', level: 78, category: 'Frontend', icon: FaReact },
  { name: 'Node.js', level: 58, category: 'Backend', icon: FaCode },
  { name: 'MySQL', level: 76, category: 'Database', icon: SiMysql },
  { name: 'GitHub', level: 82, category: 'Tools', icon: FaGithub },
  { name: 'VS Code', level: 90, category: 'Tools', icon: FaCode },
  { name: 'OOP / DBMS / DSA', level: 80, category: 'Concepts', icon: FaDatabase },
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
