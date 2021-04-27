import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummmy-data";
import EventsList from "../../components/events/events_list";
import Resultstitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import Erroralert from "../../components/ui/error-alert";

function filteredEventsPage() {
	const router = useRouter();
	const path = router.query.slug;
	if (!path) {
		return <p className="center">Loading......</p>;
	}

	let [filteredDataYear, filteredDatamonth] = path;
	filteredDataYear = +filteredDataYear;
	filteredDatamonth = +filteredDatamonth;

	if (isNaN(filteredDataYear) || isNaN(filteredDatamonth)) {
		return (
			<>
				<Erroralert>
					<p className="center">Worng Inputs in FIlter</p>
				</Erroralert>
				<div className="center">
					<Button link="/events" className="center">
						Show All Events
					</Button>
				</div>
			</>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: filteredDataYear,
		month: filteredDatamonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<Erroralert>
					<p>No Data Available for this period</p>
				</Erroralert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const date = new Date(filteredDataYear, filteredDatamonth - 1);

	return (
		<>
			<Resultstitle date={date} />
			<EventsList eventlist={filteredEvents} />
		</>
	);
}

export default filteredEventsPage;
