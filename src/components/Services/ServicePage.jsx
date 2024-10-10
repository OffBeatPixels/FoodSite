import React from "react";
import Service1 from "../../assets/food/service_1.png";
import Service2 from "../../assets/food/service_2.png";
import Service3 from "../../assets/food/service_3.png";
import Service4 from "../../assets/food/service_4.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ServicesData = [
  {
    id: 1,
    name: " Industrial / Institutional Catering",
    img: Service1,
    // delay: 0.1,
    description: (
      <ol className="p-5">
        <p>
          At Ace Caterers, we specialize in providing high-quality catering
          services tailored to the needs of industrial and institutional
          clients. Our catering is all about convenience, cleanliness, and
          customization. Our service is designed to meet the unique requirements
          of large-scale operations. Our focus is aimed at taking over your
          concern about the canteen services from DAY 1 bringing about a visible
          change in it and leaving you free to concentrate on your production
          operations and needs.
        </p>
        <p>From factories to educational institutions, we offer:</p>
        <br />

        <li>
          <strong>• Nutritious Meal Plans:</strong> Catering that focuses on
          health and energy, keeping your workplace productive.
        </li>
        <br />
        <li>
          <strong>• Hygienic Food Preparation:</strong> Strictly adhere to the
          safety and hygiene protocols.
        </li>
        <br />
        <li>
          <strong>• Timely Service:</strong> Meals are delivered on time to
          ensure smooth operations.
        </li>
        <br />
        <li>
          <strong>• Customized Solutions:</strong> We can adapt our meal plans
          based on the dietary needs and preferences of your team or institution
        </li>
        <br />
        <li>
          <strong>• Our Esteemed Clients :</strong> Dell, Philips, Lupin,
          Crompton and Greaves, Proctor & Gamble (P&G), Mahindra Tractors
        </li>
        <br />
      </ol>
    ),
  },
  {
    id: 2,
    name: "Outdoor Catering in",
    img: Service2,
    // delay: 0.2,
    description: (
      <ol className="p-5">
        <p>
          Life is full of big and small happenings which prompt us to celebrate
          with friends and relatives to share our joy and happiness. Keeping
          this in mind we are forever ready to help you with all your needs and
          requirements to make your special day even more special by making
          elaborate arrangements for enjoyment without any hassle over the
          intricacies of organising a party.
        </p>
        <p>We provide:</p>
        <br />

        <li>
          <strong>• Customized Menus:</strong> Designed to fit the theme,
          dietary requirements, and size of your event.
        </li>
        <br />
        <li>
          <strong>• On-Site Cooking & Service: </strong> Our team manages the
          entire catering process on location, ensuring freshness and quality.
        </li>
        <br />
        <li>
          <strong> • Attention to Detail: </strong> From elegant setups to
          professional service staff, we ensure a seamless experience for you
          and your guests.
        </li>
        <br />
        <li>
          <strong>• Wide Range of Events: </strong> We cater to weddings,
          corporate parties, family gatherings, and large social events,
          offering the same high standard of service regardless of the occasion.
        </li>
        <br />
      </ol>
    ),
  },
  {
    id: 3,
    name: (
      <p>
        {" "}
        <br />
        Club Operations (Golf Clubs, Private Clubs)
      </p>
    ),
    img: Service3,
    // delay: 0.3,
    description: (
      <ol className="p-5">
        <p>
          For over six years, Magnet Foods has managed exclusive clubs,
          including those for guests, offering top-notch service and
          unforgettable experiences. Our club operations which include golf
          clubs or social clubs’ services, are designed to enhance member
          experience by improving quality of food and services as well as
          managing of special dinners, parties etc. in excellent manner.
        </p>

        <br />

        <li>
          <strong>• Tailored Catering Services: </strong>We offer catering that
          matches the ambience of private clubs.
        </li>
        <br />
        <li>
          <strong>• Event Coordination: </strong> From golf tournaments to
          exclusive dinners, we ensure every event is memorable.
        </li>
        <br />
        <li>
          <strong> • Seamless Operations: </strong>Our team handles everything
          from daily club management to special events, ensuring a refined
          experience for all members.
        </li>
        <br />
        <li>
          <strong>• Experienced Staff: </strong> With a dedicated team
          accustomed to serving army personnel, we bring discipline and
          professionalism to every operation.
        </li>
        <br />
      </ol>
    ),
  },
  {
    id: 4,
    name: "Operations & Maintenance",
    img: Service4,
    // delay: 0.4,
    description: (
      <ol className="p-5">
        <p>
          If your property, whether it’s a club, restaurant, or event venue,
          isn’t delivering the returns you expected, Magnet Foods can help. Our
          Operations & Maintenance service focuses on maximizing efficiency,
          improving guest experiences, and optimizing revenue generation by
          taking over operations and executing it through our team of
          professionals who specialize in turning around any such struggling
          property.
        </p>

        <br />

        <li>
          <strong>• Revenue Optimization:</strong>We evaluate your current
          operations and introduce strategies that increase revenue and
          profitability.
        </li>
        <br />
        <li>
          <strong>• Property Management: </strong> From maintenance to
          day-to-day operations, we ensure that your property runs smoothly and
          efficiently.
        </li>
        <br />
        <li>
          <strong> • Expert Consultation: </strong>Our team of experts offers
          tailored advice to help you overcome operational challenges and unlock
          your property's full potential.
        </li>
        <br />
        <li>
          <strong>• End-to-End Solutions: </strong> Whether it’s revamping your
          service model or handling complete property management, we take care
          of everything to ensure sustainable growth.
        </li>
        <p>
          With Magnet Foods, you’re not just getting a service—you’re getting a
          trusted partner committed to delivering excellence. Whether it’s
          industrial catering or enhancing your property’s performance, we’re
          here to make every experience exceptional.
        </p>
        <br />
      </ol>
    ),
  },
];


const ServicePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section>
      <div className="container">
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
        >
          Services
        </motion.h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
          {ServicesData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideUp(item.delay)}
              whileInView="show"
              id={`service${item.id}`} // Add the corresponding id for hash navigation
              className="group bg-white/50 shadow-md p-3 rounded-md gap-5"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-72 mx-auto rounded-xl img-shadow group-hover:scale-110 transition-all duration-500"
              />
              <div>
                <h3 className="text-xl font-semibold mt-5 text-center">
                  {item.name}
                </h3>
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
