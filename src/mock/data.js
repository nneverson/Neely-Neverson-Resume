import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Neely',
  subtitle: `Full Stack Developer`,
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  // img: 'IMG_3045.jpg',
  paragraphTwo:
    'Full Stack Developer that creates interactive websites and apps for clients that  satisfy their every requirement.',
  paragraphOne: 'Customer satisfaction is always a goal in any project undertaking.',
  paragraphThree: 'I am passionate about problem solving and always delivering my best.',
  resume:
    'https://docs.google.com/document/d/1PuKAka-v86-USfHV3ghpk1K3xWLkhZtu1wrVcGt05t4/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jo0jzyU.png',
    title: 'Girl Talk',
    info:
      'Girl Talk is an P2P video chat application that allows young girls the oppertunity to chat safely with each other.',
    info2: '',
    url: 'https://girltalk-empowered.herokuapp.com',
    repo: 'https://github.com/nneverson/girltalk', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mQ3sjfA.png',
    title: 'Magic Magic',
    info:
      'Magic Magic is a small archive for magical girl animes, where users can discover antithesis of the typical magical girl animes',
    info2: '',
    url: 'http://magic-magic.herokuapp.com/',
    repo: 'https://github.com/nneverson/Magic-Magic', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screen Shot 2020-12-19 at 10.41.01 AM.png',
    title: 'Curatr',
    info: `Curatr reigns supreme as the best list creating application for game tracking. It's a one stop destination for creating lists related to published video games.`,
    info2: '',
    url: 'http://curatrp3ga.herokuapp.com/',
    repo: 'https://github.com/Davinki-Coders', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '<a href="mailto:neelyneverson@yahoo.com.com">',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/neely-neverson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nneverson?tab=repositories',
    },
    // {
    //   id: nanoid(),
    //   name: 'tiktok',
    //   url: 'https://www.linkedin.com/in/neely-neverson/',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
