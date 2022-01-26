import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => {
	const [response, setResponse] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchData = async () => {
		await axios
			.get(url)
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return {
		response,
		isLoading,
		error
	};
};

export default useAxios;
