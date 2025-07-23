import { useState } from "react";
import Header from "./components/Layout/Header";
import SpinnerGallery from "./components/Gallery/SpinnerGallery";
import { spinners } from "./data/spinners";

function App() {
	const [filter, setFilter] = useState<string>("all");

	return (
		<div className="min-h-screen bg-base-100">
			<Header onFilterChange={setFilter} currentFilter={filter} />

			<main>
				<div className="hero bg-base-200 py-16">
					<div className="hero-content text-center">
						<div className="max-w-md">
							<h1 className="text-5xl font-bold">
								🎯 Loading Spinners
							</h1>
							<p className="py-6">
								Colección de spinners animados para tus
								proyectos. Filtra por categoría 2D o 3D y
								explora cada uno en detalle.
							</p>
							<div className="stats shadow">
								<div className="stat">
									<div className="stat-title">
										Total Spinners
									</div>
									<div className="stat-value text-primary">
										{spinners.length}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<SpinnerGallery spinners={spinners} filter={filter} />
			</main>

			<footer className="footer footer-center p-10 bg-base-200 text-base-content">
				<div>
					<p>Copyright © 2025 - Loading Spinners Collection 🎮</p>
					<p>
						Hecho con ❤️ usando React + TypeScript + TailwindCSS +
						DaisyUI
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
