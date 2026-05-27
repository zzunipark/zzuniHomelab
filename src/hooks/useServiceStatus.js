import { useEffect, useState } from "react";

const STATUS_API = "https://api.zzunipark.com/api/v1/zzunihomelab/status";

const FALLBACK_STATUS = {
	color: "#10b981",
	isHealthy: true,
	text: {
		ko: "정상 운영",
		en: "Operational",
	},
};

const useServiceStatus = () => {
	const [status, setStatus] = useState(FALLBACK_STATUS);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchStatus = async () => {
			try {
				const response = await fetch(STATUS_API);
				if (!response.ok) throw new Error("Failed to fetch status");
				const data = await response.json();
				if (isMounted && data?.success) {
					setStatus({ ...FALLBACK_STATUS, ...data });
					setError(false);
				} else if (isMounted) {
					setError(true);
				}
			} catch (err) {
				if (isMounted) setError(true);
			} finally {
				if (isMounted) setLoading(false);
			}
		};

		fetchStatus();
		const interval = setInterval(fetchStatus, 30000);

		return () => {
			isMounted = false;
			clearInterval(interval);
		};
	}, []);

	return { status, loading, error };
};

export default useServiceStatus;
