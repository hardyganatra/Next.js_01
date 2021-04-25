import Event_item from "./event_item";
import classes from "./events_list.module.css";

function events_list({ eventlist }) {
	return (
		<ul className={classes.list}>
			{eventlist.map((data) => {
				return <Event_item key={data.id} event={data} />;
			})}
		</ul>
	);
}

export default events_list;
