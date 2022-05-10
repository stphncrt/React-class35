import { useState, useEffect } from "react";

function useFetch(url) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errMessage, setErrMessage] = useState("");

	useEffect(() => {
		async function fetchData(url) {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
			} catch (err) {
				setIsLoading(false);
				setErrMessage(err.message);
			}
			setIsLoading(false);
		}
		fetchData(url);
	}, [url]);

	return { data, isLoading, errMessage };
}

export default useFetch;
