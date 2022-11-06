import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ErrorPage from './ErrorPage';



function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
          <Route path = "*" exact element = {<ErrorPage />} />
					<Route path="/" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;