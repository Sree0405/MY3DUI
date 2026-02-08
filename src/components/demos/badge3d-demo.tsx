import { Badge3D } from "@/components/ui/badge3d";
import { Stack } from "@/components/layouts/stack";
import { Grid } from "@/components/layouts/grid";
import { Check, X, AlertCircle, Info, Zap } from "lucide-react";

export default function Badge3DDemo() {
    return (
        <div className="min-h-screen  bg-slate-950 p-10 flex flex-col gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Badge 3D</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Compact status indicators with 3D depth and smooth animations.
                </p>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto w-full">
                {/* Variants */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Variants
                    </h3>
                    <Stack direction="row" gap={3} wrap>
                        <Badge3D variant="default">Default</Badge3D>
                        <Badge3D variant="secondary">Secondary</Badge3D>
                        <Badge3D variant="success">Success</Badge3D>
                        <Badge3D variant="warning">Warning</Badge3D>
                        <Badge3D variant="danger">Danger</Badge3D>
                        <Badge3D variant="outline">Outline</Badge3D>
                    </Stack>
                </div>

                {/* Sizes */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Sizes
                    </h3>
                    <Stack direction="row" gap={3} align="center" wrap>
                        <Badge3D size="sm">Small</Badge3D>
                        <Badge3D size="md">Medium</Badge3D>
                        <Badge3D size="lg">Large</Badge3D>
                    </Stack>
                </div>

                {/* With Icons */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        With Icons
                    </h3>
                    <Stack direction="row" gap={3} wrap>
                        <Badge3D variant="success">
                            <Check className="w-3 h-3 mr-1" />
                            Verified
                        </Badge3D>
                        <Badge3D variant="danger">
                            <X className="w-3 h-3 mr-1" />
                            Failed
                        </Badge3D>
                        <Badge3D variant="warning">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Pending
                        </Badge3D>
                        <Badge3D variant="default">
                            <Info className="w-3 h-3 mr-1" />
                            Info
                        </Badge3D>
                        <Badge3D variant="secondary">
                            <Zap className="w-3 h-3 mr-1" />
                            Pro
                        </Badge3D>
                    </Stack>
                </div>

                {/* Pulse Animation */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Animated
                    </h3>
                    <Stack direction="row" gap={3} wrap>
                        <Badge3D variant="success" pulse>
                            Live
                        </Badge3D>
                        <Badge3D variant="danger" pulse>
                            Alert
                        </Badge3D>
                        <Badge3D variant="warning" pulse>
                            Processing
                        </Badge3D>
                    </Stack>
                </div>

                {/* Real-world Examples */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Real-world Examples
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <span className="font-medium">API Status</span>
                            <Badge3D variant="success" pulse>
                                <Check className="w-3 h-3 mr-1" />
                                Operational
                            </Badge3D>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <span className="font-medium">Build Pipeline</span>
                            <Badge3D variant="warning">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                In Progress
                            </Badge3D>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <span className="font-medium">User Role</span>
                            <Badge3D variant="secondary">
                                <Zap className="w-3 h-3 mr-1" />
                                Premium
                            </Badge3D>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
