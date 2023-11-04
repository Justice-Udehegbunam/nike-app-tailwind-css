import { services } from "../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.key} {...service} />
      ))}
    </section>
  );
};

export default Services;
