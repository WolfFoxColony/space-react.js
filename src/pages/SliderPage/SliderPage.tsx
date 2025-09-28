import React, {useMemo} from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";
import SwiperSlider from "../../components/Swiper/Swiper.tsx";
import './SliderPage.scss'

function SliderPage() {
  const bg = '/bg-certificates.webp';
  const bgLoaded = usePreloadImage(bg);

  const bgStyle = useMemo(() => ({
    backgroundImage: bgLoaded ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})` : '#050e1e',
  }), [bgLoaded, bg]);

  const sliderImages = [
    {
      'src': '/space-1.jpg'
    },
    {
      'src': '/space-2.jpg'
    },
    {
      'src': '/space-3.jpg'
    },
    {
      'src': '/space-4.jpg'
    },
  ]

  return (
    <Box sx={bgStyle} className={'certificates'} id={'certificates-page'}>
      <Container sx={{height: "100%", zIndex: '99', position: "relative", pt: '100px', pb: '100px'}}>

        <Grid container={true} spacing={2} justifyContent="center" sx={{height: '80%'}}>
          <Grid size={{xl: 11, xs: 7}} justifyContent="center" direction="column" flexWrap='wrap' container alignItems="center">
            <SwiperSlider data={sliderImages}/>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}

export default SliderPage;
