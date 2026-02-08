import { Button3D } from "@/components/ui/button3d";
import { Send, Trash2, Save, ExternalLink, Loader2, Home } from "lucide-react";
import { Stack } from "@/components/layouts/stack";
import { Grid } from "@/components/layouts/grid";

export default function Button3DDemo() {
    return (
        <div className="flex flex-col gap-12 p-10 items-center justify-center min-h-screen  bg-slate-950 rounded-xl">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Button 3D</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Tactile, engaging buttons with 3D press effects using pure CSS and Framer Motion.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Primary Variants */}
                <Stack gap={4} className="p-6 border rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-widest">Solid</h3>
                    <Button3D variant="primary">Primary Action</Button3D>
                    <Button3D variant="secondary">Secondary Action</Button3D>
                    <Button3D variant="destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                    </Button3D>
                    <Button3D variant="accent">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                    </Button3D>
                </Stack>

                {/* Outline & Ghost */}
                <Stack gap={4} className="p-6 border rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-widest">Outline / Ghost</h3>
                    <Button3D variant="outline">Outline Button</Button3D>
                    <Button3D variant="ghost">Ghost Button</Button3D>
                    <Button3D variant="outline" size="sm">Small Outline</Button3D>
                    <Button3D variant="glass">Glass Effect</Button3D>
                </Stack>

                {/* Sizes */}
                <Stack gap={4} className="p-6 border rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-widest">Sizes</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button3D size="sm">Small</Button3D>
                        <Button3D size="md">Medium</Button3D>
                    </div>
                    <Button3D size="lg" className="w-full">Large Button</Button3D>
                    <div className="flex gap-4">
                        <Button3D size="icon" variant="primary"><Home className="w-4 h-4" /></Button3D>
                        <Button3D size="icon" variant="secondary"><Send className="w-4 h-4" /></Button3D>
                        <Button3D size="icon" variant="destructive"><Trash2 className="w-4 h-4" /></Button3D>
                    </div>
                </Stack>

                {/* States */}
                <Stack gap={4} className="p-6 border rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-widest">States</h3>
                    <Button3D disabled>Disabled</Button3D>
                    <Button3D loading variant="outline">Loading</Button3D>
                    <Button3D shadowColor="#8b5cf6" className="bg-violet-500 hover:bg-violet-400 border-b-violet-700 text-white">
                        Custom Shadow
                    </Button3D>
                    <Button3D
                        className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full w-full"
                        shadowColor="#4338ca"
                    >
                        Rounded Full
                    </Button3D>
                </Stack>

            </div>
        </div>
    );
}
