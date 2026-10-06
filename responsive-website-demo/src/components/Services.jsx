const SERVICES = [
  { icon: '🌐', title: 'Web Development', text: 'Clean, fast websites built with modern tools.' },
  { icon: '📱', title: 'Mobile Friendly', text: 'Layouts that adapt to any screen size.' },
  { icon: '⚙️', title: 'Backend APIs', text: 'Reliable REST APIs with Java and Spring Boot.' },
  { icon: '🎨', title: 'UI Design', text: 'Simple interfaces that are easy to use.' },
  { icon: '🛠️', title: 'Maintenance', text: 'Updates, fixes and support after launch.' },
  { icon: '🚀', title: 'Deployment', text: 'Hosting setup and smooth releases.' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
