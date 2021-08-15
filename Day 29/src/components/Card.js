import React from "react";
import { useSelector } from "react-redux";

const Card = () => {
	const fetchData = useSelector((state) => state.fetchData);
	return (
		<div>
			{fetchData.location ? (
				<div className="parent">
					<img src={fetchData.current.condition.icon} alt="img" />
					<div className="degree">{fetchData.current.temp_c + "°"}</div>
					<div className="condition">{fetchData.current.condition.text}</div>
					<h2 className="name">{fetchData.location.name}</h2>
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="title">Wind Speed</div>
								<div className="data">{fetchData.current.wind_kph + "KM"}</div>
							</div>
							<div className="col">
								<div className="title">Humidity</div>
								<div className="data">{fetchData.current.humidity + "%"}</div>
							</div>
							<div className="col">
								<div className="title">Precipitaion</div>
								<div className="data">{fetchData.current.precip_mm}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<h2 className="notFound">City Not Found</h2>
			)}
		</div>
	);
};

export default Card;
