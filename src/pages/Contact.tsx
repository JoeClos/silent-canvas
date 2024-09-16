import '../styles/contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>I'd love to hear from you! Fill out the form below or reach out directly.</p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;