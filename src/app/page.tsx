import BottomInvitationSection from "@/components/Home/BottomInvitationSection";
import CosmeticSection from "@/components/Home/CosmeticsSection";
import HeroSection from "@/components/Home/HeroSection";
import SecondarySection from "@/components/Home/SecondarySection";
import TeamMember from "@/components/Home/TeamMember";
import TechnologySection from "@/components/Home/TechnologySection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <SecondarySection />
      <TechnologySection />
      <BottomInvitationSection />
      <CosmeticSection />
      <TeamMember />
    </div>
  );
}
