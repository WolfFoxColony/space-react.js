import React, {useMemo} from 'react';
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";
import SliderPage from "../SliderPage/SliderPage.tsx";

function SpacePage() {
  const bg = 'bg-secondary.webp';
  const bgLoaded = usePreloadImage(bg);

  const bgStyle = useMemo(() => ({
    backgroundImage: bgLoaded ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})` : '#050e1e',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundRepeat: "repeat"
  }), [bgLoaded, bg]);

  const scrollTo = () => {
    const el = document.getElementById("certificates-page");
    el?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <>
      <Box sx={bgStyle}>
        <Container sx={{height: "100%", zIndex: '99', position: "relative", pt: '50px', pb: '50px'}}>
          <Grid container={true} spacing={2} justifyContent="center" sx={{mb: '40px', height: '80%'}}></Grid>

          <Grid size={{xl: 12}} container alignItems={'center'} justifyContent={'space-around'}>
            <ButtonPrimary path={"/"} variant={"h4"}>HOME</ButtonPrimary>
            <ButtonPrimary click={scrollTo} variant={"h4"}>Space</ButtonPrimary>
          </Grid>
        </Container>
      </Box>

      <SliderPage/>
    </>
  );
}

export default SpacePage;
