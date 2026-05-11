import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { contactCards, profile } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

const formSubmitEndpoint = 'https://formsubmit.co/ajax/work.abhishek06@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio request: ${form.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('Message sent successfully. Please check your inbox.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus(`Could not send right now. Please email directly at ${profile.email}.`);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Contact" title="Let us build something useful" text="Use the form, email directly, or connect through social links. All contact details are placeholders and easy to edit." />
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {contactCards.map(({ label, value, icon: Icon, href }) => (
              <a key={label} href={href} className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-neon">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyanGlow/10 text-xl text-cyanGlow">
                  <Icon />
                </span>
                <span>
                  <span className="block text-sm text-slate-400 light:text-slate-500">{label}</span>
                  <span className="font-bold">{value}</span>
                </span>
              </a>
            ))}
            <div className="glass overflow-hidden rounded-2xl p-3">
              <iframe
                title="Uttaranchal University Dehradun map"
                src="https://www.google.com/maps?q=Uttaranchal%20University%20Dehradun&output=embed"
                className="h-64 w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="px-2 pb-2 pt-4">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyanGlow">Uttaranchal University</p>
                <p className="mt-2 text-sm font-semibold text-slate-200 light:text-slate-700">Dehradun, Uttarakhand</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="glass rounded-3xl p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" value={form.name} onChange={onChange} required placeholder="Name" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow light:border-slate-900/15 light:bg-white light:text-slate-950 light:placeholder:text-slate-500" />
                <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow light:border-slate-900/15 light:bg-white light:text-slate-950 light:placeholder:text-slate-500" />
              </div>
              <input name="subject" value={form.subject} onChange={onChange} required placeholder="Subject" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow light:border-slate-900/15 light:bg-white light:text-slate-950 light:placeholder:text-slate-500" />
              <textarea name="message" value={form.message} onChange={onChange} required rows="6" placeholder="Message" className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow light:border-slate-900/15 light:bg-white light:text-slate-950 light:placeholder:text-slate-500" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyanGlow px-6 py-4 font-black text-night shadow-neon">
                <FaPaperPlane /> Send Message
              </button>
              {status ? <p className="text-sm font-semibold text-cyanGlow">{status}</p> : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
