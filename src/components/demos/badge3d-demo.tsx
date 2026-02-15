import { Badge3D, Stack } from "@sreedev/my3dui";
import { Check, X, AlertCircle, Info, Zap } from "lucide-react";

export default function Badge3DDemo() {
    return (
        <div className="min-h-screen  p-10 flex flex-col gap-12 text-slate-100">
            {/* Header */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">
                    Badge 3D
                </h2>

                <p className="text-slate-400 max-w-lg mx-auto">
                    Compact status indicators with 3D depth and smooth animations.
                </p>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto w-full">

                {/* Variants */}
                <Section title="Variants">
                    <Stack direction="row" gap={3} wrap>
                        <Badge3D variant="default">Default</Badge3D>
                        <Badge3D variant="secondary">Secondary</Badge3D>
                        <Badge3D variant="success">Success</Badge3D>
                        <Badge3D variant="warning">Warning</Badge3D>
                        <Badge3D variant="danger">Danger</Badge3D>
                        <Badge3D variant="outline">Outline</Badge3D>
                    </Stack>
                </Section>

                {/* Sizes */}
                <Section title="Sizes">
                    <Stack direction="row" gap={3} align="center" wrap>
                        <Badge3D size="sm">Small</Badge3D>
                        <Badge3D size="md">Medium</Badge3D>
                        <Badge3D size="lg">Large</Badge3D>
                    </Stack>
                </Section>

                {/* With Icons */}
                <Section title="With Icons">
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
                </Section>

                {/* Animated */}
                <Section title="Animated">
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
                </Section>

                {/* Real World */}
                <Section title="Real-world Examples" large>
                    <div className="space-y-4">

                        <ExampleRow label="API Status">
                            <Badge3D variant="success" pulse>
                                <Check className="w-3 h-3 mr-1" />
                                Operational
                            </Badge3D>
                        </ExampleRow>

                        <ExampleRow label="Build Pipeline">
                            <Badge3D variant="warning">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                In Progress
                            </Badge3D>
                        </ExampleRow>

                        <ExampleRow label="User Role">
                            <Badge3D variant="secondary">
                                <Zap className="w-3 h-3 mr-1" />
                                Premium
                            </Badge3D>
                        </ExampleRow>

                    </div>
                </Section>

            </div>
        </div>
    );
}

/* ----------------------------------
   Reusable UI Blocks
---------------------------------- */

function Section({
    title,
    children,
    large = false,
}: {
    title: string;
    children: React.ReactNode;
    large?: boolean;
}) {
    return (
        <div
            className={`bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-sm space-y-4 ${
                large ? "space-y-6" : ""
            }`}
        >
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400">
                {title}
            </h3>

            {children}
        </div>
    );
}

function ExampleRow({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg bg-slate-950">
            <span className="font-medium text-slate-200">
                {label}
            </span>

            {children}
        </div>
    );
}