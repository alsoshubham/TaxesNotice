export default function About() {
  return (
    <section className="about-section">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-start mt-10">
          About TaxesNotion
        </h2>
        <div className="flex justify-center text-lg mt-10">
          <div>
            <p className="text-start mt-4">
              TaxesNotion is a premier tax and legal consultancy dedicated to
              providing comprehensive solutions to individuals and businesses.
              With our team of experienced professionals, we navigate the
              complex landscape of taxation and legal requirements, ensuring our
              clients achieve peace of mind and compliance.
            </p>
            <br />
            <p>
              Our approach combines technical expertise with a deep
              understanding of various industries, allowing us to deliver
              tailored advice that addresses your specific challenges and
              opportunities. We pride ourselves on building long-term
              relationships based on trust, integrity, and exceptional service.
            </p>
            <br />
            <ul>
              <li>Expert team with 15+ years of experience</li>
              <li>Personalized solutions for your unique needs</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Timely service delivery and follow-up</li>
              <li>Continuous support throughout the process</li>
            </ul>
            <br />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <div>
              <p>years experience</p>
            </div>
            <div>
              <p>client served</p>
            </div>
            <div>
              <p>projects completed</p>
            </div>
            <div>
              <p>awards won</p>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
}
