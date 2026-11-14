export default function Animals(props) {
	console.log(props);
	return (
		<div>
			<h1>Hello {props.name}!</h1>
			<p>How old are you?---</p>
		</div>
	);
}
