import { Route, Routes } from 'react-router-dom';
import Client from './components/layouts/Client';
import Admin from './components/layouts/Admin';
import Auth from './components/layouts/Auth';
import Learning from './components/layouts/Learning';

function App() {

	return (
		<Routes>
			<Route path='/admin/*' element={<Admin />} />
			<Route path='/auth/*' element={<Auth />} />
			<Route path='/learning/*' element={<Learning />} />
			<Route path='/*' element={<Client />} />
		</Routes>
	)
}

export default App