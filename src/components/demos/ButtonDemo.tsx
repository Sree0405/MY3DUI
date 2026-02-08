import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Button clicked!");
    }, 1000);
  }

  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center items-center p-6">

      {/* Variants */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button>Default</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="destructive">
          Destructive
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

        <Button variant="link">
          Link
        </Button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button size="sm">Small</Button>

        <Button size="default">Default</Button>

        <Button size="lg">Large</Button>

        <Button size="icon">⚡</Button>
      </div>

      {/* States */}
      <div className="flex flex-wrap gap-3 justify-center">

        <Button
          disabled={loading}
          onClick={handleClick}
        >
          {loading ? "Loading..." : "Click Me"}
        </Button>

        <Button disabled>
          Disabled
        </Button>

      </div>

    </div>
  );
}
