import React, { useState } from "react";
import DemoStage from "./DemoStage";
import { Modal3D } from "@/components/ui/modal3d";
import { Button3D } from "@/components/ui/button3d";

export default function Modal3DDemo() {
    const [open, setOpen] = useState(false);

    return (
        <DemoStage>
            <Button3D onClick={() => setOpen(true)} size="lg">
                Open Modal
            </Button3D>

            <Modal3D
                open={open}
                onClose={() => setOpen(false)}
            // title="Example Modal" // Removed if not in prop type, using standard children
            >
                <div className="p-4 text-center">
                    <h2 className="text-xl font-bold mb-2">Hello World</h2>
                    <p className="text-gray-400 mb-4">
                        This is a 3D overlay modal using Html.
                    </p>
                    <button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-400"
                    >
                        Close
                    </button>
                </div>
            </Modal3D>
        </DemoStage>
    );
}
