import React from 'react';
import './assets/styles/global.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import Contact from "./components/Contact/Contact.tsx";
import Grid from "@mui/material/Grid";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.tsx";
import Earth from "./components/Earth/Earth.tsx";
import SkillsPage from "./pages/SkillsPage/SkillsPage.tsx";
import Box from "@mui/material/Box";
import SpacePage from "./pages/SpacePage/SpacePage.tsx";

function App() {
    return (
        <Router>
            <Box sx={{maxHeight: "100%", height: "100%", position: 'relative', display:'grid'}}>
                <Contact/>

                <Grid size={{xl: 11}} sx={{height: '100%'}}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/resume" element={<SpacePage/>}/>
                    </Routes>
                </Grid>

                <Earth/>
            </Box>
        </Router>
    );
}

export default App;
