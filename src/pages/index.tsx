import IntroductionCarousel from "@/components/personal-development/introduction-carousel";
import MianBanner from "@/components/personal-development/main-banner";
import Navbar from "@/components/reusable/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MianBanner />
      <IntroductionCarousel />
    </main>
  );
}
