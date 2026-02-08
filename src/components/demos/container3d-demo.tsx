import { Container } from "@/components/layouts/container";
import { Stack } from "@/components/layouts/stack";
import { Grid } from "@/components/layouts/grid";
import { Section } from "@/components/layouts/section";
import { Button3D } from "@/components/ui/button3d";
import { Card3D } from "@/components/ui/card3d";

export default function LayoutDemo() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <Section background="muted" className="border-b">
                <Stack gap={6} align="center" className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Universal Layout System
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A powerful, flexible layout system built with Container, Stack, and Grid components.
                        No 3D canvas required—just pure CSS grid and flexbox.
                    </p>
                    <Stack direction="row" gap={4}>
                        <Button3D variant="primary" size="lg">Get Started</Button3D>
                        <Button3D variant="outline" size="lg">Documentation</Button3D>
                    </Stack>
                </Stack>
            </Section>

            {/* Grid Features Section */}
            <Section>
                <Stack gap={10}>
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold">Grid Layout</h2>
                        <p className="text-muted-foreground">Responsive grid scales automatically</p>
                    </div>

                    <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={8}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card3D key={i} depth="sm" className="h-48 flex items-center justify-center bg-slate-50 dark:bg-slate-900 border-none">
                                <span className="text-2xl font-bold text-slate-300">Feature {i}</span>
                            </Card3D>
                        ))}
                    </Grid>
                </Stack>
            </Section>

            {/* Stack Section */}
            <Section background="glass">
                <Container size="md">
                    <Stack gap={8} className="bg-slate-100 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Stack Layout</h2>
                            <p className="text-muted-foreground">Vertical or horizontal alignment made easy.</p>
                        </div>

                        <Stack gap={4} className="p-4 bg-white dark:bg-black/20 rounded-lg border border-dashed border-slate-300">
                            <div className="h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600 font-mono text-sm">Item 1</div>
                            <div className="h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600 font-mono text-sm">Item 2 (Gap 4)</div>
                            <div className="h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600 font-mono text-sm">Item 3</div>
                        </Stack>

                        <Stack direction="row" justify="between" className="p-4 bg-white dark:bg-black/20 rounded-lg border border-dashed border-slate-300">
                            <div className="w-20 h-12 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">Start</div>
                            <div className="w-20 h-12 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">Center</div>
                            <div className="w-20 h-12 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center text-purple-600 font-mono text-xs">End</div>
                        </Stack>
                    </Stack>
                </Container>
            </Section>
        </div>
    );
}
