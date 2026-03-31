export function ContactForm() {
  return (
    <form action="https://formsubmit.co/contact@gotiadarian.com" method="POST">
      <input type="hidden" name="_subject" value="New Contact Message - Goti Adarian" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_cc" value="meherzad_turel@yahoo.com" />
      <input type="hidden" name="_cc" value="turelzahan10@gmail.com" />

      <div className="form-group">
        <label htmlFor="contactName">Name</label>
        <input type="text" id="contactName" name="name" required />
      </div>

      <div className="form-group mt-4">
        <label htmlFor="contactEmail">Email</label>
        <input type="email" id="contactEmail" name="email" required />
      </div>

      <div className="form-group mt-4">
        <label htmlFor="contactSubject">Subject</label>
        <input type="text" id="contactSubject" name="subject" required />
      </div>

      <div className="form-group mt-4">
        <label htmlFor="contactMessage">Message</label>
        <textarea id="contactMessage" name="message" rows={5} required />
      </div>

      <button type="submit" className="btn btn-primary btn-full mt-6">
        Send Message
      </button>
    </form>
  );
}
