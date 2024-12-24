import "./contact.css";

export function Contact() {
  return (
    <div id="contact" className="contactForm">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your phone number.."
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
