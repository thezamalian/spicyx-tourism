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
import MyPackages from './Pages/Packages/MyPackages/MyPackages';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
// all required files and components has been imported

function App() {
	return (
		<div className="App">
			<Router>
				{/* header & footer components are outside the Switch method */}
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
					<PrivateRoute path="/book-now/:packageId">
						<BookNow></BookNow>
					</PrivateRoute>

					<PrivateRoute path="/my-packages">
						<MyPackages></MyPackages>
					</PrivateRoute>
					<PrivateRoute path="/manage-packages">
						<AllBookedPackages></AllBookedPackages>
					</PrivateRoute>
					<PrivateRoute path="/add-package">
						<AddPackage></AddPackage>
					</PrivateRoute>

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
