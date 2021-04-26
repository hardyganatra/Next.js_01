import { getAllEvents } from "../../dummmy-data";
import Eventslist from "../../components/events/events_list";

function index() {
	let allEvents = getAllEvents();
	return (
		<div>
			<Eventslist eventlist={allEvents} />
		</div>
	);
}

export default index;
