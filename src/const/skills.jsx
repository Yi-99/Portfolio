import { Icon } from '@iconify/react';

const skills = [
  {
    name: 'HTML',
    icon: <Icon className="skill_icon " icon="logos:html-5" />,
    percent: 90,
    ref: 'html',
  },
  {
    name: 'CSS',
    icon: <Icon className="skill_icon " icon="logos:css-3" />,
    percent: 75,
    ref: 'css',
  },
  {
    name: 'JavaScript',
    icon: <Icon className="skill_icon " icon="logos:javascript" />,
    percent: 80,
    ref: 'js',
  },
  {
    name: 'C++',
    icon: <Icon className="skill_icon " icon="logos:c-plusplus" />,
    percent: 90,
    ref: 'cpp',
  },
  {
    name: 'Java',
    icon: <Icon className="skill_icon " icon="devicon:java-wordmark" />,
    percent: 75,
    ref: 'java',
  },
  {
    name: 'Python',
    icon: <Icon className="skill_icon" icon="devicon:python" />,
    percent: 25,
    ref: 'python',
  },
]

export default skills;