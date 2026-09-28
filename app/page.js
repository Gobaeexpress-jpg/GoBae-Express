import Image from "next/image";
const phone = "09633150359";
const messenger = "https://m.me/GoBaeExpress";
const tel = `tel:${phone}`;

const services = [
  ["🍔", "Food Delivery", "From your favorite stores straight to your doorstep."],
  ["🛵", "Angkas / Ride", "Convenient booking and ride assistance when you need it."],
  ["🛒", "Grocery & Pasabuy", "We shop, pick up, and bring your essentials to you."],
  ["📦", "Item Delivery", "Send packages, documents, and everyday items with ease."],
  ["🏠", "Hakot & Lipat Bahay", "Moving or hauling? We can help with your transport needs."],
  ["🚐", "Vehicle Rental", "Car, van, jeepney, and trimobile rental options."],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="GoBae Express home">
  <Image
    src="/GoBae-logo.jpg"
    alt="GoBae Express Logo"
    width={55}
    height={55}
    className="logoImage"
  />
  <span>GoBae <b>Express</b></span>
</a>
        <nav>
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#partners">Partners</a>
          <a className="navCta" href={messenger}>Book Now</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <span className="eyebrow">LOCAL DELIVERY • NAGA CITY & PARTIDO AREA</span>
          <h1>Your Go-To Bae<br /><span>for Every Delivery.</span></h1>
          <p>
            Food, groceries, pasabuy, packages, rides, and more —
            we make everyday bookings simple and convenient.
          </p>
          <div className="actions">
            <a className="primary" href={messenger}>Book a Delivery <span>→</span></a>
            <a className="secondary" href="#services">View Services</a>
          </div>
          <div className="trust">
            <span>✓ Convenient booking</span>
            <span>✓ Local service</span>
            <span>✓ Less hassle</span>
          </div>
        </div>
        <div className="heroCard">
          <div className="cardGlow"></div>
          <div className="deliveryIcon">📦</div>
          <div className="floating f1">🛵</div>
          <div className="floating f2">🛒</div>
          <div className="floating f3">🍔</div>
          <p>Need a delivery?</p>
          <strong>GoBae's got you. 💗</strong>
          <a href={messenger}>Message us now →</a>
        </div>
      </section>

      <section className="strip">
        <div><b>GOBAE EXPRESS</b><span>Making deliveries easier, one booking at a time.</span></div>
        <a href={tel}>📞 {phone}</a>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Services made for your everyday needs.</h2>
          <p>Whether it is a quick food pickup or a bigger transport job, send us your request and we'll help arrange it.</p>
        </div>
        <div className="grid">
          {services.map(([icon, title, text]) => (
            <article className="service" key={title}>
              <div className="serviceIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={messenger}>Request service →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="how">
        <div className="sectionHead centered">
          <span className="eyebrow">SIMPLE PROCESS</span>
          <h2>Book in 4 easy steps.</h2>
        </div>
        <div className="steps">
          {[
            ["01", "Send your request", "Message us with your pickup, destination, and service needed."],
            ["02", "Get your booking", "We'll confirm the details and coordinate your rider or vehicle."],
            ["03", "Pickup", "Your assigned rider picks up the food, package, or items."],
            ["04", "Delivered", "Your order reaches its destination. Easy and convenient."],
          ].map(([n,t,d]) => (
            <div className="step" key={n}>
              <span>{n}</span><h3>{t}</h3><p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="partner">
        <div>
          <span className="eyebrow">FOR BUSINESS OWNERS</span>
          <h2>Let GoBae handle your deliveries.</h2>
          <p>
            Give your customers an easier way to receive their orders.
            Partner with GoBae Express and make your delivery process more convenient,
            without adding the hassle of managing every delivery yourself.
          </p>
          <a className="primary" href={messenger}>Become a Partner <span>→</span></a>
        </div>
        <div className="partnerBox">
          <div>🤝</div>
          <h3>Delivery Partner</h3>
          <p>Food shops • Retailers • Online sellers • Local businesses</p>
        </div>
      </section>

      <section className="coverage">
        <div>
          <span className="eyebrow">WHERE WE SERVE</span>
          <h2>Naga City & Partido Area</h2>
          <p>Need to know if your pickup or destination is covered? Send us a message and we'll check your location.</p>
        </div>
        <a className="secondary dark" href={messenger}>Check My Area →</a>
      </section>

      <section className="finalCta">
        <span className="eyebrow">READY WHEN YOU ARE</span>
        <h2>Need something delivered?</h2>
        <p>Message GoBae Express and let's get your booking started.</p>
        <a className="primary" href={messenger}>Message GoBae Express 💗</a>
      </section>

      <footer>
        <div className="footerBrand"><span className="logoMark">G</span><div><b>GoBae Express</b><small>Your Go-To Bae for Every Delivery.</small></div></div>
        <div className="footerLinks">
          <a href={messenger}>Facebook / Messenger</a>
          <a href={tel}>{phone}</a>
        </div>
        <p>© 2026 GoBae Express. All rights reserved.</p>
      </footer>
    </main>
  );
}
