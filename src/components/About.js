import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.paragraph}>
        Hello! I'm Ravin Fisher, a dynamic professional with over 15 years of experience in the financial services industry and a strong passion for technology and web development. My career journey began in the financial sector, where I honed my skills in client management, analytical thinking, and problem-solving while managing a portfolio of over 100 clients at US Bank. My commitment to delivering exceptional service and proactive solutions consistently made me a top-performing banker.
      </p>
      <p style={styles.paragraph}>
        In recent years, I've embarked on an exciting new path in the tech world. I completed an intensive coding bootcamp at Epicodus, where I gained hands-on experience in web and mobile development. My training covered a wide range of technologies, including JavaScript, React, Node.js, and C#/.NET, and equipped me with the skills to build and maintain high-quality web applications.
      </p>
      <p style={styles.paragraph}>
        Currently, I am leveraging my technical skills as an Associate Software Developer at Fill Marketing. Here, I focus on enhancing user experiences, implementing data transformations, and ensuring the quality and responsiveness of applications.
      </p>
      <h2 style={styles.subHeader}>Key Skills and Experiences:</h2>
      <ul>
        <li>Client Management: Over 15 years of experience managing high-value client portfolios, developing strong relationships, and providing personalized service.</li>
        <li>Technical Proficiency: Skilled in JavaScript, React, Node.js, C#/.NET, HTML, CSS, SQL, and various web test automation frameworks.</li>
        <li>Problem-Solving: Adept at troubleshooting complex issues and implementing effective solutions in fast-paced environments.</li>
        <li>Collaboration: Strong ability to work with cross-functional teams, including sales, technical support, product management, and engineering.</li>
        <li>Adaptability: Proven track record of quickly mastering new technologies and adapting to changing priorities.</li>
      </ul>
      <h2 style={styles.subHeader}>My Journey</h2>
      <p style={styles.paragraph}>
        Starting in the financial services industry, I developed a keen understanding of client needs and the importance of reliable, high-quality service. My role at US Bank allowed me to build a foundation of trust with clients through proactive engagement and meticulous attention to detail. As I transitioned to web development, my goal has been to combine this customer-centric approach with cutting-edge technology to create impactful solutions.
      </p>
      <h2 style={styles.subHeader}>Personal Interests</h2>
      <p style={styles.paragraph}>
        Outside of my professional pursuits, I enjoy reading, tending to my house plants, and building intricate Lego sets. These hobbies reflect my creativity, attention to detail, and love for continuous learning.
      </p>
      <p style={styles.paragraph}>
        Thank you for visiting my portfolio. I'm excited about the future and eager to contribute to innovative projects that make a difference.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    fontSize: '2em',
    borderBottom: '2px solid #000',
    paddingBottom: '10px'
  },
  subHeader: {
    fontSize: '1.5em',
    marginTop: '20px'
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '10px'
  }
};


export default About;