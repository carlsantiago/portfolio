const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      title: "Carl Santiago",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

let projects = [
  {
    name: "Career HeadStart",
    img: "headstart.png",
    description:
      "A collaborative full-stack project. A job posting/search website.",
    github: "https://github.com/carlsantiago/career-headstart",
    deployLink: "https://career-head-start.herokuapp.com/",
    techUsed: "Sequelize, bcrypt, handlebars, etc",
  },
  {
    name: "Tech Blog",
    img: "techblog.png",
    description:
      "My first full-stack project. A blogging website where I used MVC paradigm, handlebars, and other npm packages",
    deployLink: "https://tech-blog-carlsantiago.herokuapp.com/",
    github: "https://github.com/carlsantiago/tech-blog",
    techUsed: "bcrypt, connect-session-sequelize, express-handlebars, etc",
  },
  {
    name: "Day Maker",
    img: "dayMaker.png",
    description:
      "First bootcamp collaborative project, I was responsible for the landing page.",
    deployLink: "https://carlsantiago.github.io/Magpies-Project-1/",
    github: "https://github.com/carlsantiago/Magpies-Project-1",
    techUsed: "HTML5, CSS3, JavaScript, Server-Side APIs, UIkit",
  },
  {
    name: "Weather Dashboard",
    img: "weather.png",
    description:
      "A  weather dashboard app that shows current weather conditions and the future weather outlook.",
    github: "https://github.com/carlsantiago/weather-app",
    deployLink: "https://carlsantiago.github.io/weather-app/",
    techUsed: "HTML5, CSS3, JavaScript, Server-Side APIs, Bootstrap",
  },
  {
    name: "E-commerce back end",
    img: "ecommerce.png",
    description:
      "An app that can be used to CRUD an e-commerce back end database.",
    github: "https://github.com/carlsantiago/eCommerce-back-end",
    deployLink: "https://youtu.be/3m7y8xxVHWs",
    techUsed: "Express, mySQL, Sequelize, JavaScript",
  },
];

const skills = [
  {
    name: "Computer Science applied to JavaScript",
    skill: [
      {
        name: "Algorithms (Searches, Sorts)",
        learned: true,
      },
      {
        name: "Efficiency",
        learned: true,
      },
      {
        name: "Time Complexity",
        learned: true,
      },
      {
        name: "Big O Notation",
        learned: true,
      },
      {
        name: "Data Structures",
        learned: true,
      },
    ],
  },
  {
    name: "Server Side Development",
    skill: [
      {
        name: "Node.js",
        learned: true,
      },
      {
        name: "Express",
        learned: true,
      },
      {
        name: "User Authentication",
        learned: true,
      },
      {
        name: "Progressive Web Applications",
        learned: false,
      },
      {
        name: "MERN Stack",
        learned: false,
      },
    ],
  },
  {
    name: "Deployment/Command-Line Fundamentals",
    skill: [
      {
        name: "Heroku",
        learned: true,
      },
      {
        name: "Git",
        learned: true,
      },
      {
        name: "GitHub Pages",
        learned: true,
      },
    ],
  },
  {
    name: "Api Interaction",
    skill: [
      {
        name: "API",
        learned: true,
      },
      {
        name: "JSON",
        learned: true,
      },
      {
        name: "AJAX",
        learned: true,
      },
    ],
  },
  {
    name: "Databases",
    skill: [
      {
        name: "MySQL",
        learned: true,
      },
      {
        name: "MongoDB",
        learned: false,
      },
    ],
  },
];

router.get("/projects", async (req, res) => {
  try {
    res.render("projects", {
      title: "Projects",
      projects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/skills", async (req, res) => {
  try {
    res.render("skills", {
      title: "Skills",
      skills,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/contact", async (req, res) => {
  try {
    res.render("contact", {
      title: "Contact",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
