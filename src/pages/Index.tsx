import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComponentShowcase from "@/components/ComponentShowcase";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
// import  Accordion3D  from "@component/uiaccordion3d";
const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      {/* <Accordion3D
        items={[
          { title: "Section 1", content: <p>Content 1</p> },
          { title: "Section 2", content: <p>Content 2</p> },
        ]}
      /> */}
      <ComponentShowcase />
      <PricingSection />
      <CTASection />
    </>
  );
};

export default Index;
