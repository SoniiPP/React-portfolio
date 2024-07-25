import './Portfolio.css';

const projects = [
  { title: 'Project 1', image: 'path-to-image', appLink: 'url-to-deployed-app', repoLink: 'url-to-github-repo' },
  { title: 'Project 2', image: 'path-to-image', appLink: 'url-to-deployed-app', repoLink: 'url-to-github-repo' },
  // Add more projects
];

const Portfolio = () => (
  <section>
    {projects.map((project, index) => (
      <div key={index} className="project">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <a href={project.appLink} target="_blank" rel="noopener noreferrer">View App</a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    ))}
  </section>
);
export default Portfolio;