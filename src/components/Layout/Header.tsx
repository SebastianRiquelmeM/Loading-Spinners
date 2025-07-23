interface HeaderProps {
	onFilterChange: (filter: string) => void;
	currentFilter: string;
}

export default function Header({ onFilterChange, currentFilter }: HeaderProps) {
	return (
		<div className="navbar bg-base-100 shadow-lg">
			<div className="navbar-start">
				<h1 className="text-2xl font-bold text-primary">
					🎯 Loading Spinners
				</h1>
			</div>

			<div className="navbar-center">
				<div className="join">
					<button
						className={`btn join-item ${
							currentFilter === "all"
								? "btn-primary"
								: "btn-ghost"
						}`}
						onClick={() => onFilterChange("all")}
					>
						Todos
					</button>
					<button
						className={`btn join-item ${
							currentFilter === "2D" ? "btn-primary" : "btn-ghost"
						}`}
						onClick={() => onFilterChange("2D")}
					>
						2D
					</button>
					<button
						className={`btn join-item ${
							currentFilter === "3D" ? "btn-primary" : "btn-ghost"
						}`}
						onClick={() => onFilterChange("3D")}
					>
						3D
					</button>
				</div>
			</div>

			<div className="navbar-end">
				<div className="badge badge-secondary">Tema: Dracula 🧛‍♂️</div>
			</div>
		</div>
	);
}
