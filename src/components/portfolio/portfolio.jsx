import "./portfolio.css";

function Portfolio() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Kamal Gurung</h1>
      </header>

      <section>
        <p>Hello! I am Kamal Gurung.</p>
      </section>

      <section>
        <h2>Skills </h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA</li>
        </ul>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/214/644/small/web-designer-and-programmer-free-vector.jpg"
          alt="computer engineer"
        />
      </section>
    </div>
  );
}

export default Portfolio;
