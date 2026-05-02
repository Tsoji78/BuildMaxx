// app/about/page.tsx
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url("/assets/p18.jpg")',
        }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <AnimatedSection animation="fadeInUp">
            <h1>About BuildMax</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={150}>
            <p>Innovation, Precision & Excellence in Construction</p>
          </AnimatedSection>
        </div>
      </section>

      <PageSection>
        <div className="about-content">

          {/* Who We Are */}
          <AnimatedSection animation="fadeInUp">
            <div className="about-intro">
              <h2>Who We Are</h2>
              <p>
                <strong>BuildMax INVESTMENT LIMITED</strong> is a forward-thinking construction and technology-driven company 
                incorporated under the laws of the Federal Republic of Nigeria. We specialize in building construction, 
                engineering technology, and the supply of high-quality construction materials.
              </p>
            </div>
          </AnimatedSection>

          {/* Vision & Mission */}
          <div className="vision-mission-grid">
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="vm-card">
                <h3>Our Vision</h3>
                <p>To become a leading brand in Africa's construction and technology industry, delivering sustainable infrastructure and innovative solutions that redefine the built environment.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="vm-card">
                <h3>Our Mission</h3>
                <p>To provide world-class construction and supply services using advanced technology, skilled expertise, and quality materials to achieve excellence in every project we undertake.</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Core Values */}
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              {[
                { title: "Integrity", desc: "Upholding transparency and honesty in all business dealings." },
                { title: "Innovation", desc: "Embracing new technologies and methods to enhance project delivery." },
                { title: "Quality", desc: "Ensuring every project meets the highest standards of workmanship and materials." },
                { title: "Safety", desc: "Prioritizing safety for our workforce, clients, and the environment." },
                { title: "Customer Satisfaction", desc: "Exceeding expectations through reliable service and value creation." },
              ].map((value, i) => (
                <div key={i} className="value-card">
                  <div className="value-icon">★</div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* What We Do */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Our services span three core areas of excellence:</p>
            
            <div className="services-grid">
              <div className="service-card">
                <h3>Building Construction</h3>
                <p>Residential, commercial, and industrial buildings • Civil & infrastructure works • Architectural design • Structural engineering • Renovation & facility maintenance.</p>
              </div>
              <div className="service-card">
                <h3>Construction Technology</h3>
                <p>Smart building systems • Green building design • Building Information Modeling (BIM) • Construction process automation.</p>
              </div>
              <div className="service-card">
                <h3>Supply Services</h3>
                <p>High-quality construction materials • Electrical & mechanical components • Plumbing & fittings • Tiles & finishing materials • Procurement logistics.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Competitive Advantage */}
          <AnimatedSection animation="fadeInUp" delay={500}>
            <h2 className="section-title">Our Competitive Advantage</h2>
            <ul className="advantage-list">
              <li>A team of qualified engineers, architects, and project managers</li>
              <li>Cutting-edge technology and modern construction methods</li>
              <li>Strategic partnerships with top suppliers and manufacturers</li>
              <li>Proven track record of delivering projects on time and within budget</li>
              <li>Commitment to sustainable and environmentally friendly practices</li>
            </ul>
          </AnimatedSection>

          {/* HSE & CSR */}
          <div className="hse-csr-grid">
            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className="info-card">
                <h3>Health, Safety & Environment</h3>
                <p>We maintain a robust HSE policy to safeguard lives, property, and the environment, adhering strictly to national and international safety regulations.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={700}>
              <div className="info-card">
                <h3>Corporate Social Responsibility</h3>
                <p>We are committed to giving back to society through education, community development, environmental conservation, and youth empowerment initiatives.</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Future Outlook */}
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className="future-section">
              <h2>Future Outlook</h2>
              <p>
                BuildMax Investment Limited is poised for expansion across Nigeria and beyond. 
                We leverage technology to drive efficiency and sustainability in the construction industry. 
                Our goal is to be recognized as a top-tier firm that blends traditional craftsmanship with modern innovation.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </PageSection>
    </>
  );
}