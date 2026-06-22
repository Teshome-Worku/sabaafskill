import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { WhySabaafSection } from "@/components/sections/WhySabaafSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ClassroomSection } from "@/components/sections/ClassroomSection";
import { StudentSuccessSection } from "@/components/sections/StudentSuccessSection";
import { GraduationSection } from "@/components/sections/GraduationSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { RegistrationCTASection } from "@/components/sections/RegistrationCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ToolsSection />
      <WhySabaafSection />
      <CoursesSection />
      <ClassroomSection />
      <StudentSuccessSection />
      <GraduationSection />
      <FounderSection />
      <RegistrationCTASection />
    </>
  );
}
