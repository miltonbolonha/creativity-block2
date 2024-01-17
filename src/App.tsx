import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import Home from './pages/home/Home';
import CRO from './pages/cro/CRO';
import SMM from './pages/smm/SMM';
import { theme } from './styles/theme';

if(typeof window !== "undefined"){
  localStorage.setItem("chakra-ui-color-mode", theme.config.initialColorMode)
}

function App() {
  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/cro" Component={CRO}/>
        <Route path="/smm" Component={SMM}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  );
}

export default App;
