import { db } from "@/db";
import { useObservable } from "dexie-react-hooks";
import { Button } from "./ui/button";
import Link from "next/link";
import { PricingUpdate } from "./pricing-update";

export const License = () => {
	const user = useObservable(db.cloud.currentUser);

	if (!user || !user.license) return null; // Backward compat.

	const handleUpgrade = async () => {
		const response = await fetch("/api/stripe/payment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userId: user.userId }),
		});
		const url = await response.json();
		window.location.assign(url);
	};

	const licenseType = "Premium";

	return (
		<div className="flex justify-between items-center">
			<div>
				<p>Tier: {licenseType}</p>
			</div>
		</div>
	);
};
