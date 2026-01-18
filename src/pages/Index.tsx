import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ChaosToClarity } from "@/components/home/ChaosToClarity";
import { AboutUs } from "@/components/home/AboutUs";
import { KlenzoKits } from "@/components/home/KlenzoKits";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChaosToClarity />
      <AboutUs />
      <KlenzoKits />
    </Layout>
  );
};

export default Index;
