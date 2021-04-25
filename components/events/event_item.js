import Link from "next/link";
import classes from "./event_item.module.css";

function event_item(props) {
	let { title, image, date, location, id } = props.event;
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");
	const exploreLink = `/events/${id}`;
	return (
		<li className={classes.item}>
			<img src={"/" + image} alt={title}></img>
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={exploreLink}>Explorev Event </Link>
				</div>
			</div>
		</li>
	);
}

export default event_item;
