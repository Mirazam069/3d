import { useEffect, useRef } from "react";
import "./OrderSection.css";

export default function OrderSection() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;
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

  return (
    <section className="ord" id="order">
      <div className="ord-inner">
        <div className="ord-left">
          <span className="ord-pill">
            <ion-icon name="sparkles-outline"></ion-icon>
            <span>Buyurtma berish</span>
          </span>

          <h2 className="ord-title">
            Ism + rasm yuboring —
            <span className="ord-grad"> qolganini men qilaman.</span>
          </h2>

          <p className="ord-sub">
            Juda sodda: DM/Telegram’da 3 ta rasm va qisqa tilak yuborasiz. Men sizga
            demo ko‘rinishini tashlayman, yoqsa tayyorlab beraman.
          </p>

          <div className="ord-steps">
            <div className="ord-step">
              <span className="ord-ic">
                <ion-icon name="send-outline"></ion-icon>
              </span>
              <div>
                <div className="ord-step-title">1) Yuborasiz</div>
                <div className="ord-step-text">Ism, 3–10 ta rasm, tilak</div>
              </div>
            </div>

            <div className="ord-step">
              <span className="ord-ic">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
              <div>
                <div className="ord-step-title">2) Preview</div>
                <div className="ord-step-text">Ko‘rinishini ko‘rasiz</div>
              </div>
            </div>

            <div className="ord-step">
              <span className="ord-ic">
                <ion-icon name="link-outline"></ion-icon>
              </span>
              <div>
                <div className="ord-step-title">3) Link</div>
                <div className="ord-step-text">Link + QR (xohlasangiz)</div>
              </div>
            </div>
          </div>

          <div className="ord-actions">
            {/* Instagram DM linkini keyin o'zingnikiga almashtirasan */}
            <a
              className="ord-btn ord-btn-primary"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
              <span>Instagram DM</span>
            </a>

            {/* Telegram linkini keyin o'zingnikiga almashtirasan */}
            <a
              className="ord-btn ord-btn-ghost"
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="paper-plane-outline"></ion-icon>
              <span>Telegram</span>
            </a>
          </div>

          <div className="ord-mini">
            <div className="ord-mini-item">
              <ion-icon name="time-outline"></ion-icon>
              <span>Odatda 1 kunda tayyor</span>
            </div>
            <div className="ord-mini-item">
              <ion-icon name="phone-portrait-outline"></ion-icon>
              <span>Mobilga 100% mos</span>
            </div>
            <div className="ord-mini-item">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
              <span>Materiallar maxfiy</span>
            </div>
          </div>
        </div>

        {/* Right: hanging 3D card */}
        <div className="ord-right" ref={tiltRef}>
          <div className="ord-stage">
            <div className="ord-stage-glow" />

            <div className="ord-rope">
              <span className="ord-rope-line" />
              <span className="ord-clip" />
            </div>

            <div className="ord-card">
              <div className="ord-shine" />
              <div className="ord-card-top">
                <span className="ord-badge">
                  <ion-icon name="gift-outline"></ion-icon>
                  <span>Buyurtma</span>
                </span>
                <span className="ord-chip">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  <span>Tez</span>
                </span>
              </div>

              <div className="ord-card-body">
                <div className="ord-avatar-wrap">
                  <div className="ord-avatar">M</div>
                  <div className="ord-ring" />
                </div>

                <div className="ord-name">Mira’zam</div>
                <div className="ord-text">
                  “Tug‘ilgan kuning muborak!” — shunaqa link chiqadi. Do‘stingiz
                  ochib “vauuuv” deydi 😄
                </div>

                <div className="ord-card-actions">
                  <a className="ord-mini-btn primary" href="#pricing">
                    <ion-icon name="pricetag-outline"></ion-icon>
                    <span>Paketlar</span>
                  </a>
                  <a className="ord-mini-btn" href="#demo">
                    <ion-icon name="play-outline"></ion-icon>
                    <span>Demo</span>
                  </a>
                </div>

                <div className="ord-hint">
                  <ion-icon name="information-circle-outline"></ion-icon>
                  <span>DM’da “PRO” deb yozsangiz ham bo‘ladi</span>
                </div>
              </div>
            </div>

            <span className="ord-orb orb1" />
            <span className="ord-orb orb2" />
            <span className="ord-orb orb3" />
          </div>

          <footer className="ord-footer">
            <div className="ord-brand">
              <span className="ord-logo">HB</span>
              <div>
                <div className="ord-brand-title">HappyBirthday 3D</div>
                <div className="ord-brand-sub">3D tabrik-sayt xizmatlari</div>
              </div>
            </div>

            <div className="ord-links">
              <a href="#top">Yuqoriga</a>
              <a href="#demo">Demo</a>
              <a href="#faq">FAQ</a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
