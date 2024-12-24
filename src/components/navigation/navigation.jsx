import "./navigation.css";

export default function Navigation() {
  return (
    <div>
      <nav className="navigation">
        <div>
          <a href="#about">About</a>
        </div>

        <div>
          <a href="#journey">My Journey</a>
        </div>
        <div>
          <a href="#projects-kamal">Projects</a>
        </div>

        <div>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="header">
        <h1 className="title">Kamal Gurung</h1>
      </header>
    </div>
  );
}
