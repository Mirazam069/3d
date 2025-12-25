import { useEffect, useRef, useState } from "react";
import "./DemoSection.css";

const DEMOS = [
  {
    key: "classic",
    title: "Classic",
    desc: "Sodda, premium, hammaga mos.",
    tags: ["✨ Clean", "📸 Photos", "🔗 Link"],
    icon: "sparkles-outline",
  },
  {
    key: "neon",
    title: "Neon",
    desc: "Yorqin glow va wow effekt.",
    tags: ["⚡ Glow", "🎵 Music", "🌀 3D"],
    icon: "flash-outline",
  },
  {
    key: "cute",
    title: "Cute",
    desc: "Yumshoq, chiroyli va romantik.",
    tags: ["💗 Soft", "🎀 Cute", "📱 Mobile"],
    icon: "heart-outline",
  },
];

function useTiltParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;

      const dx = (x - 0.5) * 2;
      const dy = (y - 0.5) * 2;

      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
      el.style.setProperty("--rx", String((-dy * 10).toFixed(2)));
      el.style.setProperty("--ry", String((dx * 14).toFixed(2)));
    };

    const onLeave = () => {
      el.style.setProperty("--mx", "0.5");
      el.style.setProperty("--my", "0.5");
      el.style.setProperty("--rx", "0");
      el.style.setProperty("--ry", "0");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}

function DemoCard({ demo, index, onOpen }) {
  const tiltRef = useTiltParallax();

  return (
    <button
      type="button"
      className={`dm-card dm-card-${demo.key}`}
      ref={tiltRef}
      onClick={() => onOpen(demo)}
      style={{ "--i": index }}
    >
      <div className="dm-card-shine" />
      <div className="dm-card-glow" />

      <div className="dm-card-top">
        <div className="dm-icon">
          <ion-icon name={demo.icon}></ion-icon>
        </div>

        <div className="dm-top-text">
          <div className="dm-title">{demo.title}</div>
          <div className="dm-desc">{demo.desc}</div>
        </div>

        <div className="dm-open">
          <span>Open</span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>

      <div className="dm-mini-preview">
        <div className="dm-mini-line" />
        <div className="dm-mini-line" />
        <div className="dm-mini-line short" />
        <div className="dm-mini-btn">
          <ion-icon name="gift-outline"></ion-icon>
          <span>Sovg‘ani ochish</span>
        </div>
      </div>

      <div className="dm-tags">
        {demo.tags.map((t) => (
          <span className="dm-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}

export default function DemoSection() {
  const [open, setOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);

  const openModal = (demo) => {
    setActiveDemo(demo);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveDemo(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="dm" id="demo">
      <div className="dm-inner">
        <div className="dm-head">
          <h2 className="dm-h2">Demo</h2>
          <p className="dm-sub">
            3 ta uslubdan birini tanlang. Bosib ko‘ring — ichidan tabrik ochiladi.
          </p>
        </div>

        <div className="dm-grid">
          {DEMOS.map((d, idx) => (
            <DemoCard key={d.key} demo={d} index={idx} onOpen={openModal} />
          ))}
        </div>

        <div className="dm-note">
          <ion-icon name="information-circle-outline"></ion-icon>
          <p>
            Demo — namunaviy ko‘rinish. Siz yuborgan rasm va tilakka qarab dizayn yanada
            chiroyli bo‘ladi.
          </p>
        </div>
      </div>

      {/* MODAL */}
      <div className={`dm-modal ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="dm-backdrop" onClick={closeModal} />
        <div className="dm-modal-card" role="dialog" aria-modal="true">
          <button className="dm-close" type="button" onClick={closeModal}>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="dm-modal-head">
            <div className="dm-modal-badge">
              <ion-icon name="play-outline"></ion-icon>
              <span>Demo Preview</span>
            </div>
            <h3 className="dm-modal-title">{activeDemo?.title || "Demo"}</h3>
            <p className="dm-modal-sub">
              Bu yerga keyin real video/GIF yoki live demo link qo‘shamiz.
            </p>
          </div>

          <div className={`dm-preview-box ${activeDemo?.key || ""}`}>
            <div className="dm-preview-top">
              <span className="dm-dot" />
              <span className="dm-dot" />
              <span className="dm-dot" />
              <span className="dm-preview-url">happy-demo.vercel.app</span>
            </div>

            <div className="dm-preview-body">
              <div className="dm-preview-card">
                <div className="dm-preview-ring" />
                <div className="dm-preview-avatar">M</div>
                <div className="dm-preview-name">Mira’zam</div>
                <div className="dm-preview-text">
                  Tug‘ilgan kuning muborak! 🎉 Sovg‘ani oching — ichida tilak bor.
                </div>
                <button className="dm-preview-btn" type="button">
                  Sovg‘ani ochish ✨
                </button>
              </div>
            </div>
          </div>

          <div className="dm-modal-actions">
            <a className="dm-action dm-action-primary" href="#order" onClick={closeModal}>
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>&nbsp; Buyurtma berish
            </a>
            <button className="dm-action dm-action-ghost" type="button" onClick={closeModal}>
              <ion-icon name="checkmark-outline"></ion-icon>&nbsp; Tushunarli
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
