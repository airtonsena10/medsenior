import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

const Routes = () => {
	const routes = (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/home" component={Home} />
			</Switch>
		</BrowserRouter>
	);

	return <>{routes}</>;
};

export default Routes;
