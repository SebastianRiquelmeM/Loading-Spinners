import type { Spinner } from "../types";
import EightBall from "../spinners/3D/8ball";
import BasicSphere from "../spinners/3D/BasicSphere";

export const spinners: Spinner[] = [
	{
		id: "eightball-3d",
		name: "8-Ball 3D",
		description:
			"Spinner 3D con efecto de bola de billar número 8 con animación flotante",
		component: EightBall,
		tags: ["3d", "sphere", "billiard", "black", "floating"],
		category: "3D",
		difficulty: "medium",
	},
	{
		id: "basic-sphere-3d",
		name: "Basic Sphere",
		description:
			"Esfera negra básica con Three.js siguiendo la guía de efectos glossy",
		component: BasicSphere,
		tags: ["3d", "sphere", "threejs", "basic", "glossy"],
		category: "3D",
		difficulty: "easy",
	},
];
