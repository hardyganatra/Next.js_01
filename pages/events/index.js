import { useRouter } from "next/router";
import { getAllEvents } from "../../dummmy-data";
import Eventslist from "../../components/events/events_list";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage() {
	const router = useRouter();
	let allEvents = getAllEvents();
	const onSearch = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};
	return (
		<>
			<EventSearch onSearch={onSearch}></EventSearch>
			<Eventslist eventlist={allEvents} />
		</>
	);
}

export default AllEventsPage;
