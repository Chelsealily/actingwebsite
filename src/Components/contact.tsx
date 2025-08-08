// Contact.tsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            console.error("Email failed:", error);
            alert("Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p> For all enquiries relating to booking me for Acting/Commerical work or for hiring me to code your website. Please free to connect! </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={6} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;




