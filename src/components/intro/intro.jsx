import "./intro.css";
import kamalImage from "./kamal.jpg"; // Correct image import

export function Intro() {
  return (
    <div id="home" className="container">
      <div className="about-me">
        <img
          src={kamalImage}
          className="myPicture"
          alt="Kamal Gurung - Software Engineer"
        />

        <p>
          About Me <br></br>
          Hello, I’m Kamal Gurung, a passionate software engineer with expertise
          in both front-end and back-end development. I specialize in creating
          scalable and efficient solutions using a wide range of technologies,
          including programming languages, cloud platforms, DevOps tools, and
          APIs. With a strong ability to adapt to emerging technologies, I focus
          on delivering innovative solutions that align with business goals.
          Outside of work, I enjoy reading, playing guitar, songwriting, making
          music, traveling, and food hunting—activities that keep me inspired
          and creative. I am always refining my skills and staying ahead of
          industry trends to drive exceptional results.
        </p>
      </div>
    </div>
  );
}
