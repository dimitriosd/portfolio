const PORTFOLIO_DATA = {
  introMessage: "Hello, I'm Dimitrios Douras",
  shortDescription:
    "I'm a full-stack software engineer, focused on creating API-driven apps with cutting-edge front-ends.",
  aboutMeDescription: 'I am a full stack software engineer with a Masters degree in Computer Science and more than 5 ' +
    'years of professional experience in software development. I have served as both backend and frontend developer ' +
    'in large-scale, commercial projects. I have extensively used Angular for client side and Java frameworks for ' +
    'server side development, whereas I am always keeping myself up-to-date with new technologies and trends.',
  name: 'Dimitrios Douras',
  tel: '(+30)6936607373',
  email: 'dimitrios.n.douras@gmail.com',
  socialLinks: [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/dimitris.douras',
      className: 'fa fa-facebook'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/DimitriosDrs',
      className: 'fa fa-twitter'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dimitrios-douras-66b98530/',
      className: 'fa fa-linkedin'
    },
    {
      name: 'github',
      url: 'https://github.com/dimitriosd',
      className: 'fa fa-github'
    },
    {
      name: 'stackoverflow',
      url: 'https://stackoverflow.com/users/824002/dimitrios-douras',
      className: 'fa fa-stack-overflow'
    },
    {
      name: 'skype',
      url: 'skype:dimitriosd1983?chat',
      className: 'fa fa-skype'
    }
  ],
  education: [
    {
      university: 'The University of Edinburgh',
      link: 'https://www.ed.ac.uk/home',
      degree: 'MSc in Computer Science',
      year: '2010-2011',
      description:
        'Developed excellent knowledge of key concepts of computer systems and software engineering by completing projects in the form of\n' +
        'programming assignments and up-to-date case studies and attending lab courses and tutorials for each module.'
    },
    {
      university: 'University of Thessaly',
      link: 'http://www.uth.gr/en/',
      degree: 'MEng in Computer & Communications',
      year: '2001-2007',
      description:
        'Established a comprehensive educational framework on every aspect of Computer and Communications Engineering including (a)\n' +
        'Fundamentals and Applications of Computer Science, (b) Software Engineering and Information Systems, (c) Hardware and Computer\n' +
        'Architecture and (d) Signals, Telecommunication and Networks.'
    }
  ],
  work: [
    {
      company: 'Crossover for Work - Remote',
      role: 'Front End Software Architect',
      date: 'October 2014-Present',
      description: 'Developing, improving and maintaining several commercial projects using latest technology-stack: ' +
        '(1) Crossover: Platform that provides a seamless end-to-end solution for remote team management ' +
        '(2) CX Monitor: Monitoring platform ' +
        '(3) Lyris: Email/Marketing web application'
    },
    {
      company: 'Synasource PC - Athens, Greece',
      role: 'Co-founder / Developer',
      date: 'February 2012-June 2014',
      description: 'Developed the server side of a mobile application (Get The Bet), a sports app for providing statistics and making predictions on football games\n' +
        'based on machine learning algorithms. Available on iOS and Android smartphones'
    },
    {
      company: 'BGC Partners - London, UK',
      role: 'Developer Analyst – Back Office Integration Team',
      date: 'February 2012-June 2014',
      description: 'Analyzing, designing and developing software solutions and implementing changes to the existing core financial applications. (Technology-\n' +
        'stack: JAVA, Unix/Linux Platform, Spring MVC, Struts2, Sybase ASE/IQ, Hibernate, XML, Web Services, Mule ESB, JMS/TibcoEMS,\n' +
        'FIX Protocol, Performance Tuning, Groovy).'
    }
  ],
  skills: [
    {
      skillname: 'Javascript',
      knowledge: '90%'
    },
    {
      skillname: 'Angular',
      knowledge: '90%'
    },
    {
      skillname: 'React',
      knowledge: '50%'
    },
    {
      skillname: 'Java',
      knowledge: '90%'
    },
    {
      skillname: 'Node.js',
      knowledge: '50%'
    },
    {
      skillname: 'Databases (RDBMS / NoSQL)',
      knowledge: '80%'
    },
  ],
  portfolio: [
    {
      name: 'Crossover',
      description: 'Web application',
      imgurl: 'images/portfolio/Crossover.jpg',
      modalimgurl: 'images/portfolio/modals/Crossover.jpg',
      fulldescription: 'Crossover connects companies to the best talent from around the world and provides a seamless end-to-end solution for remote team management.',
      tech: 'Java 8, Spring MVC, Hibernate, MySQL, AWS, DynamoDB, ElasticSearch, Redis, AngularJS, Angular6',
      link: 'https://www.crossover.com'
    },
    {
      name: 'Lyris HQ',
      description: 'Web application',
      imgurl: 'images/portfolio/AureaLyris.jpg',
      modalimgurl: 'images/portfolio/modals/lhq-aurea.png',
      fulldescription: 'Lyris is a cloud-based email marketing solution that enables you to deeply engage your customer base in relevant and specific conversations.',
      tech: 'Angular5/6',
      link: 'https://www.aurea.com/library/campaign-manager/'
    },
    {
      name: 'CX-Monitor',
      description: 'Web application',
      imgurl: 'images/portfolio/CX-Monitor.jpg',
      modalimgurl: 'images/portfolio/modals/cx-monitor.png',
      fulldescription: 'Aurea CX Monitor is a comprehensive IT monitoring and management solution delivering the system monitoring, root-cause analysis, and issue identification tools you need to run your business in real-time.',
      tech: 'Java, JSP Servlets, ExtJS',
      link: 'https://www.aurea.com/library/cx-monitor/'
    },
    {
      name: 'Get The Bet',
      description: 'Mobile application',
      imgurl: 'images/portfolio/getthebet.jpg',
      modalimgurl: 'images/portfolio/modals/getthebet-modal.png',
      fulldescription: 'A sports app for providing statistics and making predictions on football games\n' +
        'based on machine learning algorithms.',
      tech: 'Java, Weka, Spring MVC, Hibernate, MySQL, Google App Engine, Google cloud',
      link: 'https://appadvice.com/app/get-bet-football-betting-predictive-analysis-quantitative/849611447'
    },
  ]
};

export default PORTFOLIO_DATA;
