import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface AudioVisualizerProps {
    audioSrc: string; // URL to audio file
    fftSize?: number;
    barColor?: string;
    width?: number;
}

export function AudioVisualizer({
    audioSrc,
    fftSize = 64,
    barColor = "#22d3ee",
    width = 10,
}: AudioVisualizerProps) {
    const analyserRef = useRef<THREE.AudioAnalyser | null>(null);
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // We need user interaction to start audio usually.
        // For this component, we won't auto-play if blocked, but we set up the loader.
        const listener = new THREE.AudioListener();
        const sound = new THREE.Audio(listener);
        const audioLoader = new THREE.AudioLoader();

        audioLoader.load(audioSrc, function (buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);

            const analyser = new THREE.AudioAnalyser(sound, fftSize);
            analyserRef.current = analyser;
            setReady(true);

            // Attempt play - might be blocked until user gesture elsewhere
            sound.play();
        });

        return () => {
            if (sound.isPlaying) sound.stop();
        };
    }, [audioSrc, fftSize]);

    useFrame(() => {
        if (analyserRef.current && meshRef.current && ready) {
            const data = analyserRef.current.getFrequencyData();
            // visualizer logic
            // Map data to instances scale
            const count = data.length;
            const step = width / count;

            const tempObj = new THREE.Object3D();

            for (let i = 0; i < count; i++) {
                const value = data[i] / 256.0;
                const h = value * 5;
                const x = (i - count / 2) * step;

                tempObj.position.set(x, h / 2, 0);
                tempObj.scale.set(step * 0.8, h || 0.1, step * 0.8);
                tempObj.updateMatrix();
                meshRef.current.setMatrixAt(i, tempObj.matrix);
            }
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, fftSize / 2] as any}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={barColor} />
        </instancedMesh>
    );
}
