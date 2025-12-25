import { useMemo, useState } from "react";
import "./FaqSection.css";

export default function FaqSection() {
  const faqs = useMemo(
    () => [
      {
        q: "Necha kunda tayyor bo‘ladi?",
        a: "Odatda 1 kun ichida tayyor bo‘ladi. Juda shoshilinch bo‘lsa, tezroq ham qilib beramiz.",
        icon: "time-outline",
      },
      {
        q: "Nima yuborishim kerak?",
        a: "Ism, 3–10 ta rasm va qisqa tilak. Xohlasangiz musiqa yoki video ham yuborishingiz mumkin.",
        icon: "send-outline",
      },
      {
        q: "Telefonlarda ham zo‘r ishlaydimi?",
        a: "Ha. Sayt to‘liq mobile-friendly. Instagram/Telegram’dan ochilganda ham chiroyli ko‘rinadi.",
        icon: "phone-portrait-outline",
      },
      {
        q: "Link qancha vaqt ishlaydi?",
        a: "Standart holatda uzoq vaqt turadi. Xohlasangiz domen/subdomain ham qilib beramiz.",
        icon: "link-outline",
      },
      {
        q: "To‘lov qanday bo‘ladi?",
        a: "To‘lovni oldindan qilasiz. So‘ng dizayn tayyorlanadi va sizga preview tashlanadi.",
        icon: "card-outline",
      },
      {
        q: "Keyin o‘zgartirish kiritish mumkinmi?",
        a: "Ha, mayda o‘zgarishlar (matn/rasm) muammo emas. Katta o‘zgarishlar paketga qarab kelishiladi.",
        icon: "create-outline",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="fq" id="faq">
      <div className="fq-inner">
        <div className="fq-head">
          <h2 className="fq-title">FAQ</h2>
          <p className="fq-subtitle">
            Eng ko‘p beriladigan savollar. Agar boshqa savol bo‘lsa, DM’da yozing.
          </p>
        </div>

        <div className="fq-box">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div className={`fq-item ${isOpen ? "open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="fq-q"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="fq-left">
                    <span className="fq-ic">
                      <ion-icon name={item.icon}></ion-icon>
                    </span>
                    <span className="fq-qtext">{item.q}</span>
                  </span>

                  <span className="fq-right">
                    <span className="fq-plus">
                      <ion-icon name={isOpen ? "remove-outline" : "add-outline"}></ion-icon>
                    </span>
                  </span>
                </button>

                <div className="fq-a-wrap">
                  <div className="fq-a">
                    <p>{item.a}</p>
                  </div>
                </div>

                <div className="fq-shine" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        <div className="fq-cta">
          <div className="fq-cta-left">
            <h3 className="fq-cta-title">Savol qoldimi?</h3>
            <p className="fq-cta-text">
              Ism va 3 ta rasm yuboring — demo ko‘rinishini tashlab beraman.
            </p>
          </div>

          <div className="fq-cta-right">
            <a className="fq-btn fq-btn-primary" href="#order">
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>&nbsp; Buyurtma berish
            </a>
            <a className="fq-btn fq-btn-ghost" href="#demo">
              <ion-icon name="play-outline"></ion-icon>&nbsp; Demo ko‘rish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
