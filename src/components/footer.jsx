


import ContactUs from "./contactForm";

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
                    <a className="cursor-target" href="https://www.reddit.com/user/Pedroo-mas/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noreferrer">
                          <img src="reddit.svg" alt="reddit" />
                          <p>Reddit</p>

                    </a>
                    <a className="cursor-target" href="mailto:mazathomazigh@gmail.com">
                        <img src="gmail.svg" alt="gmail" />
                        <p>Gmail</p>
                    </a>

                    <a className="cursor-target" href="https://discord.com/users/878014620697243701" target="_blank" rel="noreferrer">
                        <img src="discord.svg" alt="discord" />
                        <p>Discord</p>
                    </a>

                </div>
                
              <ContactUs />
            </div>
            
        </footer>
    );
}

export default Footer;