import React from "react";
import Service1 from "/src/assets/food/service_1.png";
import Service2 from "/src/assets/food/service_2.png";
import Service3 from "/src/assets/food/service_3.png";
import Service4 from "/src/assets/food/service_4.png";
import OperationsPage1 from "/src/assets/food/Service_page-1.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import OperationsAnimation from "./OperationsAnimation";

const OperationsData = [
  {
    id: 1,
    name: " Industrial / Institutional Catering",
    img: Service1,
    // delay: 0.1,
    description: (
      <ol className="text-justify p-5 ">
        <p>
          At Ace Caterers, we specialize in providing high-quality catering
          operations tailored to the needs of industrial and institutional
          clients. Our catering is all about convenience, cleanliness, and
          customization. Our service is designed to meet the unique requirements
          of large-scale operations. Our focus is aimed at taking over your
          concern about the canteen operations from DAY 1, bringing about a
          visible change, and leaving you free to concentrate on your production
          operations and needs.
        </p>

        <p>From factories to educational institutions, we offer:</p>
        <br />

        <li>
          <strong>• Timely Service:</strong> Meals are delivered on time to
          ensure smooth operations.
        </li>

        <li>
          <strong>• Hygienic Food Preparation:</strong> Strictly adhere to the
          safety and hygiene protocols.
        </li>

        <li>
          <strong>• Nutritious Meal Plans:</strong> Catering that focuses on
          health and energy, keeping your workplace productive.
        </li>
        <li>
          <strong>• Our Esteemed Clients:</strong> Dell Philips LupinCrompton
          and Greaves,Proctor & Gamble(P&G) Mahindra Tractors.
        </li>

        <li>
          <strong>• Customized Solutions:</strong> We can adapt our meal plans
          based on the dietary needs and preferences of your team or
          institution.
        </li>
      </ol>
    ),
    backgroundColor: "#FAE2C9",
  },
  {
    id: 2,
    name: "Outdoor Catering",
    img: Service2,
    // delay: 0.2,
    description: (
      <ol className="text-justify p-5 ">
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

        <li>
          <strong>• On-Site Cooking & Service: </strong> Our team manages the
          entire catering process on location, ensuring freshness and quality.
        </li>

        <li>
          <strong> • Attention to Detail: </strong> From elegant setups to
          professional service staff, we ensure a seamless experience for you
          and your guests.
        </li>

        <li>
          <strong>• Wide Range of Events: </strong> We cater to weddings,
          corporate parties, family gatherings, and large social events,
          offering the same high standard of service regardless of the occasion.
        </li>
      </ol>
    ),
    backgroundColor: "#E7E8EA",
  },
  {
    id: 3,
    name: "Club Operations",

    img: Service3,
    // delay: 0.3,
    description: (
      <ol className="p-5 text-justify">
        <p>
          For over six years, Magnet Foods has managed exclusive clubs,
          including those for guests, offering top-notch service and
          unforgettable experiences. Our club operations which include golf
          clubs or social clubs’ Operations, are designed to enhance member
          experience by improving quality of food and Operations as well as
          managing of special dinners, parties etc. in excellent manner.
        </p>
        <br />

        <li>
          <strong>• Tailored Catering Operations: </strong>We offer catering
          that matches the ambience of private clubs.
        </li>

        <li>
          <strong>• Event Coordination:</strong> From golf tournaments to
          exclusive dinners, we ensure every event is memorable.
        </li>

        <li>
          <strong>• Experienced Staff: </strong> With a dedicated team
          accustomed to serving army personnel, we bring discipline and
          professionalism to every operation.
        </li>
        <li>
          <strong> • Seamless Operations: </strong>Our team handles everything
          from daily club management to special events, ensuring a refined
          experience for all members.
        </li>
      </ol>
    ),
    backgroundColor: "#FAE2C9",
  },
  {
    id: 4,
    name: "Operations & Maintenance (O&M)",
    img: Service4,
    // delay: 0.4,
    description: (
      <ol className="p-5 text-justify">
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

        <li>
          <strong>• Property Management: </strong> From maintenance to
          day-to-day operations, we ensure that your property runs smoothly and
          efficiently.
        </li>

        <li>
          <strong> • Expert Consultation: </strong>Our team of experts offers
          tailored advice to help you overcome operational challenges and unlock
          your property's full potential.
        </li>

        <li>
          <strong>• End-to-End Solutions: </strong> Whether it’s revamping your
          service model or handling complete property management, we take care
          of everything to ensure sustainable growth.
        </li>
        <br />
        <p>
          With Magnet Foods, you’re not just getting a service—you’re getting a
          trusted partner committed to delivering excellence. Whether it’s
          industrial catering or enhancing your property’s performance, we’re
          here to make every experience exceptional.
        </p>
      </ol>
    ),
    backgroundColor: "#E7E8EA",
  },
];

const OperationsPage = () => {
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
    <section className="text-[#181919] pb-20">
      {/* Hero Section */}
      <h3
        className="relative h-[20vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${OperationsPage1})`,
        }}
      ></h3>

      {/* Operations Data Section */}
      <div className="mx-auto w-[90%] md:w-[80%] px-4 md:px-8 lg:px-12">
        {OperationsData.map((item, i) => (
          <div
            key={i}
            id={`service${item.id}`}
            style={{ backgroundColor: item.backgroundColor }}
            className="py-6 md:py-10 my-4 md:my-6 rounded-lg"
          >
            <OperationsAnimation
              name={item.name}
              text={item.description}
              index={i}
              image={item.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationsPage;