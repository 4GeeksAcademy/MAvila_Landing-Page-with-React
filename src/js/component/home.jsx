import React from "react";

import Card from "../component/Card/card.jsx";
import Jumbotron from "../component/Jumbotron/jumbotron.jsx";
import Navbar from "../component/Navbar/navbar.jsx";
import Footer from "../component/Footer/footer.jsx";

//create your first componentCard
const Home = () => {
	return (
		<div>
		<Navbar/>
		<div className="container">
			<Jumbotron/>
			<div className="d-flex">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
