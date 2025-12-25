import "./HowItWorksSection.css";

export default function HowItWorksSection() {
  return (
    <section className="hiw" id="how">
      <div className="hiw-inner">
        <div className="hiw-head">
          <h2 className="hiw-title">Qanday ishlaydi?</h2>
          <p className="hiw-subtitle">
            3 ta qadam. Hamma narsa sodda: siz yuborasiz — biz tayyorlaymiz.
          </p>
        </div>

        <div className="hiw-grid">
          {/* 1 */}
          <div className="hiw-card">
            <div className="hiw-num">
              <ion-icon name="send-outline"></ion-icon>
            </div>
            <h3 className="hiw-card-title">Ma’lumot yuborasiz</h3>
            <p className="hiw-text">
              Ism, 3–10 ta rasm va qisqa tilakni DM yoki Telegram’da yuborasiz.
            </p>
            <div className="hiw-mini">
              <span className="hiw-pill">
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon> DM
              </span>
              <span className="hiw-pill">
                <ion-icon name="image-outline"></ion-icon> Rasm
              </span>
              <span className="hiw-pill">
                <ion-icon name="document-text-outline"></ion-icon> Tilak
              </span>
            </div>
          </div>

          {/* 2 */}
          <div className="hiw-card">
            <div className="hiw-num">
              <ion-icon name="color-palette-outline"></ion-icon>
            </div>
            <h3 className="hiw-card-title">Biz dizayn qilamiz</h3>
            <p className="hiw-text">
              3D animatsiya va chiroyli sahifani tayyorlaymiz. Preview yuboramiz.
            </p>
            <div className="hiw-mini">
              <span className="hiw-pill">
                <ion-icon name="cube-outline"></ion-icon> 3D
              </span>
              <span className="hiw-pill">
                <ion-icon name="sparkles-outline"></ion-icon> Animatsiya
              </span>
              <span className="hiw-pill">
                <ion-icon name="eye-outline"></ion-icon> Preview
              </span>
            </div>
          </div>

          {/* 3 */}
          <div className="hiw-card">
            <div className="hiw-num">
              <ion-icon name="link-outline"></ion-icon>
            </div>
            <h3 className="hiw-card-title">Link + QR olasiz</h3>
            <p className="hiw-text">
              Tayyor bo‘lgach sizga link beramiz. Xohlasangiz QR code ham bo‘ladi.
            </p>
            <div className="hiw-mini">
              <span className="hiw-pill">
                <ion-icon name="globe-outline"></ion-icon> Link
              </span>
              <span className="hiw-pill">
                <ion-icon name="qr-code-outline"></ion-icon> QR
              </span>
              <span className="hiw-pill">
                <ion-icon name="checkmark-circle-outline"></ion-icon> Tayyor
              </span>
            </div>
          </div>
        </div>

        <div className="hiw-cta">
          <div className="hiw-cta-left">
            <h3 className="hiw-cta-title">Bugunoq buyurtma beramizmi?</h3>
            <p className="hiw-cta-text">
              Ism va rasmlarni yuboring — demo ko‘rinishini tayyorlab beraman.
            </p>
          </div>

          <div className="hiw-cta-right">
            <a className="hiw-btn hiw-btn-primary" href="#order">
              <ion-icon name="flash-outline"></ion-icon>&nbsp; Buyurtma berish
            </a>
            <a className="hiw-btn hiw-btn-ghost" href="#demo">
              <ion-icon name="play-outline"></ion-icon>&nbsp; Demo ko‘rish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
