import React from "react";
import DemoStage from "./DemoStage";
import { Menu3D } from "@/components/ui/menu3d";
import { Button3D } from "@/components/ui/button3d";
import { Settings, User, LogOut } from "lucide-react";

export default function Menu3DDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 5]}>
            <Menu3D
                trigger={<Button3D>Options Menu</Button3D>}
                items={[
                    {
                        label: "Profile",
                        icon: <User size={14} />,
                        onClick: () => console.log("Profile"),
                    },
                    {
                        label: "Settings",
                        icon: <Settings size={14} />,
                        onClick: () => console.log("Settings"),
                    },
                    {
                        label: "Logout",
                        icon: <LogOut size={14} />,
                        danger: true,
                        onClick: () => console.log("Logout"),
                    },
                ]}
            />
        </DemoStage>
    );
}
