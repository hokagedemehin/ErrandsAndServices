import Head from "next/head";
import { About } from "../src/components/About/about.component";
import { Hero } from "../src/components/Hero/hero.component";
import { Layout } from "../src/Layout/layout.component";

export default function Home() {
  return (
    <Layout className="" name="Home">
      <Hero />
      <About />
    </Layout>
  );
}
