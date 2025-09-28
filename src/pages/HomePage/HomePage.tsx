import React, {useMemo} from 'react';
import Headline from "../../components/Headline/Headline.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";

function HomePage() {
  const bg = 'bg-home.webp';
  const bgLoaded = usePreloadImage(bg);

  const bgStyle = useMemo(() => ({
    backgroundImage: bgLoaded ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${bg})` : '#050e1e',
    backgroundSize: 'cover',
    height: '100%',
    overflow: 'hidden',
    backgroundRepeat: "repeat",
    transition: 'background 0.4s ease-in-out',
  }), [bgLoaded, bg]);

  return (
    <Box sx={bgStyle}>
      <Container sx={{height: "100%", zIndex: '99', position: "relative", pt: '50px', pb: '50px'}}>

        <Grid container={true} spacing={2} justifyContent="center" sx={{mb: '40px', height: '80%'}}>
          <Grid size={{xl: 11, xs: 7}} justifyContent="center" direction="column" container alignItems="center">
            <Headline>Hello fellow galaxy member</Headline>

            <Headline fontSize={"2rem"}>Welcome to my space!</Headline>
          </Grid>
        </Grid>

        <Grid justifyContent="center" direction="row" container alignItems="center">
          <ButtonPrimary path={"/resume"} variant={"h4"}>OPEN</ButtonPrimary>
        </Grid>

      </Container>
    </Box>
  );
}

export default HomePage;
