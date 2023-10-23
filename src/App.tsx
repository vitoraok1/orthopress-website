import * as React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Ortodontia from './pages/Ortodontia/Ortodontia';

import './App.css';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
      <Route path="/ortodontia" element={<Ortodontia />} />
		</Routes>
	</BrowserRouter>
);

export default App;