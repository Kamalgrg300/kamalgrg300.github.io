import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Reach me out on:
        <a
          href="https://github.com/Kamalgrg300?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub logo"
            className="footer-logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kamal-gurung-/?trk=nav_responsive_tab_profile_pic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn logo"
            className="footer-logo"
          />
        </a>
      </p>
    </footer>
  );
}
