import React from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Paper,
    Stack,
    TextField,
    Typography,
    ThemeProvider,
    createTheme,
    IconButton,
    Chip
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const theme = createTheme({
    typography: {
        fontFamily: "Segoe UI, sans-serif"
    },
    palette: {
        background: {
            default: "#f9fafb"
        }
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Box textAlign="center" mb={4}>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/9919?v=4"
                        sx={{
                            width: 160,
                            height: 160,
                            mx: "auto",
                            borderRadius: 3,
                            mb: 2
                        }}
                    />
                    <Typography variant="h4" fontWeight="bold">Viet Phung</Typography>
                    <Typography color="text.secondary">AI Consultant • Data Engineer • Softwareentwickler</Typography>
                </Box>

                <Box textAlign="center" mb={2}>
                    <Typography variant="body1">
                        Hey 👋<br />
                        I'm Viet, a developer specializing in AI, currently learning at Alfatraining.
                        I’m passionate about AI, NLP, and SaaS product building.
                    </Typography>
                </Box>

                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    flexWrap="wrap"
                    mb={4}
                >
                    {["AI", "Developer", "React", "42 Style", "SaaS Builder"].map((label) => (
                        <Chip key={label} label={label} variant="outlined" />
                    ))}
                </Stack>

                <Typography textAlign="center" color="text.secondary">
                    Before diving into tech, I worked as a software engineer and explored AI solutions with Python, ML, and cloud tools.
                    I love exploring product ideas and building real-world solutions.
                </Typography>
            </Container>

            <Paper
                elevation={3}
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    left: 0,
                    width: "100%",
                    py: 2,
                    px: 4,
                    borderTop: "1px solid #eee",
                    borderRadius: "16px 16px 0 0",
                    zIndex: 1300
                }}
            >
                <Container maxWidth="md">
                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        flexWrap="wrap"
                        mb={2}
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

                    <Stack direction="row" spacing={2} alignItems="center">
                        <TextField
                            fullWidth
                            placeholder="Ask me anything"
                            size="small"
                            variant="outlined"
                            sx={{
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
                            <SendIcon />
                        </IconButton>
                    </Stack>
                </Container>
            </Paper>
        </ThemeProvider>
    );
};

export default App;
