import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

{
  name: formData.name,
  email: formData.email,
  title: formData.title,
  message: formData.message,
}
,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Success:", result.text);

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name..."
            required
            whileFocus={{ scale: 1.02 }}
            value={formData.name}
            onChange={handleInputChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            whileFocus={{ scale: 1.02 }}
            value={formData.email}
            onChange={handleInputChange}
          />
          <motion.input
            type="text"
            name="title"
            placeholder="Subject..."
            required
            whileFocus={{ scale: 1.02 }}
            value={formData.title}
            onChange={handleInputChange}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message..."
            required
            whileFocus={{ scale: 1.02 }}
            value={formData.message}
            onChange={handleInputChange}
          />

          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
