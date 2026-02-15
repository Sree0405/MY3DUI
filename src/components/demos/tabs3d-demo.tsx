import { Home, Settings, User, Bell } from "lucide-react";
import { Card3D ,Tabs3D} from "@sreedev/my3dui";

export default function Tabs3DDemo() {
    const basicTabs = [
        {
            label: "Overview",
            value: "overview",
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Overview</h3>
                    <p className="text-muted-foreground">
                        This is the overview tab content. It provides a high-level summary of your dashboard.
                    </p>
                </div>
            ),
        },
        {
            label: "Analytics",
            value: "analytics",
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Analytics</h3>
                    <p className="text-muted-foreground">
                        View detailed analytics and metrics about your application performance.
                    </p>
                </div>
            ),
        },
        {
            label: "Reports",
            value: "reports",
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Reports</h3>
                    <p className="text-muted-foreground">
                        Generate and download comprehensive reports for your data.
                    </p>
                </div>
            ),
        },
    ];

    const iconTabs = [
        {
            label: "Home",
            value: "home",
            icon: <Home className="w-4 h-4" />,
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Home</h3>
                    <p className="text-muted-foreground">Welcome to your dashboard home.</p>
                </div>
            ),
        },
        {
            label: "Profile",
            value: "profile",
            icon: <User className="w-4 h-4" />,
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Profile</h3>
                    <p className="text-muted-foreground">Manage your profile settings and preferences.</p>
                </div>
            ),
        },
        {
            label: "Notifications",
            value: "notifications",
            icon: <Bell className="w-4 h-4" />,
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Notifications</h3>
                    <p className="text-muted-foreground">View and manage your notifications.</p>
                </div>
            ),
        },
        {
            label: "Settings",
            value: "settings",
            icon: <Settings className="w-4 h-4" />,
            content: (
                <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Settings</h3>
                    <p className="text-muted-foreground">Configure your application settings.</p>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen  bg-slate-950 p-10 flex flex-col gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Tabs 3D</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Organize content into tabbed interfaces with smooth transitions and 3D depth.
                </p>
            </div>

            <div className="grid gap-12 max-w-4xl mx-auto w-full">
                {/* Default Variant */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Default Variant
                    </h3>
                    <Tabs3D tabs={basicTabs} variant="default" />
                </div>

                {/* Pills Variant */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Pills Variant
                    </h3>
                    <Tabs3D tabs={basicTabs} variant="pills" />
                </div>

                {/* Underline Variant */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Underline Variant
                    </h3>
                    <Tabs3D tabs={basicTabs} variant="underline" />
                </div>

                {/* With Icons */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        With Icons
                    </h3>
                    <Tabs3D tabs={iconTabs} variant="default" />
                </div>

                {/* Real-world Example */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">
                        Dashboard Example
                    </h3>
                    <Card3D className="p-6" disableTilt>
                        <Tabs3D tabs={iconTabs} variant="pills" />
                    </Card3D>
                </div>
            </div>
        </div>
    );
}
