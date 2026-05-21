const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "none",
      },
      containedSecondary: {
        color: "#10151f",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
      input: {
        borderRadius: 8,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        backgroundImage: "linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(8, 17, 31, 0.78))",
        border: "1px solid rgba(148, 163, 184, 0.16)",
        boxShadow: "0 22px 70px rgba(2, 8, 23, 0.38)",
        backdropFilter: "blur(18px)",
      },
    },
  },
};

export default components;
