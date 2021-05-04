import { useRouter } from "next/router";
import { getEventById } from "../../dummmy-data";
import EventContent from "../../components/event-detail/event-content";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import Erroralert from "../../components/ui/error-alert";

function DetailedEventPage() {
	const router = useRouter();
	let { event_id } = router.query;
	let event = getEventById(event_id);
	if (!event) {
		return (
			<Erroralert>
				<p>No event Found </p>;
			</Erroralert>
		);
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}

export async function getStaticProps(content) {
	let eventId = content.params.event_id;
	// console.log("getStaticProps/ebents", eventId);
	const res = await fetch("http://localhost:3001/data");
	const allEvents = await res.json();
	return {
		props: {
			allEvents,
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch("http://localhost:3001/data");
	const allEvents = await res.json();
	let paths = allEvents.map((data) => {
		return { params: { event_id: data.id } };
	});

	return {
		paths: paths,
		fallback: false,
	};
}

export default DetailedEventPage;
