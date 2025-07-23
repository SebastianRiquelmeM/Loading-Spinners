import { useState } from "react";
import type { Spinner } from "../../types";
import SpinnerCard from "./SpinnerCard";

interface SpinnerGalleryProps {
	spinners: Spinner[];
	filter: string;
}

export default function SpinnerGallery({
	spinners,
	filter,
}: SpinnerGalleryProps) {
	const [selectedSpinner, setSelectedSpinner] = useState<Spinner | null>(
		null
	);

	const filteredSpinners = spinners.filter((spinner) => {
		if (filter === "all") return true;
		return spinner.category === filter;
	});

	const handleSpinnerSelect = (spinner: Spinner) => {
		setSelectedSpinner(spinner);
	};

	return (
		<div className="container mx-auto p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{filteredSpinners.map((spinner) => (
					<SpinnerCard
						key={spinner.id}
						spinner={spinner}
						onSelect={handleSpinnerSelect}
					/>
				))}
			</div>

			{/* Modal para mostrar detalles del spinner */}
			{selectedSpinner && (
				<dialog className="modal modal-open">
					<div className="modal-box max-w-4xl w-full">
						<div className="flex justify-between items-center mb-6">
							<h3 className="font-bold text-2xl text-primary">
								{selectedSpinner.name}
							</h3>
							<button
								className="btn btn-sm btn-circle btn-ghost"
								onClick={() => setSelectedSpinner(null)}
							>
								✕
							</button>
						</div>

						{/* Área ampliada para el spinner */}
						<div className="bg-base-300 rounded-xl p-16 mb-6 flex justify-center items-center min-h-[300px] relative overflow-hidden">
							<div
								className="transform scale-150 hover:scale-[1.7] transition-transform duration-500 ease-in-out"
								style={{
									filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
									transformStyle: "preserve-3d",
								}}
							>
								<selectedSpinner.component />
							</div>
							{/* Efecto de fondo opcional */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"></div>
							<div className="absolute inset-0 bg-gradient-to-t from-base-300/20 to-transparent rounded-xl"></div>
						</div>

						{/* Información del spinner */}
						<div className="space-y-4">
							<div>
								<h4 className="font-semibold text-lg mb-2">
									Descripción
								</h4>
								<p className="text-base-content/80">
									{selectedSpinner.description}
								</p>
							</div>

							<div>
								<h4 className="font-semibold text-lg mb-2">
									Detalles
								</h4>
								<div className="flex flex-wrap gap-3">
									<div className="badge badge-outline badge-lg">
										{selectedSpinner.category}
									</div>
									<div
										className={`badge badge-lg ${
											selectedSpinner.difficulty ===
											"easy"
												? "badge-success"
												: selectedSpinner.difficulty ===
												  "medium"
												? "badge-warning"
												: "badge-error"
										}`}
									>
										{selectedSpinner.difficulty}
									</div>
								</div>
							</div>

							<div>
								<h4 className="font-semibold text-lg mb-2">
									Tags
								</h4>
								<div className="flex flex-wrap gap-2">
									{selectedSpinner.tags.map((tag) => (
										<span
											key={tag}
											className="badge badge-primary badge-sm"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>

						<div className="modal-action pt-6 border-t border-base-300">
							<button
								className="btn btn-ghost"
								onClick={() => setSelectedSpinner(null)}
							>
								Cerrar
							</button>
							<button className="btn btn-primary">
								Ver Código
							</button>
							<button className="btn btn-secondary">
								Copiar CSS
							</button>
						</div>
					</div>
					{/* Fondo del modal clickeable para cerrar */}
					<form method="dialog" className="modal-backdrop">
						<button onClick={() => setSelectedSpinner(null)}>
							close
						</button>
					</form>
				</dialog>
			)}
		</div>
	);
}
