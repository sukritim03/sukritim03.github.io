import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ChaosToClarity } from "@/components/home/ChaosToClarity";
import { FeaturedSolutions } from "@/components/home/FeaturedSolutions";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChaosToClarity />
      <FeaturedSolutions />
    </Layout>
  );
};

export default Index;
