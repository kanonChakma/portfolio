import Work1 from "../../assets/top-choice.png";
import Work2 from "../../assets/share-talk.png";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/portfolio.png";

  
  export const projectsData = [
    {
      id: 1,
      git_link: "https://github.com/kanonChakma/Top-Choice",
      demo_link: "https://topchoice.netlify.app/",
      image: Work1,
      title: "Top Choice",
      category: "web",
      desc: "Full-stack (e-commerce based) web app with advance searching feature Developed reusable component with Responsive UI.",
      tech: ["React", "Redux", "Firebase", "Express", "Mongoose", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      image_link:"https://user-images.githubusercontent.com/50201920/195927435-97ba9fff-306c-47ae-aaa2-7d50202c9e0e.png",
      image: Work2,
      title: "Share Talk",
      git_link: "https://github.com/kanonChakma/Share-Talkhttps://github.com/kanonChakma/Share-Talk",
      demo_link: "https://sharetalk.netlify.app/",
      category: "app",
      desc: "Chat application that user able ot communicate in real time.Implemented share image, emoji, show typing functionality.",
      tech : ["React", "Express", "MongoDB", "Socket.io", "Mongoose"]
    },
    {
      id: 3,
      image: Work3,
      image_link:"https://user-images.githubusercontent.com/50201920/195927435-97ba9fff-306c-47ae-aaa2-7d50202c9e0e.png",
      title: "Task Assign",
      git_link: "https://github.com/kanonChakma/Task-Assign",
      demo_link: "",
      category: "design",
      desc: "User able to add their daily task.Task able to draggable in different section, task able to update and delete.",
      tech : ["TypeScript","React","redux", "Express", "MongoDB", "Mongoose",]
    },
    {
      id: 4,
      image_link:"https://user-images.githubusercontent.com/50201920/195927435-97ba9fff-306c-47ae-aaa2-7d50202c9e0e.png",
      image: Work4,
      git_link: "https://github.com/kanonChakma/portfolio",
      demo_link: "",
      title: "My Portfolio",
      category: "app",
      desc: "This is my  personal portfolio.Provide information about me, experince, skills, education and contact info.",
      tech : ["React","","Email.js","","CSS"]
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