import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Enero from "./scenes/enero";
import Febrero from "./scenes/febrero";
import Marzo from "./scenes/marzo";
import Abril from "./scenes/abril";
import Mayo from "./scenes/mayo";
import Junio from "./scenes/junio";
import Julio from "./scenes/julio";
import Agosto from "./scenes/agosto";
import Septiembre from "./scenes/septiembre";
import Octubre from "./scenes/octubre";
import Noviembre from "./scenes/noviembre";
import Diciembre from "./scenes/diciembre";
import Proyecto1 from "./scenes/proyecto1";
import Proyecto2 from "./scenes/proyecto2";
import Proyecto3 from "./scenes/proyecto3";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/enero" element={<Enero />} /> 
              <Route path="/febrero" element={<Febrero />} /> 
              <Route path="/marzo" element={<Marzo />} /> 
              <Route path="/abril" element={<Abril />} /> 
              <Route path="/mayo" element={<Mayo />} /> 
              <Route path="/junio" element={<Junio />} /> 
              <Route path="/julio" element={<Julio />} /> 
              <Route path="/agosto" element={<Agosto />} /> 
              <Route path="/septiembre" element={<Septiembre />} /> 
              <Route path="/octubre" element={<Octubre />} /> 
              <Route path="/noviembre" element={<Noviembre />} /> 
              <Route path="/diciembre" element={<Diciembre />} />
              <Route path="/proyecto1" element={<Proyecto1 />} /> 
              <Route path="/proyecto2" element={<Proyecto2 />} /> 
              <Route path="/proyecto3" element={<Proyecto3 />} />         
              <Route path="/bar" element={<Bar />} />             
              <Route path="/line" element={<Line />} />            
              <Route path="/calendar" element={<Calendar />} />             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
