import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify"; // Import toast

const ContactSection = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>{
          if (entry.isIntersecting) {
            // Add animation classes when elements are in view
            if (entry.target === formRef.current) {
              entry.target.classList.add("animate-fade-in-left");
            } else if (entry.target === infoRef.current) {
              entry.target.classList.add("animate-fade-in-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const formElement = formRef.current;
    const infoElement = infoRef.current;

    // Observe the form and info elements
    if (formElement) observer.observe(formElement);
    if (infoElement) observer.observe(infoElement);

    return () => {
      // Clean up the observer when the component unmounts
      if (formElement) observer.unobserve(formElement);
      if (infoElement) observer.unobserve(infoElement);
    };
  }, []);

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get("name")) errors.name = "Name is required";
    if (!formData.get("email")) errors.email = "Email is required";
    if (!formData.get("subject")) errors.subject = "Subject is required";
    if (!formData.get("message")) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(e.target);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        "service_e3u1m9y", // Replace with your EmailJS service ID
        "template_imhwvhl", // Replace with your EmailJS template ID
        formRef.current,
        "n2azYNJpXqz55Fjvi" // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!"); // Success toast
      formRef.current.reset();
      setFormErrors({});
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Something went wrong. Please try again later."); // Error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f8f8f8] py-20 px-4">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-center text-blue-600">
            Contact Us
          </h2>
          <p className="section-description text-[#737373] mt-4 max-w-2xl mx-auto text-2xl">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl bg-white text-black p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Name"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground text-black transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground text-black transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your email"
                  required
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                aria-label="Subject"
                className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground text-black transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Subject"
                required
              />
              {formErrors.subject && (
                <p className="text-red-500 text-sm">{formErrors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-14px font-medium text-[#0D0D0D] text-start"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                aria-label="Message"
                rows={5}
                className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground text-black transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your message"
                required
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-5 py-3 text-center text-14px font-medium bg-black text-white transition-colors hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div ref={infoRef} className="space-y-8 lg:pl-8">
            <div>
              <h3 className="mb-2 block text-20px font-medium text-[#0D0D0D] text-start">
                Get in Touch
              </h3>
              <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                We're here to answer your questions and provide assistance. Feel
                free to reach out to us through any of the following methods.
              </p>
            </div>

            <div className="text-start space-y-6">
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D0D0D] bg-[#E1E1E1] opacity 10.0% text-20px">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Our Location
                  </h4>
                  <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    H.No. 8 1ST Flr, Pvt 101, 102, Blk-C, Ranjit Nagar, Patel
                    Nagar West, Delhi
                    <br />
                    New Delhi, Central Delhi- 110008
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D0D0D] bg-[#E1E1E1] opacity 10.0% text-20px">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Email Us
                  </h4>
                  <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    info@TaxesNotice.com
                    <br />
                    support@TaxesNotice.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[#0D0D0D] bg-[#E1E1E1] opacity 10.0% text-20px">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Call Us
                  </h4>
                  <p className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    +91 9540192363
                    <br />
                    + 011-45053864
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 block text-20px font-medium text-[#0D0D0D] text-start">
                Business Hours
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    Monday - Friday
                  </span>
                  <span className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    Saturday
                  </span>
                  <span className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="mt-2 text-[#737373] text-16px text-start text-muted-foreground">
                    Sunday
                  </span>
                  <span className="mb-2 block text-16px font-medium text-[#0D0D0D] text-start">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
