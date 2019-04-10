import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
  {
    id: 1,
    title: "dragonStack",
    description:
      "dragonStack is a full-stack web application with both a backend and a frontend. It uses Node.js, Express.js, and PostgreSQL on the backend to create a server, API, and manage the database. For the frontend, dragonStack uses React.js, Redux, and various JavaScript modules.",
    link: "https://github.com/brienmizell/dragonStack",
    image: project1
  },
  {
    id: 2,
    title: "Polifactual",
    description: `Polifactual is a web application that informs users on their local, state, and national legislative representatives.

      By taking a users address and zipcode, our application can pull in information from the Google Civic Information API to display local, state, and national reps information for the user. National(of course) will be the same for every user.`,
    link: "https://github.com/brienmizell/Polifactual",
    image: project2
  },
  {
    id: 3,
    title: "Collection of React projects",
    description: `A collection of various React projects I have worked on, or I am in the process of working on.

      Each folder has its readme about that project.`,
    link: "https://github.com/brienmizell/mini-react-projects",
    image: project3
  }
];

export default PROJECTS;
