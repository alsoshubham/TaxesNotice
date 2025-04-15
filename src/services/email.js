import emailjs from "@emailjs/browser";

export const sendEmail = async (formRef) => {
  try {
    await emailjs.sendForm(
      "service_e3u1m9y", // Replace with your EmailJS service ID
      "template_imhwvhl", // Replace with your EmailJS template ID
      formRef,
      "n2azYNJpXqz55Fjvi" // Replace with your EmailJS public key
    );
    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};