import { HeroSection } from "@/components/home/HeroSection";
import { VisionManifestoSection } from "@/components/home/VisionManifestoSection";
import { PrincipalWelcomeSection } from "@/components/home/PrincipalWelcomeSection";
import { HeritageTimelineSection } from "@/components/home/HeritageTimelineSection";
import { AcademicsExplorerSection } from "@/components/home/AcademicsExplorerSection";
import { HousesShowcaseSection } from "@/components/home/HousesShowcaseSection";
import { CoCurricularMarqueeSection } from "@/components/home/CoCurricularMarqueeSection";
import { ParallaxGallerySection } from "@/components/home/ParallaxGallerySection";
import { NoticesAndCtaSection } from "@/components/home/NoticesAndCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionManifestoSection />
      <PrincipalWelcomeSection />
      <HeritageTimelineSection />
      <AcademicsExplorerSection />
      <HousesShowcaseSection />
      <CoCurricularMarqueeSection />
      <ParallaxGallerySection />
      <NoticesAndCtaSection />
    </>
  );
}
