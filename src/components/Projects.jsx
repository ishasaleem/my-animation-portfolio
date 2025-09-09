import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* InstaGuard */}
        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -10 }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/3.PNG')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>InstaGuard</h3>
          <p>
            TypeScript-based online security platform for social media account safety detection and protection using machine learning .
          </p>
          <div className="project-tech">
            <span>TypeScript</span>
            <span>React</span>
          </div>
        </motion.div>

        {/* React To-Do List */}
        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -10 }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/4.PNG')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>React To-Do List</h3>
          <p>
            Task management app built in React with localStorage integration for data persistence.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
          </div>
        </motion.div>

        {/* React Pokédex */}
        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -10 }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/2.PNG')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>React Pokédex</h3>
          <p>
            A searchable Pokédex using PokéAPI with stats, filters, and responsive UI.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>API</span>
            <span>CSS</span>
          </div>
        </motion.div>
           <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -10 }}>
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/5.PNG')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>🚀 AI Chatbot with Multi-Source Fallback</h3>
          <p>
       🤖 AI Chatbot with Fallbacks & Manual Feedback – Developed a chatbot in React & Node.js with OpenAI + Hugging Face integration. Added manual default responses and a feedback-friendly UI, ensuring continuous interaction even if APIs fail.</p>  <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>Typescript</span>
            
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
