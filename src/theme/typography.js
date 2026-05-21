const typography = {
  fontFamily: "'Inter', 'Montserrat', 'Segoe UI', sans-serif",
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "clamp(2.5rem, 7vw, 5.4rem)",
    fontWeight: 700,
    lineHeight: 0.98,
  },
  h2: {
    fontSize: "clamp(2rem, 4vw, 3.4rem)",
    fontWeight: 700,
    lineHeight: 1.08,
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h4: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "1.0625rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  overline: {
    fontWeight: 600,
  },
  button: {
    fontWeight: 600,
  },
};

export default typography;
