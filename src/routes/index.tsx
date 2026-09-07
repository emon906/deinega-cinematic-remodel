import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Reels } from "@/components/site/Reels";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Deinega Remodel | Luxury Home Remodeling in Seattle, WA";
const description =
  "Seattle design-build studio crafting premium kitchen, bathroom and whole-home renovations. Licensed, bonded and detail-obsessed.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <BeforeAfter />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
