import { useRouter } from "next/router";

function DetailedEventPage() {
	let router = useRouter();
	let { event_id } = router.query;
	console.log(event_id);
	return (
		<div>
			<h1>Detailed Evennt Page</h1>
		</div>
	);
}

export default DetailedEventPage;
