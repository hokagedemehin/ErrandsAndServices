import Head from "next/head";
import { About } from "../src/components/About/about.component";
import { Hero } from "../src/components/Hero/hero.component";
import ProfileSection from "../src/components/Profiles/profiles.section.components";
import ServicesSection from "../src/components/Services/services.section.component";
import { Layout } from "../src/Layout/layout.component";

export default function Home() {
  return (
    <Layout className="" name="Home">
      <Hero />
      <About />
      <ServicesSection />
      <ProfileSection />
    </Layout>
  );
}
