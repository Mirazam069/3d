import "./PricingSection.css";

export default function PricingSection() {
  return (
    <section className="prc" id="pricing">
      <div className="prc-inner">
        <div className="prc-head">
          <h2 className="prc-title">Paketlar</h2>
          <p className="prc-subtitle">
            O‘zingizga mos paketni tanlang. Hammasi sodda: ma’lumot yuborasiz — biz tayyorlaymiz.
          </p>
        </div>

        <div className="prc-grid">
          {/* BASIC */}
          <div className="prc-card">
            <div className="prc-top">
              <div className="prc-name">Basic</div>
              <span className="prc-chip">
                <ion-icon name="sparkles-outline"></ion-icon>&nbsp; Oddiy
              </span>
            </div>

            <div className="prc-price">
              <span className="prc-from">Narx:</span>
              <span className="prc-amount">99 000 so‘m</span>
            </div>

            <ul className="prc-list">
              <li>
                <ion-icon name="person-outline"></ion-icon>
                <span>Ism + qisqa tilak</span>
              </li>
              <li>
                <ion-icon name="images-outline"></ion-icon>
                <span>3–5 ta rasm</span>
              </li>
              <li>
                <ion-icon name="sparkles-outline"></ion-icon>
                <span>Animatsiyali sahifa</span>
              </li>
              <li>
                <ion-icon name="time-outline"></ion-icon>
                <span>1 kunda tayyor</span>
              </li>
              <li>
                <ion-icon name="link-outline"></ion-icon>
                <span>Link orqali yuboriladi</span>
              </li>
            </ul>

            <a className="prc-btn prc-btn-ghost" href="#order">
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>&nbsp; Buyurtma berish
            </a>
          </div>

          {/* PRO (Most popular) */}
          <div className="prc-card prc-card-pop">
            <div className="prc-ribbon">
              <ion-icon name="flame-outline"></ion-icon>&nbsp; Eng ko‘p tanlanadi
            </div>

            <div className="prc-top">
              <div className="prc-name">Pro</div>
              <span className="prc-chip prc-chip-blue">
                <ion-icon name="flash-outline"></ion-icon>&nbsp; Tavsiya
              </span>
            </div>

            <div className="prc-price">
              <span className="prc-from">Narx:</span>
              <span className="prc-amount">199 000 so‘m</span>
            </div>

            <ul className="prc-list">
              <li>
                <ion-icon name="person-outline"></ion-icon>
                <span>Ism + tilak</span>
              </li>
              <li>
                <ion-icon name="images-outline"></ion-icon>
                <span>10 tagacha rasm</span>
              </li>
              <li>
                <ion-icon name="musical-notes-outline"></ion-icon>
                <span>Musiqa qo‘shiladi</span>
              </li>
              <li>
                <ion-icon name="sparkles-outline"></ion-icon>
                <span>Kuchli animatsiya</span>
              </li>
              <li>
                <ion-icon name="qr-code-outline"></ion-icon>
                <span>Link + QR code</span>
              </li>
            </ul>

            <a className="prc-btn prc-btn-primary" href="#order">
              <ion-icon name="flash-outline"></ion-icon>&nbsp; Pro tanlash
            </a>
          </div>

          {/* VIP */}
          <div className="prc-card">
            <div className="prc-top">
              <div className="prc-name">VIP</div>
              <span className="prc-chip">
                <ion-icon name="diamond-outline"></ion-icon>&nbsp; Premium
              </span>
            </div>

            <div className="prc-price">
              <span className="prc-from">Narx:</span>
              <span className="prc-amount">399 000 so‘m+</span>
            </div>

            <ul className="prc-list">
              <li>
                <ion-icon name="brush-outline"></ion-icon>
                <span>Maxsus dizayn</span>
              </li>
              <li>
                <ion-icon name="cube-outline"></ion-icon>
                <span>3D effektlar</span>
              </li>
              <li>
                <ion-icon name="videocam-outline"></ion-icon>
                <span>Video / ovoz qo‘shish</span>
              </li>
              <li>
                <ion-icon name="sparkles-outline"></ion-icon>
                <span>Premium animatsiya</span>
              </li>
              <li>
                <ion-icon name="headset-outline"></ion-icon>
                <span>Individual yondashuv</span>
              </li>
            </ul>

            <a className="prc-btn prc-btn-ghost" href="#order">
              <ion-icon name="call-outline"></ion-icon>&nbsp; VIP buyurtma
            </a>
          </div>
        </div>

        <div className="prc-note">
          <ion-icon name="information-circle-outline"></ion-icon>
          <p>
            Narxlar namunaviy. Siz yuborgan material (rasm/video) va dizayn murakkabligiga qarab ozgina o‘zgarishi mumkin.
          </p>
        </div>
      </div>
    </section>
  );
}
