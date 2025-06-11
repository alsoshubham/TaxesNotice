import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9540192363", "+91 9250765397"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@taxesnotice.com", "support@taxesnotice.com"],
      description: "Send us your queries anytime",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Ranjit Nagar, Patel Nagar West, Delhi, New Delhi, Central Delhi- 110008"],
      description: "Visit our office for consultation",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here when you need us",
    },
  ];

  const serviceTypes = [
    "Tax Filing & ITR",
    "GST Services & Notice Handling",
    "Startup Registrations",
    "Legal Drafting & Contracts",
    "One-on-One Consultation",
    "Other",
  ];

  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mapDiv = mapRef.current;
      if (window.google && window.google.maps && mapDiv) {
        const initMap = async () => {
          try {
            const { Map } = await window.google.maps.importLibrary("maps");
            new Map(mapDiv, {
              center: { lat: 28.650572, lng: 77.156896 },
              zoom: 15,
            });
          } catch {
            setMapError(true);
          }
        };
        initMap();
      } else {
        window.initMap = async () => {
          const mapDiv = mapRef.current;
          if (!mapDiv) return;
          try {
            const { Map } = await window.google.maps.importLibrary("maps");
            new Map(mapDiv, {
              center: { lat: 28.650572, lng: 77.156896 },
              zoom: 15,
            });
          } catch {
            setMapError(true);
          }
        };
        // Optionally, set a timeout to show fallback if map doesn't load
        setTimeout(() => setMapError(true), 5000);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to simplify your tax and legal compliance? Our expert team
              is here to help. Book a free consultation or reach out with your
              questions.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className=" px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <info.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-800 font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-600 text-sm mt-2">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="pb-4 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <div className="bg-white rounded-lg shadow">
                  <div className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your first name"
                            required
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your last name"
                            required
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          required
                          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed
                        </label>
                        <select
                          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {serviceTypes.map((service, index) => (
                            <option
                              key={index}
                              value={service.toLowerCase().replace(/\s+/g, "-")}
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          placeholder="Tell us about your requirements or questions..."
                          rows={5}
                          required
                          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#002d72] hover:bg-blue-950 text-white py-3 rounded font-semibold transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Map & Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h2>

                {/* Google Map Embed */}
                <div className="bg-white rounded-lg shadow mb-8 flex items-center justify-center min-h-64 relative">
                  {!mapError ? (
                    <div
                      ref={mapRef}
                      id="map"
                      className="w-full h-full animate-pulse"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "0.5rem",
                        minHeight: "16rem",
                        minWidth: "100%",
                        background: "#f3f4f6 url('https://i.imgur.com/llF5iyg.gif') center center no-repeat",
                        backgroundSize: "60px 60px"
                      }}
                    />
                  ) : (
                    <a
                      href="https://www.google.com/maps?q=28.650572,77.156896"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                      title="Open in Google Maps"
                    >
                      <img
                        // src="https://maps.googleapis.com/maps/api/staticmap?center=28.650572,77.156896&zoom=15&size=600x256&maptype=roadmap&markers=color:red%7C28.650572,77.156896&key=AIzaSyAUi87p0TgbVMUDbLwQx1ktAi8IEoIfS3E"
                        
                        src="./map.jpg"
                        alt="Office Location Map"
                        width="500"
                        height="256"
                        className="w-full h-full object-cover"
                        style={{ minHeight: "16rem", borderRadius: "0.5rem" }}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.style.display = "none";
                        }}
                      />
                      {/* <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 text-gray-700 font-semibold">
                        Unable to load interactive map. Click to view on Google Maps.
                      </div> */}
                    </a>
                  )}
                  
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 space-y-4">
                    <button
                      type="button"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold flex items-center justify-center transition-colors"
                      onClick={() => window.open("tel:+919540192363", "_blank")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now: +91 9540 192 363
                    </button>

                    <button
                      type="button"
                      className="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-2 rounded font-semibold flex items-center justify-center transition-colors"
                      onClick={() =>
                        window.open("https://wa.me/919540192363", "_blank")
                      }
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </button>

                    <button
                      type="button"
                      className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-2 rounded font-semibold flex items-center justify-center transition-colors"
                      onClick={() =>
                        window.open("mailto:hello@taxesnotice.com")
                      }
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </button>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-white rounded-lg shadow mt-6">
                  <div className="p-6 text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Quick Response Guarantee
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We respond to all inquiries within 2 hours during business
                      hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Contact;
