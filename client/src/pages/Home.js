import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import CardItemOne from "../components/cards/CardItemOne";
import CardList from "../components/cards/CardList";
import useAxios from "../hooks/useAxios";
// import data from "../data/db";

const getAllRooms = "/api/rooms/getallrooms";

const Home = () => {
	const { response, isLoading, error } = useAxios(getAllRooms);

	const [data, setData] = useState(null);

	useEffect(() => {
		if (response !== null) {
			setData(response.rooms);
		}
	}, [response]);

	return (
		<Container>
			<Row>
				<Col className="col">
					<div style={{ height: "10vh", width: "100vw" }}></div>
				</Col>
				<Col className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<CardList
						resourceName="card"
						itemComponent={CardItemOne}
						data={data}
						isLoading={isLoading}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;

/*

*/
