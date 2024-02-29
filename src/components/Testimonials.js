import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Box from "@mui/material/Box";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Testimonials = () => {
  // Replace this with your static data
    const testimonialsData = [
      {
        Tenure: "Apr 2023 - July 2023",
        Company: "WILLINGS, INC",
        Designation: "Web/App Developer",
        Description:
          "Developed a match-making app as part of a team of 6, implemented backend integration for profile pages and image storage in Firebase. Integrated Google Maps APIs for location-based features. Tech Stack: Flutter, Firebase. Received Silver Award.",
      },
      {
        Tenure: "July 2022 - July 2023",
        Company: "CAREER DEVELOPMENT CELL, IIT JODHPUR",
        Designation: "Web Development Team",
        Description:
          "Revamped placement cell portal used by 1200 students/year during placement season. Formed junior support team. Tech Stack: ReactJS, Django.",
      },
      {
        Tenure: "May 2022",
        Company: "FURNITURE BOUTIQ BY ZARA INDUSTRIES, JODHPUR",
        Designation: "Web Development Intern",
        Description:
          "Revamped frontend of company’s primary e-commerce website. Developed REST API endpoints to fetch product data from admin portal. Tech Stack: ReactJS, NodeJS.",
      },
    ];
  

  return (
    <div id="testimonials">
          <Box marginBottom={4}>
            <Typography
              variant="h2"
              align="center"
              fontWeight={1000}
              fontSize={"3.2rem"}
              marginTop="5px"
              data-aos="fade-up"
              gutterBottom
              color={'#f56539'}
            >
              Experience
            </Typography>
            <Typography
              variant="h4"
              color={"#fff"}
              align="center"
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
              Places where I worked before :
            </Typography>
          </Box>
      <VerticalTimeline animate>
        {testimonialsData.map((item, i) => (
          <VerticalTimelineElement
            visible
            key={i}
            date={item.Tenure}
            iconStyle={{ background: "#f56539", color: "#fff" }}
            icon ={<WorkOutlineIcon/>}
            contentStyle={{
              background: "#212121", // Background color
              color: "#fff",         // Text color
              boxShadow: "0px 0px 30px #f565394d", // Box shadow
            }}

          >
            <h3 className="vertical-timeline-element-title">{item.Company}</h3>
            <p>{item.Designation}</p>
            <p>{item.Description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Divider />
    </div>
    
  );
};

export default Testimonials;
