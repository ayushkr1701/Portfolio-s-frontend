import React, { useEffect } from "react";
import AOS from "aos";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import HeroButtons from "./HeroButtons";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), { defaultMatches: true });

  const heroData = [
    {
      title: "Ayush Kumar",
      subtitle: "Full-Stack Developer",
      description: "I build full-stack products from interface to backend to cloud deployment, with AI workflows where they create real leverage.",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id="home">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 6, md: 10 }}
        sx={{
          position: "relative",
        }}
      >
        {heroData.map((item, i) => (
          <Grid container key={i} spacing={5} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: 1 },
              }}
            >
              <Box data-aos={isMd ? "fade-right" : "fade-up"}>
                <Box marginBottom={2}>
                  <Typography
                    color={"primary.main"}
                    variant="overline"
                    sx={{
                      display: "inline-flex",
                      mb: 2,
                      px: 1.5,
                      py: 0.75,
                      border: "1px solid rgba(56, 189, 248, 0.28)",
                      borderRadius: "999px",
                      backgroundColor: "rgba(56, 189, 248, 0.08)",
                    }}
                  >
                    Software developer portfolio
                  </Typography>
                  <Typography
                    variant="h1"
                    fontWeight={700}
                    align="left"
                    sx={{
                      color: "#f8fafc",
                      letterSpacing: 0,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color={"text.secondary"}
                    variant="h3"
                    align="left"
                    marginTop={2}
                    marginBottom={3}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box marginBottom={3}>
                  <Typography
                    variant="h4"
                    component="p"
                    color={"text.secondary"}
                    align="left"
                    sx={{
                      maxWidth: 600,
                      lineHeight: 1.65,
                      fontSize: { xs: "1.08rem", md: "1.3rem" },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <HeroButtons />
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mt: 3,
                    color: "text.secondary",
                  }}
                >
                  {["React", "Node.js", "Python", "Cloud", "AI Systems"].map((skill) => (
                    <Box
                      key={skill}
                      component="span"
                      sx={{
                        px: 1.4,
                        py: 0.7,
                        borderRadius: "999px",
                        border: "1px solid rgba(148, 163, 184, 0.18)",
                        backgroundColor: "rgba(15, 23, 42, 0.64)",
                        fontSize: "0.82rem",
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                    mt: 2,
                    maxWidth: 620,
                    color: "text.secondary",
                    fontSize: "0.9rem",
                  }}
                >
                  <Box component="span" sx={{ color: "#7dd3fc", fontWeight: 700 }}>
                    Available for
                  </Box>
                  {[
                    "Full-stack apps",
                    "AI integrations",
                    "Backend APIs",
                    "Cloud deployment",
                  ].map((item, index) => (
                    <React.Fragment key={item}>
                      <Box component="span" sx={{ color: "#dbeafe" }}>
                        {item}
                      </Box>
                      {index < 3 && (
                        <Box component="span" sx={{ color: "rgba(148, 163, 184, 0.45)" }}>
                          /
                        </Box>
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              xs={12}
              md={6}
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "min(100%, 430px)",
                  perspective: "1200px",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    inset: "12% -8% -8% 12%",
                    borderRadius: "28px",
                    background: "linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(251, 113, 133, 0.16))",
                    filter: "blur(30px)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    p: 3,
                    minHeight: { xs: 330, md: 420 },
                    borderRadius: "26px",
                    background: "linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(8, 17, 31, 0.74))",
                    border: "1px solid rgba(148, 163, 184, 0.18)",
                    boxShadow: "0 30px 90px rgba(2, 8, 23, 0.48)",
                    transform: { md: "rotateY(-9deg) rotateX(5deg)" },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.07) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      maskImage: "linear-gradient(to bottom, black, transparent 88%)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {["#fb7185", "#fbbf24", "#38bdf8"].map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      fontFamily: "'Consolas', 'Courier New', monospace",
                      fontSize: { xs: "0.82rem", sm: "0.95rem" },
                      lineHeight: 1.85,
                      color: "#dbeafe",
                    }}
                  >
                    <Box sx={{ color: "#7dd3fc" }}>class Developer &#123;</Box>
                    <Box sx={{ pl: 2 }}>name = "Ayush Kumar";</Box>
                    <Box sx={{ pl: 2 }}>role = "Full-Stack Developer";</Box>
                    <Box sx={{ pl: 2 }}>ships = ["web apps", "APIs", "AI systems"];</Box>
                    <Box sx={{ pl: 2 }}>stack = &#123;</Box>
                    <Box sx={{ pl: 4 }}>frontend: "React / Vite",</Box>
                    <Box sx={{ pl: 4 }}>backend: "Python / Node",</Box>
                    <Box sx={{ pl: 4 }}>cloud: "AWS / Azure"</Box>
                    <Box sx={{ pl: 2 }}>&#125;;</Box>
                    <Box sx={{ color: "#7dd3fc" }}>&#125;</Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      left: 28,
                      right: 28,
                      bottom: 24,
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 1.2,
                    }}
                  >
                    {["UI", "API", "AI"].map((label) => (
                      <Box
                        key={label}
                        sx={{
                          py: 1.2,
                          textAlign: "center",
                          borderRadius: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(148, 163, 184, 0.16)",
                          color: "#bae6fd",
                          fontWeight: 700,
                        }}
                      >
                        {label}
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      width: 160,
                      height: 160,
                      right: -44,
                      top: -34,
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(56, 189, 248, 0.22), transparent 68%)",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
        <Divider sx={{ mt: 8 }} />
      </Box>
    </div>
  );
};

export default Hero;


