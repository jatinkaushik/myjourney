import Hero from "@/app/components/design/hero";
import About from "@/app/components/design/about";
import Skills from "@/app/components/design/skills";
import Footer from "@/app/components/design/footer";
import Experience from "@/app/components/design/experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
