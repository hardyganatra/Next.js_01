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

export default DetailedEventPage;
