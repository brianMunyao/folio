import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/folio" component={Main} />
			</Switch>
		</Router>
	);
}

export default App;
