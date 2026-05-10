import React from "react";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  ListTodo,
  MessageCircle,
  Sparkles,
  Wand2
} from "lucide-react";
import linneaIcon from "./assets/app/linnea-icon.png";
import linneaHero from "./assets/pet/linnea-q.png";
import happyImage from "./assets/pet/linnea_state/_Happy_.png";
import idleImage from "./assets/pet/linnea_state/_Idle_.png";
import reminderImage from "./assets/pet/linnea_state/_Reminder_.png";
import restImage from "./assets/pet/linnea_state/_Rest_.png";
import sleepyImage from "./assets/pet/linnea_state/_Sleepy_.png";
import talkingImage from "./assets/pet/linnea_state/_Talking_.png";
import thinkingImage from "./assets/pet/linnea_state/_Thinking_.png";
import urgentImage from "./assets/pet/linnea_state/_Urgent_.png";

const themePresets = ["#5aa982", "#4d8fc8", "#d59a3a", "#c56c86", "#8a75c9", "#5c8f7a"];
const allReleasesUrl = "https://github.com/stuart0808/linnea-desktop-pet/releases/";

const latestRelease = {
  version: "v1.0.9",
  date: "2026-05-10",
  file: "Linnea-Setup-1.0.9.exe",
  size: "110 MB",
  notesUrl: "https://github.com/stuart0808/linnea-desktop-pet/releases/tag/v1.0.9",
  downloadUrl: "https://github.com/stuart0808/linnea-desktop-pet/releases/download/v1.0.9/Linnea-Setup-1.0.9.exe"
};

const releaseHistory = [
  ["v1.0.5", "2026-05-09", "Linnea-Setup-1.0.5.exe"],
  ["v1.0.4", "2026-05-08", "Linnea.Setup.1.0.4.exe"],
  ["v1.0.3", "2026-05-08", "Linnea.Setup.1.0.3.exe"],
  ["v1.0.2", "2026-05-08", "Linnea.Setup.1.0.2.exe"],
  ["v1.0.0", "2026-05-07", "Linnea.Setup.1.0.0.exe"],
  ["v0.4.0", "2026-05-06", "Linnea.Setup.0.4.0.exe"],
  ["v0.3.0", "2026-05-06", "Linnea.Setup.0.3.0.exe"]
].map(([version, date, file]) => ({
  version,
  date,
  file,
  size: "110 MB",
  notesUrl: `https://github.com/stuart0808/linnea-desktop-pet/releases/tag/${version}`,
  downloadUrl: `https://github.com/stuart0808/linnea-desktop-pet/releases/download/${version}/${file}`
}));

const features = [
  {
    icon: MessageCircle,
    title: "Tell her what is on your mind",
    text: "Type a quick note in natural language and Linnea turns it into a clean task draft you can review."
  },
  {
    icon: ListTodo,
    title: "Confirm before it becomes a task",
    text: "Drafts stay editable until you approve them, so your list stays intentional instead of noisy."
  },
  {
    icon: CalendarDays,
    title: "Plan time, not just deadlines",
    text: "Place work on a day, week, or month view and keep deadlines separate from scheduled focus time."
  },
  {
    icon: FileText,
    title: "End the day with a clear picture",
    text: "Review what moved, what is at risk, and what deserves attention tomorrow."
  },
  {
    icon: Wand2,
    title: "Use selected text instantly",
    text: "Summarize, translate, or turn selected text into a task without leaving the window you are working in."
  },
  {
    icon: Code2,
    title: "Start coding sessions from files",
    text: "Drop files into Linnea and start a Codex session from an isolated workspace."
  }
];

const states = [
  { name: "Idle", image: idleImage, text: "A quiet companion while you work." },
  { name: "Talking", image: talkingImage, text: "Ready for a quick note or question." },
  { name: "Thinking", image: thinkingImage, text: "Organizing drafts into useful structure." },
  { name: "Happy", image: happyImage, text: "A small celebration when tasks move forward." },
  { name: "Reminder", image: reminderImage, text: "A visible nudge when something needs attention." },
  { name: "Urgent", image: urgentImage, text: "A stronger signal for tasks that cannot wait." },
  { name: "Rest", image: restImage, text: "Low-key company during calmer moments." },
  { name: "Sleepy", image: sleepyImage, text: "Less distraction when the day slows down." }
];

