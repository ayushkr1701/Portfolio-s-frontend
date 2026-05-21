import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FBFronted from "../assets/images/FBFrontend.png";
import MMApp from "../assets/images/MMAPP.png";
import MetaMask from "../assets/images/MetaMask.png";
import SkincarePlatform from "../assets/images/skincare-platform.svg";

const Projects = () => {
  // Sample static data
  const projectsData = [
    {
      name: "Skincare Consumer Awareness Platform",
      description: "Built a skincare discovery platform that turns user profile inputs into personalized product recommendations. Owned the React + Vite frontend, Python vector recommendation backend, Dockerized Azure deployment, Cloudflare frontend deployment, and Mixpanel analytics so the product could learn from real user behavior.",
      tags: [{ name: "React Vite" }, { name: "Python" }, { name: "Vector Search" }, { name: "Azure" }, { name: "Docker" }, { name: "Cloudflare" }, { name: "Mixpanel" }],
      image: SkincarePlatform,
    },
    {
      name: "E-commerce  Website",
      description: "Revamped the company's e-commerce frontend to improve page speed by 40% and mobile responsiveness across 10+ product pages. Built REST API endpoints that pulled product images and metadata from the admin portal into the customer-facing storefront.",
      tags: [{ name: "ReactJS" }, { name: "NodeJS" }],
      link: "https://furnitureboutiq.com",
      image: FBFronted,
    },
    {
      name: "AI Match Making App",
      description: "Built a sports matchmaking app for high school athletes in Japan, helping users find nearby teammates and opponents. Implemented Flutter screens, Firebase authentication and storage flows, and Google Maps powered location picking and distance features.",
      tags: [{ name: "Flutter" }, { name: "Firebase" }],
      link: "https://docs.google.com/document/d/14uj-_mkS6s-N9Yfdv-kXpFhx5P-xpiI1JBaYY1aKIvw/edit?usp=sharing",
      image: MMApp,
    },
    {
      name: "MetaMask Snap",
      description: "Developed a MetaMask Snap to simplify transaction management for Web3 users. Added CSV-based multi-address payments, scheduled payment automation, and visual transaction history so repeated wallet operations became easier to manage.",
      tags: [{ name: "Web3" }, { name: "JavaScript" }],
      link: "https://github.com/ayushkr1701/Metamask-Snap",
      image: MetaMask,
    },
  ];

  return (
    <div id="projects">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography
            variant="h2"
            fontWeight={1000}
            align={"center"}
            marginTop="5px"
            data-aos="fade-up"
            gutterBottom
            color={"#f8fafc"}
          >
            Projects
          </Typography>
          <Typography
            variant="h5"
            color={"text.secondary"}
            align="center"
            data-aos="fade-up"
            marginTop={4}
            marginBottom={6}
          >
            Here are some of my latest projects:
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projectsData.map((item, i) => (
            <Grid key={i} item xs={12}>
              <Box
                display="block"
                width={1}
                height={1}
                sx={{
                  textDecoration: "none",
                  transition: "all .25s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  borderRadius={2}
                  display="flex"
                  flexDirection={{
                    xs: "column",
                    md: i % 2 === 0 ? "row-reverse" : "row",
                  }}
                  sx={{
                    overflow: "hidden",
                    background: "linear-gradient(145deg, rgba(15, 23, 42, 0.82), rgba(8, 17, 31, 0.72))",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 1, md: "50%" },
                      "& .lazy-load-image-loaded": {
                        height: 1,
                        display: "flex !important",
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      height={1}
                      width={1}
                      src={item.image}
                      alt="project image"
                      effect="blur"
                      sx={{
                        objectFit: "cover",
                        maxHeight: 360,
                        borderRadius: 0,
                        filter: "none",
                        transition:
                          "opacity, transform ease 0.3s !important",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      paddingX: { xs: 1, sm: 2, md: 4 },
                      paddingY: { xs: 2, sm: 4 },
                      width: { xs: 1, md: "50%" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      marginBottom={1}
                      fontSize={"1.5rem"}
                      color={"#f8fafc"}
                    >
                      {item.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {item.description}
                    </Typography>
                    <Box marginTop={3} marginBottom={1}>
                      {item.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag.name}
                          component="a"
                          href=""
                          clickable
                          size="small"
                          sx={{
                            marginBottom: 1,
                            marginRight: 1,
                            color: "#bae6fd",
                            backgroundColor: "rgba(56, 189, 248, 0.1)",
                            border: "1px solid rgba(56, 189, 248, 0.24)",
                            "&:hover": {
                              backgroundColor: "rgba(56, 189, 248, 0.18)",
                              color: "#fff",
                            },
                          }}
                        />
                      ))}
                    </Box>
                    {item.link && (
                      <Box marginTop={2} display="flex" justifyContent="flex-end">
                        <Button
                          component="a"
                          href={item.link}
                          target="_blank"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(56, 189, 248, 0.36)",
                            color: "#7dd3fc",
                            "&:hover": {
                              backgroundColor: "rgba(56, 189, 248, 0.12)",
                              color: "#fff",
                              border: "1px solid rgba(125, 211, 252, 0.6)",
                            },
                          }}
                        >
                          Source Code/Deployment
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default Projects;
