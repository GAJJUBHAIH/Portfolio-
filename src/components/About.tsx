import Section from './Section';
import { profile, education } from '../data';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-white/70">
          <p>
            I'm {profile.name} ({profile.nickname}), a {profile.role.toLowerCase()} based in {profile.location}.
            I love building polished web experiences and exploring new technology.
          </p>
          <p>
            My interests span web development, AI, UI/UX design, gaming, and PC building.
            I'm always learning and shipping new projects.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Education</h3>
          <ol className="relative border-l border-white/10 pl-6">
            {education.map((e) => (
              <li key={e.title} className="mb-6">
                <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-electric" />
                <p className="text-sm text-electric">{e.year}</p>
                <p className="font-semibold">{e.title}</p>
                <p className="text-sm text-white/60">{e.place}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
