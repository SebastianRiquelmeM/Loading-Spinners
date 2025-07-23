import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BasicSphere() {
	const mountRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<THREE.Scene | null>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const animationIdRef = useRef<number | null>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		// Scene setup
		const scene = new THREE.Scene();
		sceneRef.current = scene;

		// Camera setup
		const camera = new THREE.PerspectiveCamera(
			75,
			1, // aspect ratio will be 1:1 since we want a square
			0.1,
			1000
		);
		camera.position.z = 5;

		// Renderer setup
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true, // Enable transparency
		});
		renderer.setSize(100, 100); // Fixed size for the spinner
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		rendererRef.current = renderer;

		// Create geometry and material following the guide
		const geometry = new THREE.SphereGeometry(1.5, 64, 64);

		// Basic black material with glossy effect
		const material = new THREE.MeshStandardMaterial({
			color: "#000000",
			roughness: 0,
			metalness: 0.1,
		});

		// Create a simple gradient texture as environment map
		const canvas = document.createElement("canvas");
		canvas.width = 256;
		canvas.height = 256;
		const ctx = canvas.getContext("2d")!;

		// Create a radial gradient
		const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
		gradient.addColorStop(0, "#ffffff");
		gradient.addColorStop(0.3, "#cccccc");
		gradient.addColorStop(0.7, "#666666");
		gradient.addColorStop(1, "#000000");

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, 256, 256);

		const envMapTexture = new THREE.CanvasTexture(canvas);
		envMapTexture.mapping = THREE.EquirectangularReflectionMapping;
		material.envMap = envMapTexture;

		// Create mesh
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		// Lighting
		const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		// Mount the renderer
		const currentMount = mountRef.current;
		currentMount.appendChild(renderer.domElement);

		// Animation loop
		const animate = () => {
			animationIdRef.current = requestAnimationFrame(animate);

			// Rotate the sphere
			sphere.rotation.x += 0.005;
			sphere.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		animate();

		// Cleanup function
		return () => {
			if (animationIdRef.current) {
				cancelAnimationFrame(animationIdRef.current);
			}
			if (currentMount && renderer.domElement) {
				currentMount.removeChild(renderer.domElement);
			}
			renderer.dispose();
			geometry.dispose();
			material.dispose();
			envMapTexture.dispose();
		};
	}, []);

	return (
		<div
			ref={mountRef}
			style={{
				width: "100px",
				height: "100px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		/>
	);
}
