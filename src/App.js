import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import BookNow from './Pages/Home/BookNow/BookNow';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AddPackage from './Pages/Packages/AddPackage/AddPackage';
import AllBookedPackages from './Pages/Packages/AllBookedPackages/AllBookedPackages';
import AllPackages from './Pages/Packages/AllPackages/AllPackages';
import MyPackages from './Pages/Packages/MyPackages/MyPackages';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/home'>
						<Home></Home>
					</Route>
					<Route path='/login'>
						<Login></Login>
					</Route>
					<PrivateRoute path="/book-now">
						<BookNow></BookNow>
					</PrivateRoute>

					<Route path="/my-packages">
						<MyPackages></MyPackages>
					</Route>
					<Route path="/manage-packages">
						<AllBookedPackages></AllBookedPackages>
					</Route>
					<Route path="/add-package">
						<AddPackage></AddPackage>
					</Route>

					<Route path='*'>
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
