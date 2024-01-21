import ServiceCard from "../models/card";

// Mock static
import search from "/pages/homepage/services/images/ic_search.svg";
import pharmacy from "/pages/homepage/services/images/ic_pharmacy.svg";
import consultation from "/pages/homepage/services/images/ic_consultation.svg";
import details from "/pages/homepage/services/images/ic_details.svg";
import emergency from "/pages/homepage/services/images/ic_emergency.svg";
import tracking from "/pages/homepage/services/images/ic_tracking.svg";

const mockServiceCards: ServiceCard[] = [
  {
    image: search,
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    image: pharmacy,
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    image: consultation,
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image: details,
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image: emergency,
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    image: tracking,
    title: "Tracking",
    description: "Track and save your medical history and health data ",
  },
];

function listAll(): Iterable<ServiceCard> {
  return mockServiceCards;
}

export default { listAll };
