
function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-header">
              <h1>Contact Me</h1>
              <p>if you have any questions or would like to get in touch, feel free to reach out!</p>
            </div>

            <div className="contact">
                <div className="social-media-contacts">
                    <h3>Social Media</h3>
                    <a className="cursor-target" href="https://www.linkedin.com/in/mazouz-abderrahmane-062807370" target="_blank" rel="noreferrer">
                       <img src="linkedin.svg" alt="linkedin" />
                       <p>LinkedIn</p>
                    </a>
                    <a className="cursor-target" href="https://github.com/superCODZE" target="_blank" rel="noreferrer">
                          <img src="github.svg" alt="github" />
                          <p>GitHub</p>

                    </a>
                    <a className="cursor-target" href="mailto:mazathomazigh@gmail.com">
                        <img src="gmail.svg" alt="gmail" />
                        <p>Gmail</p>
                    </a>

                </div>
                <div className="contact-form">
                    <h3>Contact Form</h3>
                    <form action="https://formspree.io/f/mnqvydqv" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button className="cursor-target" type="submit">Send</button>
                    </form>

                </div>

            </div>
            
        </footer>
    );
}

export default Footer;