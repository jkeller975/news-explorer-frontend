import avatar from "../../images/Me.jpg";

function About() {
  return (
    <section className="about">
      <img className="about__avatar" src={avatar} alt="Author Headshot" />
      <div className="about__description">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hello, my name is Josh Keller and I am a student at TripleTen
          (formerly Practicum). I currently live in Columbus, OH and graduated
          The Ohio State University with a B.S. in Chemical Engineering. I have
          been working in manufacturing for the past 5 years and had an interest
          in learning programming.
        </p>
        <p className="about__text">
          I started the course at the beginning of 2022 and this is my final
          project. In this application the user is able to create an account,
          search news articles and save any articles of interest. This project
          captures all of my learnings from HTML5, CSS, BEM, React, JavaScript,
          Node.js, Express.js, MongoDB, and Google Cloud.
        </p>
      </div>
    </section>
  );
}

export default About;
