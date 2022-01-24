import React from "react";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import CardItemOne from "../components/cards/CardItemOne";
import CardList from "../components/cards/CardList";
import data from "../data/db";

const Home = () => {
	console.log(data);
	return (
		<Container>
			<Row>
				<Col className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<CardList resourceName="card" itemComponent={CardItemOne} data={data()} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
