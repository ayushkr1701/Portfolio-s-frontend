import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Box from "@mui/material/Box";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Testimonials = () => {
  const testimonialsData = [
    {
      Tenure: "Jan 2026 - Present",
      Company: "INNOVACCER",
      Designation: "SDE (Backend / AI)",
      Metrics: ["89-93% lower LLM cost", "98% GPT-4o similarity", "LLM-agnostic infra"],
      Description:
        "Unified generic OpenAI-based summarization infrastructure for Care Protocols, Patient Timelines, Call Summaries, and Assessment Autofill into an LLM-agnostic structure. Enabled prompt caching and redesigned data flow plus caching to reduce LLM costs by 89-93%. Working on LoRA adapters for these summarization use cases on MedGemma, reaching 98% similarity against GPT-4o baseline outputs.",
    },
    {
      Tenure: "July 2024 - Dec 2025",
      Company: "INGENIOUS E-BRAIN",
      Designation: "Full Stack Developer",
      Metrics: ["7 AI tools", "10M+ records", "20+ hrs/week saved"],
      Description:
        "Developed 7 end-to-end AI tools combining RAG and machine learning for pharma workflows. Built scalable Flask backends with Elasticsearch and Databricks pipelines for 10M+ records, automated Excel-based processes to save 20+ hours per week, and deployed AI platforms on Azure VMs and AWS EC2/S3.",
    },
    {
      Tenure: "Apr 2023 - July 2023",
      Company: "WILLINGS, INC",
      Designation: "Summer Training Intern",
      Metrics: ["1K+ test DAU", "40% less HR coordination", "Silver Award"],
      Description:
        "Worked in a 6-member team on a matchmaking app with Firebase profile, user data, and image storage for 1K+ daily active users during testing. Integrated Google Maps APIs across app modules, built an admin dashboard with ReactJS and NodeJS, and received a Silver Award.",
    },
    {
      Tenure: "May 2022",
      Company: "FURNITURE BOUTIQ BY ZARA INDUSTRIES, JODHPUR",
      Designation: "Frontend Developer Intern",
      Metrics: ["40% faster pages", "10+ responsive pages", "5+ REST APIs"],
      Description:
        "Revamped the company's e-commerce frontend, improving page load speed by 40% and mobile responsiveness across 10+ product pages. Developed and integrated 5+ REST API endpoints to fetch product images and metadata from the admin portal.",
    },
  ];

  return (
    <div id="testimonials">
      <Box marginBottom={4}>
        <Typography
          variant="h2"
          align="center"
          fontWeight={1000}
          marginTop="5px"
          data-aos="fade-up"
          gutterBottom
          color={"#f8fafc"}
        >
          Experience
        </Typography>
        <Typography
          variant="h4"
          color={"text.secondary"}
          align="center"
          data-aos="fade-up"
          marginTop={4}
          marginBottom={6}
        >
          Places where I worked before:
        </Typography>
      </Box>
      <VerticalTimeline animate>
        {testimonialsData.map((item, i) => (
          <VerticalTimelineElement
            visible
            key={i}
            date={item.Tenure}
            iconStyle={{
              background: "linear-gradient(135deg, #38bdf8, #fb7185)",
              color: "#06111f",
              boxShadow: "0 0 0 4px rgba(56, 189, 248, 0.12)",
            }}
            icon={<WorkOutlineIcon />}
            contentStyle={{
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.86), rgba(8, 17, 31, 0.76))",
              color: "#f8fafc",
              boxShadow: "0 20px 60px rgba(2, 8, 23, 0.36)",
              border: "1px solid rgba(148, 163, 184, 0.16)",
              borderRadius: "8px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(148, 163, 184, 0.18)" }}
          >
            <h3 className="vertical-timeline-element-title">{item.Company}</h3>
            <p>{item.Designation}</p>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1, mb: 1 }}>
              {item.Metrics.map((metric) => (
                <Box
                  key={metric}
                  component="span"
                  sx={{
                    px: 1,
                    py: 0.5,
                    borderRadius: "999px",
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.24)",
                    color: "#bae6fd",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  {metric}
                </Box>
              ))}
            </Box>
            <p>{item.Description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Divider />
    </div>
  );
};

export default Testimonials;
