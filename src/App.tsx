import * as React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About';
import Ortodontia from './pages/Ortodontia/Ortodontia';
import Endodontia from './pages/Endodontia/Endodontia';
import Cirurgia from './pages/Cirurgia/Cirurgia';
import Implantodontia from './pages/Implantodontia/Implantodontia';
import HOF from './pages/HOF/HOF';

import './App.css';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/sobre" element={<About />} />
      <Route path="/ortodontia" element={<Ortodontia />} />
      <Route path="/endodontia" element={<Endodontia />} />
      <Route path="/cirurgia" element={<Cirurgia />} />
      <Route path="/implantodontia" element={<Implantodontia />} />
			<Route path="/hof" element={<HOF />} />
		</Routes>
	</BrowserRouter>
);

export default App;