import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./WhatWeDo.css";

/* ---------------- INDUSTRIES ---------------- */

const INDUSTRIES = [
  {
    title: "Technology Industry",
    subItems: [
      "Software and IT Services",
      "Hardware Manufacturing",
      "Telecommunications",
      "Electronics",
      "Cloud Computing",
      "Artificial Intelligence (AI)",
      "Cybersecurity",
    ],
  },
  {
    title: "Finance and Insurance",
    subItems: [
      "Banking",
      "Investment Services",
      "Insurance",
      "Wealth Management",
      "Fintech (Financial Technology)",
    ],
  },
{
    title: "Healthcare and Pharmaceuticals",
    subItems: [
      "Hospitals and Clinics",
      "Biotechnology",
      "Pharmaceuticals",
      "Medical Devices",
      "Healthcare IT",
    ],
  },
  {
    title: "Manufacturing",
    subItems: [
      "Automotive Manufacturing",
      "Aerospace",
      "Electronics Manufacturing",
      "Machinery and Equipment",
      "Chemical Manufacturing",
    ],
  },
  {
    title: "Energy and Utilities",
    subItems: [
      "Oil & Gas",
      "Renewable Energy (solar, wind, hydro)",
      "Electricity",
      "Water Utilities",
      "Nuclear Energy",
    ],
  },
  {
    title: "Retail and Consumer Goods",
    subItems: [
      "E-commerce",
      "Fashion & Apparel",
      "Consumer Electronics",
      "Food & Beverage",
      "Home Goods",
    ],
  },
  {
    title: "Agriculture and Food Production",
    subItems: [
      "Farming",
      "Agribusiness",
      "Food Processing",
      "Fisheries",
      "Forestry",
    ],
  },
  {
    title: "Construction and Real Estate",
    subItems: [
      "Residential and Commercial Construction",
      "Property Development",
      "Real Estate Services",
      "Architecture and Engineering",
    ],
  },
  {
    title: "Transportation and Logistics",
    subItems: [
      "Airlines",
      "Shipping and Freight",
      "Railroads",
      "Trucking",
      "Supply Chain Management",
    ],
  },
  {
    title: "Entertainment and Media",
    subItems: [
      "Film and Television",
      "Music Industry",
      "Gaming",
      "Publishing",
      "Advertising and Public Relations",
    ],
  },
  {
    title: "Tourism and Hospitality",
    subItems: [
      "Hotels and Resorts",
      "Travel Agencies",
      "Restaurants",
      "Cruise Lines",
    ],
  },
  {
    title: "Education",
    subItems: [
      "K-12 Schools",
      "Higher Education",
      "EdTech (Educational Technology)",
      "Corporate Training",
    ],
  },
  {
    title: "Financial Services",
    subItems: [
      "Asset Management",
      "Credit Card Services",
      "Mortgages & Loans",
      "Stock Exchanges",
    ],
  },
]; 

/* ---------------- SERVICES ---------------- */

const SERVICES = [
  {
    title: "Custom Software Development",
    subItems: [
      "We provide tailor-made software solutions to meet your business needs.",
    ],
  },
  {
    title: "Web & Mobile App Development",
    subItems: [
      "Our team specializes in building high-quality, scalable web and mobile apps.",
    ],
  },
  {
    title: "Cloud Computing Services",
    subItems: [
      "We offer cloud solutions to help you scale your business and improve efficiency.",
    ],
  },
  {
    title: "Cybersecurity Consulting",
    subItems: [
      "We help you safeguard your business with expert cybersecurity strategies.",
    ],
  },
  {
    title: "AI & Machine Learning",
    subItems: [
      "Leverage the power of AI and machine learning to drive innovation in your business.",
    ],
  },
  {
    title: "Database Management",
    subItems: [
      "We offer robust database solutions, ensuring data integrity and scalability.",
    ],
  },
  {
    title: "UI/UX Design",
    subItems: [
      "Our design team creates intuitive and visually appealing user interfaces.",
    ],
  },
  {
    title: "Digital Analytics",
    subItems: [
      "We provide advanced analytics to help you make data-driven business decisions.",
    ],
  },
  {
    title: "Enterprise Solutions",
    subItems: [
      "We help enterprises scale their operations with enterprise-grade software solutions.",
    ],
  },
  {
    title: "DevOps Solutions",
    subItems: [
      "Streamline your development and operations with automated pipelines, continuous integration, and deployment strategies.",
    ],
  },
  {
    title: "Workday Implementation",
    subItems: [
      "Expert consulting and implementation of Workday HCM, Financial Management, and Analytics solutions.",
    ],
  },
  {
    title: "Digital Marketing Services",
    subItems: [
      "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
    ],
  },
  {
    title: "Generative AI Solutions",
    subItems: [
      "Cutting-edge AI solutions for content generation, image processing, and intelligent automation.",
    ],
  },
  {
    title: "Snowflake Services",
    subItems: [
      "Data warehousing, analytics, and cloud data solutions using Snowflake's powerful platform.",
    ],
  },
  {
    title: "ERP & CRM Solutions",
    subItems: [
      "Integrated enterprise resource planning and customer relationship management systems for business efficiency.",
    ],
  },
  {
    title: "Salesforce Solutions",
    subItems: [
      "Custom Salesforce implementation, integration, and optimization to maximize your CRM potential.",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

const WhatWeDo = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  // Reset page when navbar clicked again
  useEffect(() => {
    setSelectedIndustry(null);
    setSelectedService(null);
  }, [location.key]);

  return (
    <div className="what-container">
      <div className="what-layout">

        {/* ---------- LEFT : INDUSTRIES ---------- */}

        {!selectedService && (
          <div className="left-section">
            <h2 className="what-heading">Industries</h2>
            
            
            {!selectedIndustry &&
              INDUSTRIES.map((industry) => (
                <p
                  key={industry.title}
                  className="industry-title"
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry.title}
                </p>
              ))}

            {selectedIndustry && (
              <div>
                <p className="industry-title active">
                  {selectedIndustry.title}
                </p>

                <ul className="sub-list">
                  {selectedIndustry.subItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ---------- RIGHT : SERVICES ---------- */}

        {!selectedIndustry && (
          <div className="right-section">
            <h2 className="what-heading">Services</h2>

            {!selectedService &&
              SERVICES.map((service) => (
                <p
                  key={service.title}
                  className="industry-title"
                  onClick={() => setSelectedService(service)}
                >
                  {service.title}
                </p>
              ))}

            {selectedService && (
              <div>
                <p className="industry-title active">
                  {selectedService.title}
                </p>

                <ul className="sub-list">
                  {selectedService.subItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default WhatWeDo;
