import { useEffect, useRef } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const wrapRef = useRef(null);
  const fxRef = useRef(null);


useEffect(() => {
  const canvas = fxRef.current;
  if (!canvas) return;

  const stage = canvas.parentElement; // .hb-stage
  const ctx = canvas.getContext("2d", { alpha: true });

  let w = 0, h = 0, dpr = 1;
  let raf = 0;
  let particles = [];
  let rings = [];
  let intervalId = null;

  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const resize = () => {
    const r = stage.getBoundingClientRect();
    w = Math.max(1, Math.floor(r.width));
    h = Math.max(1, Math.floor(r.height));
    dpr = Math.min(2, window.devicePixelRatio || 1);

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const addRing = (x, y, hue) => {
    rings.push({
      x, y,
      r: 0,
      vr: rand(7, 11),
      life: 40,
      a: 1,
      hue
    });
  };

  const burst = (x, y, power = 1) => {
    // Har bir portlashga bitta “asosiy rang”
    const baseHue = rand(0, 360);

    addRing(x, y, baseHue);

    const count = Math.floor(rand(95, 150) * power);
    for (let i = 0; i < count; i++) {
      const ang = rand(-Math.PI, Math.PI);
      const sp = rand(4.2, 9.2) * power;
      const size = rand(2.8, 6.2) * (0.9 + power * 0.15);

      const hue = (baseHue + rand(-18, 18) + 360) % 360;

      particles.push({
        x, y,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp * rand(0.75, 1.05) - rand(2.2, 4.2),
        g: rand(0.11, 0.19),
        drag: rand(0.985, 0.992),
        life: Math.floor(rand(62, 105) * power),
        maxLife: 1,
        size,
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.35, 0.35),
        hue,
        bright: rand(55, 78),
        a: 1
      });

      particles[particles.length - 1].maxLife = particles[particles.length - 1].life;
    }
  };

  // Har 3 soniyada “real salyut”: 1 katta + 2 kichik ketma-ket
  const shoot = () => {
    const baseX = w * rand(0.28, 0.72);
    const baseY = h * rand(0.28, 0.52);

    burst(baseX, baseY, 1.0);

    setTimeout(() => {
      burst(
        clamp(baseX + rand(-90, 90), 90, w - 90),
        clamp(baseY + rand(-70, 70), 90, h - 90),
        0.75
      );
    }, 150);

    setTimeout(() => {
      burst(
        clamp(baseX + rand(-120, 120), 90, w - 90),
        clamp(baseY + rand(-95, 95), 90, h - 90),
        0.62
      );
    }, 330);
  };

  const drawRing = (r) => {
    r.r += r.vr;
    r.life -= 1;
    r.a = r.life / 40;

    const col = `hsla(${r.hue}, 95%, 60%, ${r.a})`;

    ctx.save();
    ctx.globalAlpha = r.a * 0.55;
    ctx.strokeStyle = col;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.globalAlpha = r.a * 0.22;
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  };

  const draw = () => {
    // TRAIL: oldingi kadr biroz qoladi (salyut kuchli ko‘rinadi)
    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(255,255,255,0.10)";
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    // Kamalak aura glow (background)
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = 0.18;

    const g = ctx.createRadialGradient(
      w * 0.5, h * 0.35, 0,
      w * 0.5, h * 0.35, Math.min(w, h) * 0.50
    );
    g.addColorStop(0, "hsla(0, 100%, 60%, 0.25)");
    g.addColorStop(0.25, "hsla(60, 100%, 60%, 0.22)");
    g.addColorStop(0.5, "hsla(120, 100%, 60%, 0.20)");
    g.addColorStop(0.75, "hsla(220, 100%, 60%, 0.18)");
    g.addColorStop(1, "hsla(280, 100%, 60%, 0.15)");
    ctx.fillStyle = g;

    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.35, Math.min(w, h) * 0.50, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // rings
    rings = rings.filter(r => r.life > 0);
    for (const r of rings) drawRing(r);

    // particles
    particles = particles.filter(p => p.life > 0);

    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    for (const p of particles) {
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.g;

      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;

      p.life -= 1;
      const t = p.life / p.maxLife; // 1..0
      p.a = clamp(t, 0, 1);

      const col = `hsla(${p.hue}, 95%, ${p.bright}%, ${p.a})`;

      ctx.save();
      ctx.globalAlpha = p.a;

      // soft glow ball
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // core spark (diamond/rect)
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = Math.random() < 0.22 ? `rgba(255,255,255,${p.a})` : col;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);

      ctx.restore();
    }

    ctx.restore();

    raf = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);

  ctx.clearRect(0, 0, w, h);

  // First burst
  shoot();

  intervalId = setInterval(shoot, 3000);
  raf = requestAnimationFrame(draw);

  return () => {
    window.removeEventListener("resize", resize);
    if (intervalId) clearInterval(intervalId);
    if (raf) cancelAnimationFrame(raf);
  };
}, []);






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
    <span className="hb-word" style={{ "--d": 1 }}>[ism]</span>
    <span className="hb-word" style={{ "--d": 2 }}>[rasm]</span>
    <span className="hb-word" style={{ "--d": 3 }}>[tilak]</span>
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

            <canvas className="hb-fireworks" ref={fxRef} />


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
