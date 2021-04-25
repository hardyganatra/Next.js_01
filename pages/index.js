// NEXT  LOADS THIS COMPONENT FOR BASE DOMAIN NAME
import { getFeaturedEvents } from "../dummmy-data";
import Events_list from "../components/events/events_list";

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<>
			<Events_list eventlist={featuredEvents}></Events_list>
		</>
	);
}

export default HomePage;