function mixHex(color: string, base: string, baseWeight: number) {
  const foreground = hexToRgb(color);
  const background = hexToRgb(base);
  const mix = (channel: "r" | "g" | "b") =>
    Math.round(background[channel] * baseWeight + foreground[channel] * (1 - baseWeight));
  return `rgb(${mix("r")}, ${mix("g")}, ${mix("b")})`;
}

function hexToRgb(color: string) {
  const value = color.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16)
  };
}

function hexToRgba(color: string, alpha: number) {
  const { r, g, b } = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function App() {
  const [accent, setAccent] = React.useState(themePresets[0]);
  const [route, setRoute] = React.useState(() => window.location.hash.replace("#", "") || "/");

  React.useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  React.useEffect(() => {
    if (route === "/download") {
      window.scrollTo({ top: 0 });
      return;
    }
    window.requestAnimationFrame(() => {
      const target = document.getElementById(route === "/" ? "/" : route);
      if (target) target.scrollIntoView({ block: "start" });
    });
  }, [route]);

  const themeStyle = React.useMemo(
    () => ({
      "--accent": accent,
      "--accent-soft": mixHex(accent, "#ffffff", 0.83),
      "--accent-wash": mixHex(accent, "#ffffff", 0.93),
      "--accent-border": hexToRgba(accent, 0.25),
      "--accent-shadow": hexToRgba(accent, 0.18)
    } as React.CSSProperties),
    [accent]
  );

  const isDownloadPage = route === "/download";

  return (
    <main className="site" style={themeStyle}>
      <header className="topbar">
        <a className="brand" href="#/" aria-label="Linnea home">
          <img src={linneaIcon} alt="" />
          <span>Linnea</span>
        </a>
        <nav>
          <a href="#/features">Features</a>
          <a href="#/themes">Themes</a>
          <a href="#/states">Gallery</a>
          <a className={isDownloadPage ? "active" : ""} href="#/download">Download</a>
        </nav>
      </header>
      {isDownloadPage ? <DownloadPage /> : <HomePage accent={accent} setAccent={setAccent} />}
    </main>
  );
}

function HomePage({ accent, setAccent }: { accent: string; setAccent(color: string): void }) {
  return (
    <>
      <section id="/" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Windows desktop pet assistant</span>
          <h1>A tiny desktop companion for tasks, reminders, and daily planning.</h1>
          <p>
            Linnea stays on your desktop, helps you capture tasks in plain language, nudges you when it matters,
            and gives your day a calmer rhythm.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#/download">
              <Download size={18} /> Download for Windows
            </a>
            <a className="secondary-action" href="#/features">
              Explore features <ChevronRight size={18} />
            </a>
          </div>
          <div className="release-note">Latest release: {latestRelease.version} for Windows x64.</div>
        </div>

        <div className="hero-visual" aria-label="Linnea desktop pet preview">
          <div className="hero-card task-card">
            <Check size={16} />
            <span>3 tasks ready for today</span>
          </div>
          <img className="hero-pet" src={linneaHero} alt="Q版 Linnea desktop pet" />
          <div className="hero-card reminder-card">
            <Bell size={16} />
            <span>15:00 reminder is set</span>
          </div>
        </div>
      </section>

      <section id="/features" className="section">
        <div className="section-heading">
          <span>Key Features</span>
          <h2>From a quick thought to a plan you can trust</h2>
          <p>Linnea keeps task capture light, but still gives you control before anything enters your list.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon"><Icon size={20} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="workflow section">
        <div className="section-heading">
          <span>Workflow</span>
          <h2>A simpler way to keep the day moving</h2>
        </div>
        <div className="workflow-steps">
          {["Capture", "Review", "Schedule", "Reflect"].map((step, index) => (
            <article key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
              <p>
                {index === 0 && "Drop a thought into Linnea before it slips away."}
                {index === 1 && "Edit the task draft and confirm only what you want."}
                {index === 2 && "Choose when the work should actually happen."}
                {index === 3 && "See progress, risks, and what deserves focus next."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="/themes" className="theme-section section">
        <div className="theme-copy">
          <span className="eyebrow">Theme Preview</span>
          <h2>Make Linnea feel at home on your desktop</h2>
          <p>Choose a soft accent color and preview how Linnea's workspace changes around it.</p>
          <div className="theme-picker" aria-label="Choose theme color">
            {themePresets.map((color) => (
              <button
                key={color}
                type="button"
                className={accent === color ? "active" : ""}
                style={{ backgroundColor: color }}
                onClick={() => setAccent(color)}
                aria-label={`Switch theme color ${color}`}
              />
            ))}
          </div>
        </div>
        <div className="theme-preview">
          <div className="preview-window">
            <div className="preview-sidebar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <strong>Today's plan</strong>
              <p>Review notes, prepare the weekly update, and take a real break.</p>
              <button type="button">Confirm task draft</button>
            </div>
          </div>
        </div>
      </section>

      <section id="/states" className="section">
        <div className="section-heading">
          <span>Linnea States</span>
          <h2>A desktop companion with visible moods</h2>
          <p>Linnea changes expression as you talk, plan, complete tasks, or receive reminders.</p>
        </div>
        <div className="state-grid">
          {states.map((state) => (
            <article className="state-card" key={state.name}>
              <img src={state.image} alt={`Linnea ${state.name} state`} />
              <strong>{state.name}</strong>
              <p>{state.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function DownloadPage() {
  return (
    <>
      <section className="download-hero section">
        <div className="download-copy">
          <span className="eyebrow"><Download size={16} /> Windows download</span>
          <h1>Download Linnea for Windows</h1>
          <p>
            Install the latest Windows build and bring Linnea to your desktop for task capture,
            reminders, planning, and daily review.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={latestRelease.downloadUrl}>
              <Download size={18} /> Download for Windows
            </a>
            <a className="secondary-action" href={latestRelease.notesUrl} target="_blank" rel="noreferrer">
              Release notes <ExternalLink size={17} />
            </a>
          </div>
        </div>
        <div className="latest-card">
          <img src={happyImage} alt="Happy Linnea" />
          <span>Latest version</span>
          <strong>{latestRelease.version}</strong>
          <dl>
            <div><dt>Platform</dt><dd>Windows x64</dd></div>
            <div><dt>Installer</dt><dd>{latestRelease.file}</dd></div>
            <div><dt>Size</dt><dd>{latestRelease.size}</dd></div>
            <div><dt>Published</dt><dd>{latestRelease.date}</dd></div>
          </dl>
        </div>
      </section>

      <section className="install-section section">
        <div className="section-heading">
          <span>Get started</span>
          <h2>Install in three steps</h2>
        </div>
        <div className="install-steps">
          {["Download the installer", "Run the .exe file", "Launch Linnea from Windows"].map((step, index) => (
            <article key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
              <p>
                {index === 0 && "Use the latest Windows installer from GitHub Releases."}
                {index === 1 && "Follow the setup wizard and choose where Linnea should be installed."}
                {index === 2 && "Start Linnea and configure reminders, theme, and AI settings."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="release-section section">
        <div className="section-heading release-heading">
          <div>
            <span>Version history</span>
            <h2>Previous Windows builds</h2>
            <p>Choose an older installer if you need to compare behavior or return to a previous version.</p>
          </div>
          <a className="secondary-action" href={allReleasesUrl} target="_blank" rel="noreferrer">
            All releases <ExternalLink size={17} />
          </a>
        </div>
        <div className="release-list">
          {releaseHistory.map((release) => (
            <article className="release-row" key={release.version}>
              <div>
                <strong>{release.version}</strong>
                <span>{release.date} · {release.size} · Windows x64</span>
              </div>
              <span className="release-file">{release.file}</span>
              <div className="release-actions">
                <a href={release.downloadUrl}>Download</a>
                <a href={release.notesUrl} target="_blank" rel="noreferrer">Notes</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
