import React from "react";
import DemoStage from "./DemoStage";
import { ModelViewer } from "@/components/ui/modelviewer";

export default function ModelViewerDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 5]}>
            {/* Mocking a model with a primitive if no external URL is guaranteed to work without CORS. 
           But ModelViewer expects a src. 
           We'll use a standard public GLB. */}
            <ModelViewer
                src="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf"
                scale={2}
                autoRotate={true}
            />
        </DemoStage>
    );
}
