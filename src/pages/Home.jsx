import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";

const Home = () => {
    return (
        <Box>
            {/* Banner Section */}
            <Box
                sx={{
                    backgroundImage: "url('/images/banner-bg1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <div sx={{textAlign: "start", display: "flex",
                    alignItems: "center" }}>
                <Typography variant="h3" fontWeight="bold">
                    Welcome to Our Learning Hub
                </Typography>
                <Typography variant="h6" mt={2}>
                </Typography>
                </div>
                <div>erter</div>
            </Box>

            {/* Tuition Classes Section */}
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Tuition Classes
                </Typography>
                <Typography variant="body1" mb={4}>
                    Discover expert-led tuition classes tailored to help students excel in academics.
                </Typography>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image="/images/banner-bg2.jpg"
                                    alt="Tuition Class"
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        Subject {item}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        Expert guidance in Subject {item} to help you achieve academic success.
                                    </Typography>
                                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Creative Activities Section */}
            <Box sx={{ p: 4, backgroundColor: "#f9f9f9" }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Creative Activities
                </Typography>
                <Typography variant="body1" mb={4}>
                    Explore a world of creativity through our engaging and innovative activities.
                </Typography>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image="/images/banner-bg2.jpg"
                                    alt="Creative Activity"
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        Activity {item}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        Engage in Activity {item} and unlock your creative potential.
                                    </Typography>
                                    <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
