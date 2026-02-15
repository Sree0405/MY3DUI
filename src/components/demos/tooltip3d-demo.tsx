import React from "react";
import DemoStage from "./DemoStage";
import { Tooltip3D, Button3D } from "@sreedev/my3dui";

export default function Tooltip3DDemo() {
  return (
    <DemoStage cameraPosition={[0, 0, 6]}>

      <Tooltip3D content="Top Tooltip" side="top">
        <Button3D >
          Hover Top
        </Button3D>
      </Tooltip3D>

      <Tooltip3D content="Bottom Tooltip" side="bottom">
        <Button3D >
          Hover Bottom
        </Button3D>
      </Tooltip3D>

      <Tooltip3D content="Left Tooltip" side="left">
        <Button3D >
          Hover Left
        </Button3D>
      </Tooltip3D>

      <Tooltip3D content="Right Tooltip" side="right">
        <Button3D>
          Hover Right
        </Button3D>
      </Tooltip3D>

    </DemoStage>
  );
}