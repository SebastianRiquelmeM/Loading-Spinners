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
					<div className="modal-box max-w-2xl">
						<h3 className="font-bold text-lg mb-4">
							{selectedSpinner.name}
						</h3>

						<div className="bg-base-300 rounded-lg p-8 mb-4 flex justify-center">
							<selectedSpinner.component />
						</div>

						<p className="py-4">{selectedSpinner.description}</p>

						<div className="flex flex-wrap gap-2 mb-4">
							{selectedSpinner.tags.map((tag) => (
								<span key={tag} className="badge badge-primary">
									{tag}
								</span>
							))}
						</div>

						<div className="modal-action">
							<button
								className="btn btn-ghost"
								onClick={() => setSelectedSpinner(null)}
							>
								Cerrar
							</button>
							<button className="btn btn-primary">
								Ver Código
							</button>
						</div>
					</div>
				</dialog>
			)}
		</div>
	);
}
