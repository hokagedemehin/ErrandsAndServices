import React from "react";
import ServicesAll from "../../src/components/Services/ServicePage/service.all.component";
import ServiceHero from "../../src/components/Services/ServicePage/service.hero";
import { Layout } from "../../src/Layout/layout.component";

const Services = () => {
  return (
    <Layout className="" name="Services">
      <div>
        <div className="">
          <ServiceHero />
          <ServicesAll />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
