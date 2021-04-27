import { getAllEvents } from "../../dummmy-data";
import Eventslist from "../../components/events/events_list";
import EventSearch from "../../components/events/EventSearch";

function index() {
	let allEvents = getAllEvents();
	return (
		<>
			<EventSearch></EventSearch>
			<Eventslist eventlist={allEvents} />
		</>
	);
}

export default index;
