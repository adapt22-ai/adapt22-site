"use client";
import { useState } from "react";
import Mark from "@/components/Mark";
import styles from "./directions.module.css";
const directions = [
  {
    id: "A",
    name: "Ink & bronze",
    mood: "Confident. Warm. Established.",
    note: "Recommended: the closest continuation of the website. Bronze on deep ink for recognition; warm photography for the wider canvas.",
    canvas: "#15191E",
    mark: "#9B8264",
    text: "#F2F0EB",
    accent: "#9B8264",
    swatches: ["#15191E", "#9B8264", "#F2F0EB", "#343C45"],
  },
  {
    id: "B",
    name: "Paper & bronze",
    mood: "Quiet. Editorial. Open.",
    note: "A lighter presence. Paper, ink and bronze with restrained monochrome photography. Especially calm in documents and email.",
    canvas: "#F2F0EB",
    mark: "#9B8264",
    text: "#15191E",
    accent: "#9B8264",
    swatches: ["#F2F0EB", "#9B8264", "#15191E", "#A9A296"],
  },
  {
    id: "C",
    name: "Slate & landscape",
    mood: "Open air. Depth. Perspective.",
    note: "Photography takes the lead. A paper mark on slate keeps small avatars clear; bronze is a supporting detail, rather than the main event.",
    canvas: "#343C45",
    mark: "#F2F0EB",
    text: "#F2F0EB",
    accent: "#9B8264",
    swatches: ["#343C45", "#F2F0EB", "#9B8264", "#A9A296"],
  },
];
const slogans = [
  {
    id: "1",
    title: "Your technology. Our responsibility.",
    note: "Recommended. Directly names what the relationship offers.",
    lines: ["Your technology.", "Our responsibility."],
  },
  {
    id: "2",
    title: "Built for what comes next.",
    note: "Broader and more evocative. Matches the website headline.",
    lines: ["Built for what", "comes next."],
  },
  {
    id: "3",
    title: "Your priorities. Our team. Technology handled.",
    note: "The most explicit about your role and the team’s execution.",
    lines: ["Your priorities. Our team.", "Technology handled."],
  },
];
const scenes = {
  valley: "/images/optimized/alpine-valley-1200-cde5c5aed9.webp",
  mountain: "/images/optimized/landscape-1200-c5aa4eb240.webp",
  ridges: "/images/optimized/ridges-1200-a232639dac.webp",
};
function Lockup({ small = false }) {
  return (
    <div className={`${styles.lockup} ${small ? styles.small : ""}`}>
      <Mark />
      <span>adapt22</span>
    </div>
  );
}
function Avatar({ square = false, tiny = false }) {
  return (
    <span
      className={`${styles.avatar} ${square ? styles.square : ""} ${tiny ? styles.tiny : ""}`}
    >
      <Mark />
    </span>
  );
}
function Slogan({ slogan }) {
  return (
    <>
      {slogan.lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </>
  );
}
export default function BrandDirections() {
  const [choice, setChoice] = useState("A");
  const [saying, setSaying] = useState("1");
  const [guides, setGuides] = useState(true);
  const direction = directions.find((d) => d.id === choice);
  const slogan = slogans.find((s) => s.id === saying);
  const vars = {
    "--canvas": direction.canvas,
    "--mark": direction.mark,
    "--on-canvas": direction.text,
    "--accent": direction.accent,
  };
  return (
    <div className={styles.studio}>
      <header className={styles.topbar}>
        <Lockup small />
        <span>Private brand review / Not final artwork</span>
      </header>
      <div className={styles.intro}>
        <p className={styles.kicker}>One identity. Everywhere it shows up.</p>
        <h1>
          Pick the direction.
          <br />
          Then make the set.
        </h1>
        <p>
          Same C3 mark. Same palette. Three ways to put them together. Choose a
          color direction and a saying, then see them across the examples below.
        </p>
      </div>
      <fieldset className={styles.choices}>
        <legend>01 / Choose the visual direction</legend>
        <div className={styles.choiceGrid}>
          {directions.map((d) => (
            <label
              key={d.id}
              className={`${styles.choice} ${choice === d.id ? styles.selected : ""}`}
              style={{ "--canvas": d.canvas, "--mark": d.mark }}
            >
              <input
                type="radio"
                name="direction"
                value={d.id}
                checked={choice === d.id}
                onChange={() => setChoice(d.id)}
                aria-label={`${d.id} ${d.name}`}
              />
              <div className={styles.choiceTop}>
                <Avatar tiny />
                <span>
                  {d.id}
                  {d.id === "A" ? <small>Recommended</small> : null}
                </span>
              </div>
              <strong>{d.name}</strong>
              <p>{d.mood}</p>
              <div className={styles.swatches} aria-hidden="true">
                {d.swatches.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </div>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className={styles.slogans}>
        <legend>02 / Choose the saying for banners & call backgrounds</legend>
        <div>
          {slogans.map((s) => (
            <label
              key={s.id}
              className={saying === s.id ? styles.sayingSelected : ""}
            >
              <input
                type="radio"
                name="saying"
                value={s.id}
                checked={saying === s.id}
                onChange={() => setSaying(s.id)}
                aria-label={`${s.id} ${s.title}`}
              />
              <span>
                <strong>{s.title}</strong>
                <small>{s.note}</small>
              </span>
            </label>
          ))}
        </div>
        <p>
          Keep the saying on wide backgrounds. Keep avatars simple so the mark
          stays recognizable.
        </p>
      </fieldset>
      <section
        className={`${styles.board} ${styles["direction" + choice]}`}
        style={vars}
        data-direction={choice}
        aria-label={`${direction.name} preview`}
      >
        <div className={styles.boardHeading}>
          <div>
            <p className={styles.kicker}>Your selected combination</p>
            <h2>
              {choice} / {direction.name}
            </h2>
          </div>
          <p>{direction.note}</p>
        </div>
        <div className={styles.previewGrid}>
          <article className={styles.profileCard}>
            <div className={styles.label}>
              <h3>Profile + banner</h3>
              <span>Company account example</span>
            </div>
            <div className={styles.profile}>
              <div className={styles.banner} data-banner-preview>
                <img
                  src={
                    choice === "B"
                      ? scenes.ridges
                      : choice === "C"
                        ? scenes.mountain
                        : scenes.valley
                  }
                  alt=""
                  loading="eager"
                />
                <div className={styles.bannerCopy}>
                  <Lockup small />
                  <p>
                    <Slogan slogan={slogan} />
                  </p>
                </div>
              </div>
              <div className={styles.profileInfo}>
                <Avatar />
                <div>
                  <h4>adapt22</h4>
                  <p>Technology leadership. Part of your team.</p>
                </div>
              </div>
            </div>
            <p className={styles.caption}>
              The banner carries the message. The avatar carries recognition.
              Exact crops will be adapted for each platform.
            </p>
          </article>
          <article className={styles.identityCard}>
            <div className={styles.label}>
              <h3>The everyday mark</h3>
              <span>Circle + rounded square</span>
            </div>
            <div className={styles.avatarPair}>
              <Avatar />
              <Avatar square />
            </div>
            <div
              className={styles.smallSizes}
              aria-label="Small-size logo comparison"
            >
              {[24, 36, 48].map((size) => (
                <div key={size}>
                  <span style={{ width: size, height: size }}>
                    <Avatar tiny />
                  </span>
                  <small>{size}px</small>
                </div>
              ))}
            </div>
            <p className={styles.caption}>
              No slogan or tiny wordmark inside the avatar. Company accounts use
              C3; personal accounts can keep your portrait.
            </p>
          </article>
          <article className={styles.meetingCard}>
            <div className={styles.label}>
              <h3>Video-call background</h3>
              <span>Meet / Zoom / Teams</span>
            </div>
            <div className={styles.meeting} data-background-preview>
              <img
                src={choice === "C" ? scenes.mountain : scenes.ridges}
                alt=""
                loading="lazy"
              />
              <div className={styles.meetingBrand}>
                <Lockup small />
                <p>
                  <Slogan slogan={slogan} />
                </p>
              </div>
              <div className={styles.watermark}>
                <Mark />
              </div>
              {guides ? (
                <div className={styles.cameraGuide}>
                  <span>Your camera</span>
                </div>
              ) : null}
            </div>
            <label className={styles.guideToggle}>
              <input
                type="checkbox"
                checked={guides}
                onChange={(e) => setGuides(e.target.checked)}
              />
              Show camera guide <small>(review only)</small>
            </label>
            <p className={styles.caption}>
              Brand and saying sit to one side. The center stays quiet behind
              you. Placement will be checked for mirroring and camera crops.
            </p>
          </article>
          <article className={styles.signatureCard}>
            <div className={styles.label}>
              <h3>Email signature</h3>
              <span>A visual study, not installed</span>
            </div>
            <div className={styles.emailWindow}>
              <div className={styles.emailToolbar}>
                <i />
                <i />
                <i />
                <span>Signature preview</span>
              </div>
              <div className={styles.signature}>
                <Avatar square />
                <div>
                  <strong>Jackson McConnell</strong>
                  <span>Founder / adapt22</span>
                  <p>
                    Technology leadership.
                    <br />
                    Part of your team.
                  </p>
                  <a
                    href="https://www.adapt22.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adapt22.ai
                  </a>
                </div>
              </div>
            </div>
            <p className={styles.caption}>
              A light, readable email layout in every direction. The logo badge
              carries the color. Contact links and final details come later.
            </p>
          </article>
        </div>
        <section className={styles.creative}>
          <div className={styles.label}>
            <h3>A family of creative images</h3>
            <span>Editorial concepts / Not upload-ready</span>
          </div>
          <div className={styles.creativeGrid}>
            {[
              [scenes.valley, "A plan for your next acquisition."],
              [scenes.ridges, "AI with a clear job to do."],
              [scenes.mountain, "Your systems. One accountable team."],
            ].map(([src, text]) => (
              <div className={styles.creativeImage} key={text}>
                <img src={src} alt="" loading="lazy" />
                <div>
                  <Lockup small />
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.caption}>
            A consistent treatment, with different subjects and messages. For
            Google Business Profile, genuine photos of your people, work and
            places should sit alongside suitable branded graphics. These
            landscapes are mood examples, not evidence of offices or client
            work.
          </p>
        </section>
        <div className={styles.palette}>
          {direction.swatches.map((c) => (
            <div key={c}>
              <i style={{ background: c }} />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>
      <details className={styles.coverage}>
        <summary>What the chosen direction will cover</summary>
        <div>
          <p>
            <strong>Google:</strong> account and Admin identity, Business
            Profile logo/cover and an appropriate image collection.
          </p>
          <p>
            <strong>Social:</strong> LinkedIn, Facebook, YouTube, X and
            Instagram profile images, plus banners and other supported formats.
          </p>
          <p>
            <strong>Messaging:</strong> Slack and WhatsApp Business identity
            images and any applicable cover formats.
          </p>
          <p>
            <strong>Calls & email:</strong> Google Meet, Zoom and Microsoft
            Teams backgrounds; email signature; reusable square and wide master
            artwork.
          </p>
          <p>
            <strong>Useful extras:</strong> social link-preview images,
            presentation/title slides and document headers if needed.
          </p>
          <p>
            Not every service supports a banner. We’ll confirm the current
            upload sizes, safe areas and available formats when making the final
            files.
          </p>
        </div>
      </details>
      <footer className={styles.decision}>
        <p className={styles.kicker}>A simple decision for now</p>
        <h2>
          Pick a letter.
          <br />
          Pick a saying.
        </h2>
        <p>
          My starting recommendation is <strong>A + saying 1</strong>: ink and
          bronze, with “Your technology. Our responsibility.” It connects most
          closely to the website and makes the service clear. Choose another
          combination above if it feels more like adapt22.
        </p>
        <p>
          Tell me your letter and saying number in the chat, plus anything you’d
          change. Your selection here is a preview; it does not change accounts
          or save a final decision.
        </p>
        <span>C3 stays. We’re choosing the system around it.</span>
      </footer>
    </div>
  );
}
