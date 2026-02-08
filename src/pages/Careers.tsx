// import { motion } from "framer-motion";
// import { Briefcase, MapPin, ArrowRight } from "lucide-react";
// import { usePageMeta } from "@/hooks/use-page-meta";

// const positions = [
//   { title: "Senior React Engineer", team: "Core Library", location: "Remote", type: "Full-time" },
//   { title: "WebGL Graphics Engineer", team: "Rendering", location: "Remote", type: "Full-time" },
//   { title: "Developer Relations", team: "Community", location: "Remote / SF", type: "Full-time" },
//   { title: "Technical Writer", team: "Documentation", location: "Remote", type: "Part-time" },
// ];

// export default function Careers() {
//   usePageMeta({ title: "Careers", description: "Join the My3DUI team and build the future of 3D web interfaces." });

//   return (
//     <div className="pt-16">
//       <section className="py-20 bg-gradient-hero">
//         <div className="container mx-auto px-6 text-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4"><span className="text-gradient">Careers</span></h1>
//             <p className="text-muted-foreground text-lg max-w-xl mx-auto">Help us build the future of 3D web interfaces.</p>
//           </motion.div>
//         </div>
//       </section>
//       <section className="py-12">
//         <div className="container mx-auto px-6 max-w-3xl space-y-4">
//           {positions.map((pos) => (
//             <div key={pos.title} className="glass rounded-xl p-6 group hover:border-primary/30 transition-all cursor-pointer">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors flex items-center gap-2">
//                     {pos.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </h3>
//                   <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
//                     <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{pos.team}</span>
//                     <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{pos.location}</span>
//                   </div>
//                 </div>
//                 <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{pos.type}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
