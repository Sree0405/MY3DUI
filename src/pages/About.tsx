import { motion } from "framer-motion";
import { Code, Package, Globe, Layers } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

/* Personal Stats */
const stats = [
  { icon: Code, label: "Projects Built", value: "25+" },
  { icon: Package, label: "UI Components", value: "50+" },
  { icon: Layers, label: "Systems Designed", value: "10+" },
  { icon: Globe, label: "Open Source Reach", value: "Global" },
];

/* Profile */
const profile = {
  name: "Sreekanth",
  role: "Frontend Engineer & Open Source Creator",
  location: "India",
  experience: "1+ Year Professional Experience",
  focus: "Scalable UI Systems & Web Architecture",
};

/* Tech Stack */
const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Remix",
  "Three.js",
  "React Three Fiber",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "REST APIs",
  "PHP",
  "Java",
  "MySQL",
  "MongoDB",
  "Git & GitHub",
  "CI/CD",
  "System Design",
  "Software Architecture",
  "Performance Optimization",
  "Web Security",
];

export default function About() {
  usePageMeta({
    title: "About",
    description: "About the creator of My3DUI",
  });

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-gradient">My3DUI</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My3DUI is an open-source 3D and interactive UI system built to help
              developers design scalable, modern web interfaces using React and WebGL technologies.
            </p>

          </motion.div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl p-6 text-center"
              >

                <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />

                <div className="text-2xl font-bold">
                  {s.value}
                </div>

                <div className="text-xs text-muted-foreground mt-1">
                  {s.label}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* About Me */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10 text-center"
          >

            <h2 className="text-2xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">

              Hi, I’m{" "}
              <span className="text-primary font-semibold">
                {profile.name}
              </span>
              , a passionate frontend and full-stack engineer focused on building
              scalable, maintainable, and high-performance web applications.

              <br /><br />

              I specialize in modern JavaScript frameworks, UI architecture,
              and interactive experiences. I actively work on open-source
              projects like My3DUI to deepen my understanding of system design,
              component engineering, and frontend infrastructure.

              <br /><br />

              My goal is to work on complex products where I can contribute
              to design systems, platform architecture, and large-scale
              engineering challenges.

            </p>

            {/* Profile Info */}
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">

              <InfoItem label="Role" value={profile.role} />
              <InfoItem label="Location" value={profile.location} />
              <InfoItem label="Experience" value={profile.experience} />
              <InfoItem label="Primary Focus" value={profile.focus} />

            </div>

          </motion.div>

        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          <h2 className="text-2xl font-bold mb-8">
            Technology & Skills
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tools, technologies, and engineering practices I use to build
            scalable production systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

/* Info Item */
function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col bg-muted/30 rounded-lg p-3">
      <span className="text-xs text-muted-foreground">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}
