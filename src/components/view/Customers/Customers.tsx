import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "../../custom/Box/Box";
import Section from "../../custom/Section/Section";
import { ButtonGroupProps, CustomersProps } from "./types";
import { customers, responsive } from "./data";
import nextIcon from "../../../assets/icons/next.svg";
import prevIcon from "../../../assets/icons/prev.svg";
import "./styles.css";

const Customers: React.FC<CustomersProps> = ({ onBtnClick }) => {
  const displayCarousel = () => {
    const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
      return (
        <div className="carousel_button_group">
          <div className={"prev"} onClick={() => previous?.()}>
            <img src={prevIcon} alt="previous" />
          </div>
          <div className={"next"} onClick={() => next?.()}>
            <img src={nextIcon} alt="next" />
          </div>
        </div>
      );
    };

    return (
      <Carousel
        ssr={false}
        swipeable={true}
        showDots={false}
        infinite={true}
        responsive={responsive}
        arrows={false}
        autoPlay={false}
        autoPlaySpeed={6000}
        className="slider"
        keyBoardControl={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {customers.map((customer, idx) => (
          <div className="carousel_box">
            <Box
              key={idx}
              img={customer.img}
              alt={customer.alt}
              title={customer.title}
              subText={customer.subText}
              top={0}
              bottom={0}
              imgHeight={"64px"}
              imgWidth={"252px"}
              padding="75px 0 69px"
            />
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="customers_section">
      <Section
        title="Setting the standard for Salesforce DevOps"
        subText="Founded in 2015 by DevOps experts, Gearset is designed to help every Salesforce team apply DevOps best practices to their development and release process."
        btnText="Learn More"
        onClick={onBtnClick}
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
