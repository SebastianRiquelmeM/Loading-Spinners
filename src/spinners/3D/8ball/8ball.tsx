import "./8ball.css";

export default function EightBall() {
	return (
		<div className="eightball-container">
			<div className="eightball">
				<div className="eightball-surface">
					<div className="eightball-shine"></div>
					<div className="eight-number">8</div>
				</div>
				<div className="eightball-shadow"></div>
			</div>
		</div>
	);
}
