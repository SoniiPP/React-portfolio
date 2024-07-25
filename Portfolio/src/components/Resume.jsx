import './Resume.css';

const proficiencies = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', // Add more proficiencies
];

const Resume = () => (
  <section>
    <a href="path-to-your-resume.pdf" download>Download Resume</a>
    <ul>
      {proficiencies.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);
export default Resume;