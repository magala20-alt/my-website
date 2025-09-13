
import Intro from "./Introduction/page";
import Navigation from "./Navigation/page";
import ProjectsSection from "./Projects/page";
import ContactSection from "./ContactSection/page";

export default function Home() {
  return (
    <>
      <Navigation />
      <Intro />
      <ProjectsSection/>
      <ContactSection/>
    </>
  );
}
