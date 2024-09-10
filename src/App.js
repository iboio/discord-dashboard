import React from 'react';
import {CssBaseline, Box, ThemeProvider} from '@mui/material';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Router from "./Router";
import {theme} from "./Themes/Default";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Box sx={{ flexShrink: 0 }}>
                    <Navbar />
                </Box>
                <Box sx={{ display: 'flex', flexGrow: 1, marginTop: '60px' }}> {/* Navbar yüksekliği kadar boşluk bırakıyoruz */}
                    <Box sx={{ width: '200px', flexShrink: 0 }}>
                        <Sidebar />
                    </Box>
                    <Box sx={{ flexGrow: 1, padding: '20px' }}>
                        <Router />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
