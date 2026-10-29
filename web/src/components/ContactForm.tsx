import { CONTACT_ENDPOINT } from "@/lib/site";

export function ContactForm() {
  return (
    <form action={CONTACT_ENDPOINT} method="POST">
      {/* Trap field: hidden from people, often filled in by bots. The handler drops posts that fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contactWebsite">Website</label>
        <input type="text" id="contactWebsite" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-group">
        <label htmlFor="contactName">Name</label>
        <input type="text" id="contactName" name="name" required />
      </div>

      <div className="form-group mt-5">
        <label htmlFor="contactEmail">Email</label>
        <input type="email" id="contactEmail" name="email" required />
      </div>

      <div className="form-group mt-5">
        <label htmlFor="contactSubject">Subject</label>
        <input type="text" id="contactSubject" name="subject" required />
      </div>

      <div className="form-group mt-5">
        <label htmlFor="contactMessage">Message</label>
        <textarea id="contactMessage" name="message" rows={5} required />
      </div>

      <button type="submit" className="btn btn-primary btn-full mt-6">
        Send Message
      </button>
    </form>
  );
}
