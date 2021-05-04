import { useRouter } from "next/router";
import { getAllEvents } from "../../dummmy-data";
import Eventslist from "../../components/events/events_list";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage(props) {
	const router = useRouter();
	let allEvents = getAllEvents(props.allEvents);
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

export async function getStaticProps() {
	const res = await fetch("http://localhost:3001/data");
	const allEvents = await res.json();
	return {
		props: {
			allEvents,
		},
	};
}

export default AllEventsPage;
