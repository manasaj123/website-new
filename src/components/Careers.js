import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./Careers.css";

// Lazy load GSAP
const loadGSAP = () => import("gsap").then((module) => module.gsap);
const loadScrollTrigger = () =>
  import("gsap/ScrollTrigger").then((module) => module.ScrollTrigger);

const Careers = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  /* -------- COUNTRY LOCATIONS -------- */

  const countryLocations = {
    India: "Chennai & Hyderabad",
    USA: "Wyoming, USA ",
    UK: "London, UK ",
  };

  /* -------- JOB LISTINGS -------- */

  const jobListings = useMemo(
    () => [
      {
        title: "Full Stack Developer",
        description:
          "Looking for an all-rounder to work on both frontend and backend of web applications.",
        icon: <FaBriefcase className="careers-job-icon" />,
      },

      // ✅ UI/UX replaced with AI / ML
      {
        title: "AI / ML Engineer",
        description:
          "DB4Cloud Technologies is looking for a passionate AI/ML Engineer to design, develop, and deploy machine learning models and AI-driven solutions.",
        experience: "1–5 Years",
        skills: [
          "Python, Machine Learning, Deep Learning",
          "TensorFlow / PyTorch / scikit-learn",
          "SQL & Data Processing",
          "Cloud basics (AWS/Azure/GCP)",
          "API & Deployment knowledge",
        ],
        responsibilities: [
          "Build and optimize ML models",
          "Develop data pipelines",
          "Deploy AI solutions in cloud environments",
        ],
        icon: <FaBriefcase className="careers-job-icon" />,
      },

      {
        title: "Technologies Internship Programs",
        description:
          "Exciting opportunity to gain hands-on experience in Software Development, DevOps practices, AWS Cloud Services, and Microsoft Azure. Get industry-recognized certifications while working on real-world projects.",
        icon: <FaGraduationCap className="careers-job-icon" />,
      },
    ],
    []
  );

  /* -------- ANIMATION -------- */

  const animationVariants = useMemo(
    () => ({
      hoverEffect: { scale: 1.05, transition: { duration: 0.3 } },
      tapEffect: { scale: 0.95, transition: { duration: 0.2 } },
      cardInitial: { opacity: 0, y: 20 },
      cardAnimate: { opacity: 1, y: 0 },
    }),
    []
  );

  /* -------- GSAP -------- */

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const [gsap, ScrollTrigger] = await Promise.all([
          loadGSAP(),
          loadScrollTrigger(),
        ]);

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".careers-heading",
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1 }
        );

        setGsapLoaded(true);
      } catch {}
    };

    setTimeout(loadAnimations, 100);
  }, []);

  /* -------- STRUCTURED DATA -------- */

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DB4Cloud",
      url: "https://db4cloud.in",
    }),
    []
  );

  return (
    <div className="careers-container">
      <Helmet>
        <title>Careers at DB4Cloud</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="careers-main-container">
        <h1 className="careers-main-heading careers-heading">
          Join Our Team
        </h1>

        {/* -------- COUNTRY SELECT -------- */}

        <p className="careers-heading-locations">
          <span onClick={() => setSelectedCountry("India")}>India</span>
          &nbsp;  *&nbsp; 
          <span onClick={() => setSelectedCountry("USA")}>USA</span>
           &nbsp; *&nbsp; 
          <span onClick={() => setSelectedCountry("UK")}>UK</span>
        </p>

        {/* -------- SHOW CARDS ONLY AFTER CLICK -------- */}

        

{selectedCountry && (
  <>
    <section
      key={selectedCountry}   // ⭐ THIS FIXES REFRESH
      className="careers careers-jobs-grid"
    >
      {jobListings.map((job, index) => (
        <motion.article
          key={index}
          className="careers-job-card"
          whileHover={animationVariants.hoverEffect}
          whileTap={animationVariants.tapEffect}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ICON */}
          <div className="careers-job-icon-wrapper">
            {job.icon}
          </div>

          {/* TITLE */}
          <h3 className="careers-job-title">{job.title}</h3>

          {/* DESCRIPTION */}
          <p className="careers-job-description">
            {job.description}
          </p>

          {/* LOCATION */}
          <p className="careers-job-location">
            <strong>Location:</strong>{" "}
            {countryLocations[selectedCountry]}
          </p>

          {/* AI ML EXTRA DETAILS */}
          {job.experience && (
            <>
              <p>
                <strong>Experience:</strong> {job.experience}
              </p>

              <div>
                <strong>Key Skills:</strong>
                <ul>
                  {job.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Responsibilities:</strong>
                <ul>
                  {job.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </motion.article>
      ))}
    </section>

    {/* -------- APPLY SECTION -------- */}

    <section className="careers-apply-section">
      <h2 className="careers-apply-title">How to Apply</h2>

      <p className="careers-apply-text">
        Interested candidates can submit their resumes to:
      </p>

      <div className="careers-apply-contact">
        <FaEnvelope className="careers-apply-icon" />
        <a
          href="mailto:careers@db4cloud.in"
          className="careers-apply-email"
        >
          careers@db4cloud.in
        </a>
      </div>
    </section>
  </>
)}

      </div>
    </div>
  );
};

export default Careers;
