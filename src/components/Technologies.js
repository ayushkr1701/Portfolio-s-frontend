import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Marquee from "react-fast-marquee";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Python from "../assets/logo/python.svg";
import BootStrap from "../assets/logo/bootstrap.svg";
import CSS from "../assets/logo/css.svg";
import Django from "../assets/logo/django.svg";
import Git from "../assets/logo/git.svg";
import HTML from "../assets/logo/html.svg";
import MaterialUI from "../assets/logo/material-ui.svg";
import NextJS from "../assets/logo/nextjs.svg";
import PostgreSQL from "../assets/logo/postgresql.svg";
import ReactIcon from "../assets/logo/react.svg";
import TypeScript from "../assets/logo/typescriptlang-icon.svg";
import Flutter from "../assets/logo/flutterio-icon.svg";
import Firebase from "../assets/logo/firebase-icon.svg";
import Shopify from "../assets/logo/shopify-icon.svg"


const Technologies = () => {
  const technologies = [
    { id: 1, name: "Python", icon: Python },
    { id: 2, name: "BootStrap", icon: BootStrap },
    { id: 3, name: "CSS", icon: CSS },
    { id: 4, name: "Django", icon: Django },
    { id: 5, name: "Git", icon: Git },
    { id: 6, name: "HTML", icon: HTML },
    { id: 7, name: "Material-UI", icon: MaterialUI },
    { id: 8, name: "Next.js", icon: NextJS },
    { id: 9, name: "PostgreSQL", icon: PostgreSQL },
    { id: 10, name: "React", icon: ReactIcon },
    { id: 11, name: "TypeScript", icon: TypeScript },
    { id: 12, name: "Flutter", icon: Flutter },
    { id: 13, name: "Firebase", icon: Firebase },
    {id:14, name: "Shopify", icon: Shopify},
  ];

  return (
    <div id="technologies">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h2"
              fontWeight={1000}
              fontSize={"3.2rem"}
              marginTop="5px"
              gutterBottom
              color={"#f56539"}
              align="center"
            >
              Skills
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color={"#fff"}
              marginTop={4}
              marginBottom={6}
            >
              Tech stacks I'm familiar with:
            </Typography>
          </Box>
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {technologies.map((item) => (
              <Card
                key={item.id}
                sx={{
                  background: "#FAFAFA",
                  backgroundColor: "#212121",
                  boxShadow: "0px 0px 30px #f565394d",
                  borderRadius: "10px",
                  width: "160px",
                  height: "160px",
                  margin: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem 1rem",
                  transition: "300ms ease-in-out",
                  color: "#fff",
                }}
              >
                <img src={item.icon} style={{ height: "50px", margin: "15px" }} alt={`${item.name} icon`} />
                {item.name}
              </Card>
            ))}
          </Marquee>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Technologies;
