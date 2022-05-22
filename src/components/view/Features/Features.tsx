import React from "react";
import Box from "../../custom/Box/Box";
import Section from "../../custom/Section/Section";
import { features } from "./data";

const Features: React.FC = () => {
  const displayFeatures = () => {
    return features.map(({ img, alt, title, subText }) => (
      <Box img={img} alt={alt} title={title} subText={subText} />
    ));
  };

  return (
    <Section
      title="Salesforce DevOps, solved"
      subText="You want to deliver changes to your Salesforce orgs faster while
           maintaining quality and security, but that's impossible without
           the right tools. The wrong tools can mean lots of stress and easy
           mistakes. Gearset makes Salesforce DevOps a breeze."
      child={displayFeatures()}
    />
  );
};

export default Features;
