import MianBanner from "@/components/home/main-banner";
import Blob from "@/components/reusable/blob";
import Navbar from "@/components/reusable/navbar";

export default function Home() {
  return (
    <main className="font-avenir">
      <Navbar />
      <MianBanner />
      <Blob right={true} text="REFLECTION" url="reflection" />
    </main>
  );
}
