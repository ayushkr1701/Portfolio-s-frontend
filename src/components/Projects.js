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
import { useTheme } from "@mui/material/styles";
import FBFronted from "../assets/images/FBFrontend.png";
import MMApp from "../assets/images/MMAPP.png";
import MetaMask from "../assets/images/MetaMask.png";

const Projects = () => {
  const theme = useTheme();

  // Sample static data
  const projectsData = [
    {
      name: "E-commerce  Website",
      description: "I revamped the frontend of the company's main eCommerce website, enhancing its user interface and overall design. Additionally, I developed several end-to-end REST API endpoints to efficiently retrieve product images and details from the admin portal and display them on the client site. The technologies employed in this project included ReactJS for the frontend and NodeJS for the backend. ",
      tags: [{ name: "ReactJS" }, { name: "NodeJS" }],
      link: "https://furnitureboutiq.com",
      image: FBFronted,
    },
    {
      name: "AI Match Making App",
      description: "Match Making App is a cutting-edge sports matchmaking app designed to connect high school sports enthusiasts of Japan in an engaging and intelligent way. With its seamless integration of Flutter for a beautiful and responsive user interface, Firebase Authentication for secure user sign-up, and Google Maps SDK for accurate location services, this app transforms the way users find and connect with potential sports teammates or opponents ",
      tags: [{ name: "Flutter" }, { name: "Firebase" }],
      link: "https://docs.google.com/document/d/14uj-_mkS6s-N9Yfdv-kXpFhx5P-xpiI1JBaYY1aKIvw/edit?usp=sharing",
      image: MMApp,
    },
    {
      name: "MetaMask Snap",
      description: "I developed a Metamask Snap using the Metamask Snap API and JavaScript. This Snap enhances transaction management for users by incorporating features such as making payments to multiple addresses through a CSV file, automating payments with a scheduler, and providing graphical representation of past transactions. These functionalities aim to streamline and improve the overall user experience in handling transactions through Metamask. ",
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
            fontSize={"3.2rem"}
            marginTop="5px"
            data-aos="fade-up"
            gutterBottom
            color={"#f56539"}
          >
            Projects
          </Typography>
          <Typography
            variant="h5"
            color={"#fff"}
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
                  transition: "all .2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  borderRadius={0}
                  boxShadow={0}
                  display="flex"
                  flexDirection={{
                    xs: "column",
                    md: i % 2 === 0 ? "row-reverse" : "row",
                  }}
                  sx={{ backgroundImage: "none", bgcolor: "transparent" }}
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
                        borderRadius: 2,
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
                      sx={{ textTransform: "uppercase" }}
                      color={"#fff"}
                    >
                      {item.name}
                    </Typography>
                    <Typography color="#fff">
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
                            color: "#fff",
                            backgroundColor: "#f56539",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#fff",
                              border: "1px solid " + "#f56539",
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Box marginTop={2} display="flex" justifyContent="flex-end">
                      <Button
                        component="a"
                        href={item.link}
                        target="_blank"
                        sx={{
                          backgroundColor: "transparent",
                          border: "1px solid " + "#f56539",
                          color: "#f56539",
                          "&:hover": {
                            backgroundColor: "#f56539",
                            color: "#fff",
                            border: "1px solid " + "#fff",
                          },
                        }}
                      >
                        Source Code/Deployment
                      </Button>
                    </Box>
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
