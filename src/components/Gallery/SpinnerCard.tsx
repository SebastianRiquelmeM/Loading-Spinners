import type { Spinner } from "../../types/spinner";

interface SpinnerCardProps {
	spinner: Spinner;
	onSelect: (spinner: Spinner) => void;
}

export default function SpinnerCard({ spinner, onSelect }: SpinnerCardProps) {
	return (
		<div
			className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
			onClick={() => onSelect(spinner)}
		>
			<div className="card-body items-center text-center">
				<h2 className="card-title text-lg">{spinner.name}</h2>

				<div className="bg-base-300 rounded-lg p-8 w-full h-32 flex items-center justify-center">
					<spinner.component />
				</div>

				<p className="text-sm opacity-70">{spinner.description}</p>

				<div className="card-actions justify-end mt-4">
					<div className="badge badge-outline">
						{spinner.category}
					</div>
					<div
						className={`badge ${
							spinner.difficulty === "easy"
								? "badge-success"
								: spinner.difficulty === "medium"
								? "badge-warning"
								: "badge-error"
						}`}
					>
						{spinner.difficulty}
					</div>
				</div>
			</div>
		</div>
	);
}
