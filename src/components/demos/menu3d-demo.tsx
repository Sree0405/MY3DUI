import React from "react";
import DemoStage from "./DemoStage";
import { Menu3D, Button3D, Menu3DItem, Menu3DSeparator, Menu3DLabel } from "@sreedev/my3dui";
import { Settings, User, LogOut } from "lucide-react";

export default function Menu3DDemo() {
    return (
        <DemoStage cameraPosition={[0, 0, 5]}>
            <Menu3D trigger={<Button3D>Menu</Button3D>}>

            <Menu3DLabel>Account</Menu3DLabel>

            <Menu3DItem>Profile</Menu3DItem>

            <Menu3DItem>Settings</Menu3DItem>

            <Menu3DSeparator />

            <Menu3DItem className="text-red-500">
                Logout
            </Menu3DItem>

            </Menu3D>
        </DemoStage>
    );
}
