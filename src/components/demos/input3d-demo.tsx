import { Input3D } from "@/components/ui/input3d";
import { Stack } from "@/components/layouts/stack";
import { Mail, Lock, Search, User, Phone } from "lucide-react";
import { Button3D } from "@/components/ui/button3d";

export default function Input3DDemo() {
    return (
        <div className="min-h-screen  bg-slate-950 p-10 flex flex-col gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Input 3D</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Beautiful form inputs with 3D depth effects and smooth focus animations.
                </p>
            </div>

            <div className="grid gap-8 max-w-2xl mx-auto w-full">
                {/* Basic Inputs */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Basic Inputs
                    </h3>
                    <Stack gap={4}>
                        <Input3D label="Email" type="email" placeholder="you@example.com" />
                        <Input3D label="Password" type="password" placeholder="••••••••" />
                        <Input3D label="Username" placeholder="johndoe" />
                    </Stack>
                </div>

                {/* With Icons */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        With Icons
                    </h3>
                    <Stack gap={4}>
                        <Input3D
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            icon={<Mail className="w-4 h-4" />}
                        />
                        <Input3D
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            icon={<Lock className="w-4 h-4" />}
                        />
                        <Input3D
                            label="Search"
                            placeholder="Search..."
                            icon={<Search className="w-4 h-4" />}
                        />
                        <Input3D
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            icon={<Phone className="w-4 h-4" />}
                        />
                    </Stack>
                </div>

                {/* States */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        States
                    </h3>
                    <Stack gap={4}>
                        <Input3D label="Default" placeholder="Type something..." />
                        <Input3D label="Disabled" placeholder="Disabled input" disabled />
                        <Input3D
                            label="With Error"
                            placeholder="Invalid input"
                            error="This field is required"
                        />
                        <Input3D
                            label="Read Only"
                            value="Read-only value"
                            readOnly
                        />
                    </Stack>
                </div>

                {/* Login Form Example */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border shadow-sm space-y-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Login Form Example
                    </h3>
                    <Stack gap={4}>
                        <Input3D
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                            icon={<Mail className="w-4 h-4" />}
                        />
                        <Input3D
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            icon={<Lock className="w-4 h-4" />}
                        />
                        <Button3D variant="primary" className="w-full mt-2">
                            Sign In
                        </Button3D>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
