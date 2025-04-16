import { FaCheckCircle, FaAward, FaUsers, FaProjectDiagram, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          About TaxesNotice
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              TaxesNotice is a premier tax and legal consultancy dedicated to
              providing comprehensive solutions to individuals and businesses.
              With our team of experienced professionals, we navigate the
              complex landscape of taxation and legal requirements, ensuring our
              clients achieve peace of mind and compliance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our approach combines technical expertise with a deep
              understanding of various industries, allowing us to deliver
              tailored advice that addresses your specific challenges and
              opportunities. We pride ourselves on building long-term
              relationships based on trust, integrity, and exceptional service.
            </p>
            <ul className="list-none text-gray-700 mb-6">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Expert team with 15+ years of experience
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Personalized solutions for your unique needs
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Transparent pricing with no hidden fees
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Timely service delivery and follow-up
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Continuous support throughout the process
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaClock className="text-blue-600 text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-600">15+</p>
              <p className="text-gray-700 mt-2">Years of Experience</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-gray-700 mt-2">Clients Served</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaProjectDiagram className="text-blue-600 text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-600">300+</p>
              <p className="text-gray-700 mt-2">Projects Completed</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaAward className="text-blue-600 text-4xl mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-600">20+</p>
              <p className="text-gray-700 mt-2">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
