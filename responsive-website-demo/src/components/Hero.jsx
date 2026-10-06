export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>We build websites that work on every screen</h1>
          <p>
            Fast, simple and mobile friendly. This is a demo layout that shrinks
            and grows nicely from phones to large desktops.
          </p>
          <a href="#contact" className="btn">Get in touch</a>
        </div>
        <div className="hero-card">
          <strong>3 columns</strong>
          <span>on desktop</span>
          <strong>2 columns</strong>
          <span>on tablet</span>
          <strong>1 column</strong>
          <span>on mobile</span>
        </div>
      </div>
    </section>
  );
}
