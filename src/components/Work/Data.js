import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

  
  export const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "Top Choice",
      category: "web",
      desc: "Full-stack (e-commerce based) web app with advance searching feature Developed reusable component with Responsive UI.",
      tech: ["React", "Redux", "Firebase", "Express", "Mongoose", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      image: Work2,
      title: "Share Talk",
      category: "app",
      desc: "Full-stack (e-commerce based) web app with advance searching feature Developed reusable component with Responsive UI.",
      tech : ["React", "Express", "MongoDB", "Socket.io"]
    },
    {
      id: 3,
      image: Work3,
      title: "Task Assign",
      category: "design",
      desc: "Full-stack (e-commerce based) web app with advance searching feature Developed reusable component with Responsive UI.",
      tech : ["React", "Express", "MongoDB", "Socket.io"]
    },
    {
      id: 4,
      image: Work4,
      title: "Blog",
      category: "app",
      desc: "Full-stack (e-commerce based) web app with advance searching feature Developed reusable component with Responsive UI.",
      tech : ["React", "Express", "MongoDB", "Socket.io"]
    },
  ];
  
  export const projectNav = [
      {
          name: 'all'
      },
      {
        name: 'web'
      },
      {
          name: 'app'
      },
      {
          name: 'design'
      }
  ]