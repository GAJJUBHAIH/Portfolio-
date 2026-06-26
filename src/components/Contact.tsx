import { FormEvent, useState } from 'react';
import Section from './Section';
import { profile } from '../data';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: 'New Portfolio Message from ' + data.get('name')
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset to idle after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
          <input
            name="name"
            required
            disabled={status === 'submitting'}
            placeholder="Your name"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-electric disabled:opacity-50"
          />
          <input
            name="email"
            type="email"
            required
            disabled={status === 'submitting'}
            placeholder="Your email"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-electric disabled:opacity-50"
          />
          <textarea
            name="message"
            required
            rows={4}
            disabled={status === 'submitting'}
            placeholder="Your message"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-electric disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-full bg-electric px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-400 font-medium mt-2">
              🎉 Message sent successfully! Check your inbox soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 font-medium mt-2">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </form>
        <div className="space-y-6 text-white/70">
          <p className="text-lg">Let's build something great together.</p>
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-electric transition-colors">
              <svg className="h-5 w-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{profile.email}</span>
            </a>
            <a href={profile.github} className="flex items-center gap-3 hover:text-electric transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} className="flex items-center gap-3 hover:text-electric transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href={profile.instagram} className="flex items-center gap-3 hover:text-electric transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
          <a href={`${import.meta.env.BASE_URL}${profile.resumeUrl.replace(/^\//, '')}`} download className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
