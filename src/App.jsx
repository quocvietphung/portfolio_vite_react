import React from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  Chip
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const theme = createTheme({
  typography: {
    fontFamily: "Segoe UI, sans-serif"
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          py: 6,
          px: 2
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          sx={{
            width: 160,
            height: 160,
            borderRadius: 3,
            mb: 2
          }}
        />
        <Typography variant="h4" fontWeight="bold">
          Viet Phung
        </Typography>
        <Typography color="text.secondary" mb={3}>
          AI Consultant • Data Engineer • Softwareentwickler
        </Typography>

        <Typography variant="body1" textAlign="center" maxWidth="600px" mb={2}>
          Hey 👋<br />
          I'm Viet, a developer specializing in AI, currently learning at Alfatraining.
          I’m passionate about AI, NLP, and SaaS product building.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          mb={2}
        >
          {["AI", "Developer", "React", "42 Style", "SaaS Builder"].map((label) => (
            <Chip key={label} label={label} variant="outlined" />
          ))}
        </Stack>

        <Typography textAlign="center" color="text.secondary" maxWidth="700px">
          Before diving into tech, I worked as a software engineer and explored AI solutions with Python, ML, and cloud tools.
          I love exploring product ideas and building real-world solutions.
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          position: "fixed",
          bottom: "100px",
          left: 0,
          width: "100%",
          py: 2,
          px: 4,
          borderTop: "1px solid #eee",
          borderRadius: "16px 16px 0 0",
          zIndex: 1300,
          backgroundColor: "transparent"
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
          >
            {["👤 Me", "📁 Projects", "💡 Skills", "🎮 Fun", "📞 Contact", "❓"].map((label) => (
              <Button
                key={label}
                size="small"
                variant="outlined"
                sx={{ borderRadius: "999px", textTransform: "none" }}
              >
                {label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" px={{ xs: 1, sm: 4 }}>
            <TextField
              fullWidth
              placeholder="Ask me anything"
              size="small"
              sx={{
                maxWidth: "700px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "999px",
                  backgroundColor: "#f1f3f5",
                  paddingRight: "12px"
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "999px"
                }
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                width: 40,
                height: 40,
                borderRadius: "50%",
                ml: 1,
                "&:hover": {
                  backgroundColor: "#1565c0"
                }
              }}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
