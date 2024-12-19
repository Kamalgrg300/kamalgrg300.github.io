import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-item">
        <header className="header">
          <h1 className="title">Kamal Gurung</h1>
        </header>
      </div>

      <div className="portfolio-item">
        <section>
          <p>Hello! I am Kamal Gurung.</p>
        </section>
      </div>

      <div className="portfolio-item">
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
    </div>
  );
}
