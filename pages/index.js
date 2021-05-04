// NEXT  LOADS THIS COMPONENT FOR BASE DOMAIN NAME
import { getFeaturedEvents } from "../dummmy-data";
import Events_list from "../components/events/events_list";

function HomePage(props) {
	const featuredEvents = getFeaturedEvents(props.allEvents);
	return (
		<>
			<Events_list eventlist={featuredEvents}></Events_list>
		</>
	);
}

export async function getStaticProps() {
	console.log("getStaticProps00011");
	const res = await fetch("http://localhost:3001/data");
	const allEvents = await res.json();
	return {
		props: {
			allEvents,
		},
		revalidate: 3,
	};
}

export default HomePage;
