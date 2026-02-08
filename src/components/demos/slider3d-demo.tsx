import { useState } from "react";
import { Slider3D } from "@/components/ui/slider3d";
import { Stack } from "@/components/layouts/stack";
import { Volume2, Sun, Thermometer } from "lucide-react";

export default function Slider3DDemo() {
    const [volume, setVolume] = useState(75);
    const [brightness, setBrightness] = useState(60);
    const [temperature, setTemperature] = useState(22);

    return (
        <div className="min-h-screen  bg-slate-950 p-10 flex flex-col gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Slider 3D</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Interactive range sliders with smooth animations and 3D depth effects.
                </p>
            </div>

            <div className="grid gap-8 max-w-2xl mx-auto w-full">
                {/* Basic Sliders */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Basic Sliders
                    </h3>
                    <Stack gap={6}>
                        <Slider3D label="Default Slider" defaultValue={50} />
                        <Slider3D label="With Custom Range" min={0} max={200} defaultValue={100} />
                        <Slider3D label="Small Steps" min={0} max={10} step={0.5} defaultValue={5} />
                    </Stack>
                </div>

                {/* Controlled Sliders */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Controlled Sliders
                    </h3>
                    <Stack gap={6}>
                        <Slider3D
                            label="Volume"
                            value={volume}
                            onChange={setVolume}
                            showValue
                        />
                        <Slider3D
                            label="Brightness"
                            value={brightness}
                            onChange={setBrightness}
                            showValue
                        />
                        <Slider3D
                            label="Temperature (°C)"
                            value={temperature}
                            onChange={setTemperature}
                            min={16}
                            max={30}
                            showValue
                        />
                    </Stack>
                </div>

                {/* Without Labels */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Without Value Display
                    </h3>
                    <Stack gap={6}>
                        <Slider3D label="Compact Slider" showValue={false} defaultValue={30} />
                        <Slider3D label="Another Option" showValue={false} defaultValue={70} />
                    </Stack>
                </div>

                {/* Disabled State */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Disabled State
                    </h3>
                    <Slider3D label="Disabled Slider" defaultValue={50} disabled />
                </div>

                {/* Real-world Example */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Settings Panel Example
                    </h3>
                    <Stack gap={6}>
                        <div className="flex items-center gap-4">
                            <Volume2 className="w-5 h-5 text-muted-foreground" />
                            <Slider3D
                                label="Volume"
                                value={volume}
                                onChange={setVolume}
                                showValue
                                className="flex-1"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <Sun className="w-5 h-5 text-muted-foreground" />
                            <Slider3D
                                label="Brightness"
                                value={brightness}
                                onChange={setBrightness}
                                showValue
                                className="flex-1"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <Thermometer className="w-5 h-5 text-muted-foreground" />
                            <Slider3D
                                label="Temperature"
                                value={temperature}
                                onChange={setTemperature}
                                min={16}
                                max={30}
                                showValue
                                className="flex-1"
                            />
                        </div>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
