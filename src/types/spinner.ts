export interface Spinner {
	id: string;
	name: string;
	description: string;
	component: React.ComponentType;
	tags: string[];
	category: "2D" | "3D";
	difficulty: "easy" | "medium" | "hard";
	preview?: string;
}

export interface SpinnerFilter {
	category?: "2D" | "3D" | "all";
	tags?: string[];
	search?: string;
}
