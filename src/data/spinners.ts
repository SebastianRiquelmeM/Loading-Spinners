import type { Spinner } from "../types";
import EightBallSpinner from "../spinners/3D/EightBallSpinner";

export const spinners: Spinner[] = [
	{
		id: "eightball-3d",
		name: "8-Ball 3D",
		description:
			"Spinner 3D con efecto de bola de billar número 8 con animación flotante",
		component: EightBallSpinner,
		tags: ["3d", "sphere", "billiard", "black", "floating"],
		category: "3D",
		difficulty: "medium",
	},
];
