import { useEffect, useRef } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;   // 0..1
      const y = (e.clientY - r.top) / r.height;   // 0..1

      // -1..1 range
      const dx = (x - 0.5) * 2;
      const dy = (y - 0.5) * 2;

      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
      el.style.setProperty("--rx", String((-dy * 10).toFixed(2))); // rotateX
      el.style.setProperty("--ry", String((dx * 14).toFixed(2)));  // rotateY
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

  return (
    <section className="hb-hero" id="top">
      <div className="hb-hero-bg">
        <div className="hb-grid" />
        <div className="hb-spot hb-spot-1" />
        <div className="hb-spot hb-spot-2" />
        <div className="hb-spot hb-spot-3" />

        {/* floating particles */}
        <span className="hb-p hb-p1" />
        <span className="hb-p hb-p2" />
        <span className="hb-p hb-p3" />
        <span className="hb-p hb-p4" />
        <span className="hb-p hb-p5" />
        <span className="hb-p hb-p6" />
      </div>

      <div className="hb-hero-inner">
        <div className="hb-hero-left">
          <span className="hb-pill">🎁 Tug‘ilgan kunga WOW sovg‘a</span>

          <h1 className="hb-title">
  <span className="hb-title-static">3D tabrik-sayt:</span>{" "}
  <span className="hb-words">
    <span className="hb-word" style={{ "--d": 1 }}>ism</span>
    <span className="hb-word" style={{ "--d": 2 }}>rasm</span>
    <span className="hb-word" style={{ "--d": 3 }}>tilak</span>
  </span>
  <span className="hb-title-end"> — link orqali ochiladi.</span>
</h1>


          <p className="hb-subtitle">
            Oddiy tabrik emas. Do‘stingiz “vauuuv” deydigan animatsiyali sahifa.
            Telefonlarda ham zo‘r ishlaydi. 1 kunda tayyorlab beramiz.
          </p>

          <div className="hb-actions">
            <a className="hb-btn hb-btn-primary" href="#order">
              Buyurtma berish
            </a>
            <a className="hb-btn hb-btn-ghost" href="#demo">
              Demo ko‘rish
            </a>
          </div>

          <div className="hb-trust">
            <div className="hb-trust-item">
              <span className="hb-dot" />
              <p>1 kunda tayyor</p>
            </div>
            <div className="hb-trust-item">
              <span className="hb-dot" />
              <p>Link + QR code</p>
            </div>
            <div className="hb-trust-item">
              <span className="hb-dot" />
              <p>Mobilga mos</p>
            </div>
          </div>
        </div>

        {/* 3D preview area */}
        <div className="hb-hero-right" ref={wrapRef}>
          <div className="hb-stage">
            <div className="hb-stage-glow" />

            {/* Hanging rope */}
            <div className="hb-rope">
              <span className="hb-rope-line" />
              <span className="hb-clip" />
            </div>

            {/* 3D card */}
            <div className="hb-3d-card">
              <div className="hb-3d-shine" />
              <div className="hb-3d-top">
                <div className="hb-mini-dot" />
                <div className="hb-mini-dot" />
                <div className="hb-mini-dot" />
                <span className="hb-tag">HAPPY BDAY</span>
              </div>

              <div className="hb-3d-body">
                <div className="hb-avatar-wrap">
                  <div className="hb-avatar">M</div>
                  <div className="hb-avatar-ring" />
                </div>

                <div className="hb-name">Mira’zam</div>
                <div className="hb-text">
                  Bugun sening kuning! 🎉 Linkni och — sovg‘a ichida.
                </div>

                <button className="hb-open-btn" type="button">
                  Sovg‘ani ochish ✨
                </button>

                <div className="hb-badges">
                  <span className="hb-badge">🎵 Music</span>
                  <span className="hb-badge">📸 Photos</span>
                  <span className="hb-badge">✨ 3D</span>
                </div>
              </div>
            </div>

            {/* Floating orbs */}
            <span className="hb-orb hb-orb-1" />
            <span className="hb-orb hb-orb-2" />
            <span className="hb-orb hb-orb-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
