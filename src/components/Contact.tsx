import { FormEvent } from 'react';
import Section from './Section';
import { profile } from '../data';

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // PLACEHOLDER: wire up to a real form backend (e.g. Formspree, EmailJS)
    const data = new FormData(e.currentTarget);
    window.location.href = `mailto:${profile.email}?subject=Portfolio contact from ${data.get('name')}&body=${encodeURIComponent(String(data.get('message')))}`;
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
          <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-electric" />
          <input name="email" type="email" required placeholder="Your email" className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-electric" />
          <textarea name="message" required rows={4} placeholder="Your message" className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-electric" />
          <button type="submit" className="w-full rounded-full bg-electric px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02]">
            Send Message
          </button>
        </form>
        <div className="space-y-4 text-white/70">
          <p>Let's build something great together.</p>
          <a href={`mailto:${profile.email}`} className="block hover:text-electric">{profile.email}</a>
          <a href={profile.github} className="block hover:text-electric">GitHub</a>
          <a href={profile.linkedin} className="block hover:text-electric">LinkedIn</a>
          <a href={profile.instagram} className="block hover:text-electric">Instagram</a>
          <a href={profile.resumeUrl} download className="inline-block rounded-full bg-electric px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
