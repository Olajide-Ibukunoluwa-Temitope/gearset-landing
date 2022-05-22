import intercom from "../../../assets/images/logos/intercom.svg";
import veolia from "../../../assets/images/logos/veolia.svg";
import zillow from "../../../assets/images/logos/zillow.svg";
import mckesson from "../../../assets/images/logos/mckesson.svg";
import landg from "../../../assets/images/logos/landg.svg";
import xometry from "../../../assets/images/logos/xometry.svg";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 851 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

export const customers = [
  {
    img: intercom,
    alt: "intercom",
    title: "Intercom",
    subText:
      "Intercom built a reliable Salesforce DevOps process using Gearset and now releases 3-4 times a day",
  },
  {
    img: veolia,
    alt: "veolia",
    title: "Veolia",
    subText:
      "Dramatic DevOps improvements help Veolia UK & IRE to deliver massive Salesforce ROI",
  },
  {
    img: zillow,
    alt: "zillowr",
    title: "Zillow",
    subText:
      "Real estate portal Zillow adopted Gearset to speed up deployment times and streamline its releases",
  },
  {
    img: mckesson,
    alt: "mcKesson",
    title: "McKesson",
    subText:
      "McKesson uses Gearset to push automated changes to production multiple times a week",
  },
  {
    img: landg,
    alt: "legal and general america",
    title: "Legal & General America",
    subText:
      "Gearset provides Legal & General America with certainty for future success",
  },
  {
    img: xometry,
    alt: "xometry",
    title: "Xometry",
    subText:
      "Xometry built a modern CI/CD pipeline for Salesforce using Gearset",
  },
];
