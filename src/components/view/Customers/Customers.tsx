import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "../../custom/Box/Box";
import Section from "../../custom/Section/Section";
import { customers, responsive } from "./data";
import "./styles.css";

const Customers: React.FC = () => {
  const displayCarousel = () => {
    return (
      <Carousel
        ssr={false}
        swipeable={true}
        showDots={false}
        infinite={true}
        responsive={responsive}
        arrows={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        className="slider"
        keyBoardControl={true}
      >
        {customers.map((customer) => (
          <Box
            img={customer.img}
            alt={customer.alt}
            title={customer.title}
            subText={customer.subText}
            top={0}
            bottom={0}
            imgHeight={"64px"}
            imgWidth={"252px"}
          />
        ))}
      </Carousel>
    );
  };

  return (
    <div>
      <Section
        title="Setting the standard for Salesforce DevOps"
        subText="Founded in 2015 by DevOps experts, Gearset is designed to help every Salesforce team apply DevOps best practices to their development and release process."
        btnText="Learn More"
        btnBgColor="#161D5B"
        btnTextColor="#FFFFFF"
        btnWidth={233}
        btnHeight={56}
        width={"100%"}
        child={displayCarousel()}
      />
    </div>
  );
};

export default Customers;
