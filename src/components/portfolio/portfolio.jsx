import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-item">
        <header className="header">
          <h1 className="title">Kamal Gurung</h1>
        </header>
      </div>

      <div className="portfolio-item content-container">
        <img
          className="myPicture"
          src="https://img.freepik.com/premium-photo/vector-illustration-depicting-male-software-engineer_1110958-62459.jpg"
          alt="computer engineer"
        />
        <p>
          Hello. I am Kamal Gurung. I am a dedicated software engineer with a
          strong command of multiple programming languages, including Java,
          Python, and JavaScript, and a proven ability to adapt to emerging
          technologies. My expertise lies in developing scalable, efficient, and
          innovative solutions tailored to meet diverse project requirements.
          With a deep understanding of both front-end and back-end development,
          I am skilled in creating robust applications that align with business
          goals. In a market where versatile and technically proficient
          engineers are highly sought after, I stand out by continuously
          refining my skills and staying ahead of industry trends to deliver
          exceptional results.
        </p>
      </div>

      <div className="mySkills">
        <h2>Skills</h2>
        <table>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Skill</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fab fa-html5"></i>
              </td>
              <td>HTML</td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-css3-alt"></i>
              </td>
              <td>CSS</td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-js"></i>
              </td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-python"></i>
              </td>
              <td>Python</td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-java"></i>
              </td>
              <td>Java</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
