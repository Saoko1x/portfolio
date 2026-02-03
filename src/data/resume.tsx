import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jorge Montañez",
  initials: "JM",
  url: "https://saoko1x.vercel.app",
  location: "Chihuahua, MX",
  locationLink: "https://www.google.com/maps/place/chihuahua+mx",
  description:
    "Fullstack Developer turned Entrepreneur. I love learning new technologies and building products that solve real problems. Currently focused on data science, AI, and building products.",
  summary:
    "At the age of 19, I started my career as a Fullstack Developer, working with various technologies such as React, Next.js, Java Typescript, Node.js, and SQL. Over the years, I have worked on numerous projects, including building a Blockchain SaaS, developing a custom web applications for companies, and creating a mobile app using React Native with Expo. My passion for technology has led me to explore data science and AI, where I am currently focused on building products that leverage these technologies.",
  avatarUrl: "https://051fovaubk.ufs.sh/f/zH7yCcM4NHLCEoDayxzOc8GAyxVRJi5WrnTtfYIalKZDzqgh",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Expo React Native",
    "Postgres",
    "Prisma",
    "TailwindCSS",
    "Shadcn UI",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jemg2510@gmail.com",
    tel: "+526143534630",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saoko1x",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/saoko1x",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/saoko1x",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtube.com/@saoko1x",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:jemg2510@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Grupo Roga",
      href: "https://gruporoga.com/",
      badges: [],
      location: "Chihuahua, MX",
      title: "Fullstack Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQGKfH7keGVR0Q/company-logo_200_200/company-logo_200_200/0/1630632502131/grupo_roga_logo?e=2147483647&v=beta&t=VkYmattcORAXWDnqynrpMC6IVZcviJfjf6JMzv5Rvz8",
      start: "February 2025",
      end: "Present",
      description:
        "Developed a custom web application for Grupo Roga to manage their warranty claims and customer service requests. The application was built using Next.js, Typescript, and Java, and integrated with Spring Boot for the backend. The application allows customers to submit warranty claims, track their status, and communicate with customer service representatives, and integrated with their existing systems to provide a seamless experience for their customers.",
    },
    {
      company: "Vrakka",
      badges: [],
      href: "https://www.vrakka.app/",
      location: "Chihuahua, MX",
      title: "Fullstack Developer",
      logoUrl: "https://www.vrakka.app/_next/static/media/logo.71efbd21.svg",
      start: "November 2023",
      end: "August 2024",
      description:
        "Developed a multi-level marketing mobile application for Vrakka, a startup focused on the mindfulness and wellness industry. The application was built using React Native and Expo, integrating push notifications and real-time data synchronization with Supabase. The app allows users to track their mindfulness activities, earn rewards, and connect with other users in a community setting.",
    },
    {
      company: "The Zen",
      href: "https://thezencorp.com/",
      badges: [],
      location: "Chihuahua, MX",
      title: "Co-Founder & Fullstack Developer",
      logoUrl: "",
      start: "November 2022",
      end: "November 2023",
      description:
        "As a co-founder and fullstack developer at The Zen, I led the development of multiple web applications, including a custom e-commerce platform and a mobile app for managing customer orders. The applications were built using Next.js, Typescript, and Node.js, and integrated with Stripe for payment processing. I also implemented blockchain technology with Polygon and Solana to enhance the security and transparency of transactions, and utilized NFT technology to create unique digital assets for customers.",
    },
    {
      company: "Bita Fitness",
      href: "https://www.bitafitness.com.mx/",
      badges: [],
      location: "Chihuahua, MX",
      title: "Fullstack Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluGrLBJonvCf6SHUftes7oPjIFYChDHnIEA&s",
      start: "January 2022",
      end: "November 2022",
      description:
        "Developed a custom web application for Bita Fitness, a fitness and wellness company, to manage their customer subscriptions and class schedules. The application was built using Next.js, Typescript, and Node.js, and integrated with Stripe for payment processing. The application allows customers to manage their subscriptions, book classes, and track their fitness progress.",
    },
    {
      company: "Freelance",
      href: "https://www.fiverr.com/saoko1x",
      badges: [],
      location: "Chihuahua, MX",
      title: "Fullstack Developer",
      logoUrl: "/fiverr.png",
      start: "January 2020",
      end: "Present",
      description:
        "Worked as a freelance fullstack developer, building custom web applications for various clients. Technologies used include React, Next.js, Typescript, Node.js, and PostgreSQL. Projects included e-commerce platforms, content management systems, and custom APIs.",
    },
  ],
  education: [
    {
      school: "Escuelita Maker",
      href: "https://escuelitamaker.com/",
      degree: "batch 4 ",
      logoUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/fda4a3211820623.672a4c78a3632.jpg",
      start: "2025",
      end: "2026",
    },
    {
      school: "Escuelita Maker",
      href: "https://escuelitamaker.com/",
      degree: "batch 2 ",
      logoUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/fda4a3211820623.672a4c78a3632.jpg",
      start: "2024",
      end: "2025",
    },
    {
      school: "Universidad Tecnológica de Chihuahua",
      href: "https://www.utch.edu.mx/",
      degree: "Bachelor's Degree of Information Technology Engineering (IT)",
      logoUrl: "https://www.utch.edu.mx/wp-content/uploads/2018/05/foto-utch-chih.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Staminapp",
      href: "https://staminapp.fit/",
      dates: "September 2025 - Present",
      active: true,
      description:
        "Developed Staminapp, a health optimization app that breaks stress-energy loops using Apple Health data. The platform analyzes sleep patterns, HRV, and activity metrics to deliver personalized interventions that improve Body Battery recovery by 40%+ in 14 days. Built with React Native, SQLite, and HealthKit integration.",
      technologies: [
        "React Native with Expo",
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://staminapp.fit/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/do3k4ocu4/image/upload/v1764128345/Screenshot_2025-11-25_at_9.37.02_p.m._lttik9.png",
      video:
        "",
    },
    {
      title: "RWLM Test",
      href: "https://rlwm-task.vercel.app/demo",
      dates: "September 2025 - November 2025",
      active: true,
      description:
        "Developed RLWM Task, a web application that allows users to take cognitive assessments based on the Collins & Frank (2012) research protocol, measuring the interaction between reinforcement learning and working memory through stimulus-response association tasks.",
      technologies: [
        "React Native with Expo",
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://rlwm-task.vercel.app/demo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://051fovaubk.ufs.sh/f/zH7yCcM4NHLChMJQxT0N0zb8SWeZJKrLOuVMXvB21psUHkGD",
      video:
        "",
    },
    {
      title: "Tiendita Maker",
      href: "https://tienditamaker.vercel.app/",
      dates: "September 2024 - September 2025",
      active: true,
      description:
        "Developed a custom e-commerce platform to sell drop-shipping mexican products. The platform allows users to browse products, add them to their cart, and complete purchases using Stripe for payment processing.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tienditamaker.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://utfs.io/f/rF2DW7sv5SQ0D1RZ5Qh3dVtRoPKUeYIrbO5LizFgC7Bsyl9p",
    },
    {
      title: "Promostica",
      href: "https://promostica.vercel.app/",
      dates: "January 2025 - April 2025",
      active: true,
      description:
        "Developed a prediction market platform where users can create and participate in prediction markets on various topics. The platform allows users to create markets, place bets, and track their performance over time.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://promostica.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/do3k4ocu4/image/upload/v1750471076/zbaakyfq8qjmvwpdvde3.png",
      video: "",
    },
    {
      title: "Bita Fitness",
      href: "https://www.bitafitness.com.mx/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a custom web application for Bita Fitness, a fitness and wellness company, to manage their customer subscriptions and class schedules. The application was built using Next.js, Typescript, and Node.js, and integrated with Stripe for payment processing. The application allows customers to manage their subscriptions, book classes, and track their fitness progress.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bitafitness.com.mx/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://etqrx1247q.ufs.sh/f/83953036-478d-417a-b48e-53c46979d128-gobr2x.jpg",
      video: "",
    },
    {
      title: "Mixhub!",
      href: "https://mixhub.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a platform with a focus on connecting artists with users through music, tokenizing their work and allowing users to support them through donations. The platform allows users to create and share music mixes, discover new artists, and support their favorite musicians.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "xNFT",
        "Solana",
      ],
      links: [
        {
          type: "Website",
          href: "https://mixhub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/do3k4ocu4/image/upload/v1750471481/dir0my3ekjsinxcomdpa.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Climathon",
      dates: "May 23rd - 25th, 2025",
      location: "Chihuahua, MX",
      description:
        "Judged the Climathon hackathon, an event focused on developing solutions to combat climate change. The event brought together developers, designers, and entrepreneurs to create innovative solutions for environmental challenges.",
      image:
        "https://behold.nl/wp-content/uploads/sites/40/2023/02/Climathon-Logo.jpg",
      links: [],
    },
    {
      title: "Hack Nights",
      dates: "November 29th - December 1st, 2024",
      location: "Chihuahua, MX",
      description:
        "Mentored the Hack Nights hackathon, an event focused on developing solutions for local businesses. The event brought together developers, designers, and entrepreneurs to create innovative solutions for local business challenges.",
      image: "",
      links: [],
    },
    {
      title: "DigiEdu Hackathon",
      dates: "November 13th - 15th, 2024",
      location: "Chihuahua, MX",
      description:
        "Mentored the DigiEdu Hackathon, an event focused on developing solutions for the education sector. The event brought together developers, designers, and educators to create innovative solutions for educational challenges.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSty40M8H8vNxoGQEXaJ0DPzm8z4pLhAsTZtA&s",
      links: [],
    },
    {
      title: "NASA Space Apps",
      dates: "October 5th - 7th, 2024",
      location: "Chihuahua, MX",
      description:
        "Mentored the NASA Space Apps hackathon, an event focused on developing solutions for space exploration and research. The event brought together developers, designers, and scientists to create innovative solutions for space-related challenges.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Space_Apps_Logo_White.png",
      win: "Best Data Hack",
      links: [],
    },
    {
      title: "Startup Fintech",
      dates: "May 24th - 26th, 2024",
      location: "Chihuahua, MX",
      description:
        "Mentored the Startup Fintech hackathon, an event focused on developing solutions for the financial technology sector. The event brought together developers, designers, and entrepreneurs to create innovative solutions for fintech challenges.",
      image:
        "https://cdn.prod.website-files.com/5ee1205133aab8ebebcb0e8d/6408c58ce9d8e06a707e6025_techstars%20logo%20centrado%20fondo%20blanco.jpg",
      links: [],
    },
    {
      title: "Techbridge",
      dates: "November 15th - 16th, 2024",
      location: "Ciudad Juárez, MX",
      description:
        "Developed a custom web application to calculate the highest and lowest prices of houses in Ciudad Juárez, Mexico. The application allows users to input various parameters such as location, size, and number of rooms, and returns a list of houses that match the criteria.",
      image: "http://www.techbridge.mx/images/logos/techbridge-logo.svg",
      links: [],
    },
    {
      title: "SHDH Solana Hackathon",
      dates: "July 29th - 30th, 2023",
      location: "Chihuahua, MX",
      description:
        "Developed a xNFT-based solution to track the ownership of digital assets. The solution allows users to securely store and share their digital assets with others, ensuring transparency and security.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/681/944/datas/medium.jpeg",
      links: [],
    },
    {
      title: "Etherfuse Hackathon 2",
      dates: "June 2nd - 4th, 2023",
      location: "Chihuahua, MX",
      description:
        "Developed a blockchain-based solution to track plot and land ownership. The solution allows users to securely store and share their plot information with others, ensuring transparency and security.",
      image:
        "https://media.licdn.com/dms/image/v2/C560BAQEWsuswbcEudA/company-logo_200_200/company-logo_200_200/0/1656611797179/etherfuse_logo?e=2147483647&v=beta&t=Nmth8XHWa2kmYmAwh5X4v0m1IU2m0RY1ZxNB-mQAGZI",
      links: [],
    },
    {
      title: "Talentland Hackathon",
      dates: "April 10th - 12th, 2023",
      location: "Guadalajara, MX",
      description:
        "Developed a custom web application to help people find their best diet based on their preferences and health conditions. The application allows users to input their dietary preferences, health conditions, and goals, and returns a personalized diet plan.",
      image:
        "https://2022.talent-land.mx/wp-content/uploads/2022/04/tl-2022-land-hackathon-ver-800-a.png",
      links: [],
    },
    {
      title: "Etherfuse Hackathon",
      dates: "November 11th - 13th, 2022",
      location: "Chihuahua, MX",
      description:
        "Developed a blockchain-based solution to track the medical records of patients. The solution allows patients to securely store and share their medical records with healthcare providers, ensuring privacy and security.",
      image:
        "https://media.licdn.com/dms/image/v2/C560BAQEWsuswbcEudA/company-logo_200_200/company-logo_200_200/0/1656611797179/etherfuse_logo?e=2147483647&v=beta&t=Nmth8XHWa2kmYmAwh5X4v0m1IU2m0RY1ZxNB-mQAGZI",
      links: [],
    },
  ],
} as const;
