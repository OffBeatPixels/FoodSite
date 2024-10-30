import React from "react";
import Service1 from "/src/assets/food/service_1.webp";
import Service2 from "/src/assets/food/service_2.webp";
import Service3 from "/src/assets/food/service_3.webp";
import Service4 from "/src/assets/food/service_4.webp";
import OperationsPage1 from "/src/assets/food/Service_page-1.webp";
import { motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
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
      <ol className="p-2">
        <p>
          At Ace Caterers, we specialize in providing high-quality catering
          Operations tailored to the needs of industrial and institutional
          clients. Our catering is all about convenience, cleanliness, and
          customization. Our service is designed to meet the unique requirements
          of large-scale operations. Our focus is aimed at taking over your
          concern about the canteen Operations from DAY 1 bringing about a
          visible change in it and leaving you free to concentrate on your
          production operations and needs.
        </p>
        <p>From factories to educational institutions, we offer:</p>

        <li>
          <strong>• Nutritious Meal Plans:</strong> Catering that focuses on
          health and energy, keeping your workplace productive.
        </li>

        <li>
          <strong>• Hygienic Food Preparation:</strong> Strictly adhere to the
          safety and hygiene protocols.
        </li>

        <li>
          <strong>• Timely Service:</strong> Meals are delivered on time to
          ensure smooth operations.
        </li>

        <li>
          <strong>• Customized Solutions:</strong> We can adapt our meal plans
          based on the dietary needs and preferences of your team or institution
        </li>

        <li>
          <strong>• Our Esteemed Clients :</strong> Dell, Philips, Lupin,
          Crompton and Greaves, Proctor & Gamble (P&G), Mahindra Tractors
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    name: "Outdoor Catering",
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
  },
  {
    id: 3,
    name: "Club Operations",

    img: Service3,
    // delay: 0.3,
    description: (
      <ol className="p-5">
        <p>
          For over six years, Magnet Foods has managed exclusive clubs,
          including those for guests, offering top-notch service and
          unforgettable experiences. Our club operations which include golf
          clubs or social clubs’ Operations, are designed to enhance member
          experience by improving quality of food and Operations as well as
          managing of special dinners, parties etc. in excellent manner.
        </p>

        <li>
          <strong>• Tailored Catering Operations: </strong>We offer catering
          that matches the ambience of private clubs.
        </li>

        <li>
          <strong>• Event Coordination: </strong> From golf tournaments to
          exclusive dinners, we ensure every event is memorable.
        </li>

        <li>
          <strong> • Seamless Operations: </strong>Our team handles everything
          from daily club management to special events, ensuring a refined
          experience for all members.
        </li>

        <li>
          <strong>• Experienced Staff: </strong> With a dedicated team
          accustomed to serving army personnel, we bring discipline and
          professionalism to every operation.
        </li>
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
        <p>
          With Magnet Foods, you’re not just getting a service—you’re getting a
          trusted partner committed to delivering excellence. Whether it’s
          industrial catering or enhancing your property’s performance, we’re
          here to make every experience exceptional.
        </p>
      </ol>
    ),
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
    <section className=" text-[#181919]">
      <motion.h3
        variants={SlideUp(0)}
        initial="hidden"
        whileInView="show"
        className=" h-[60vh]  relative "
        style={{
          background: `url(${OperationsPage1}) center/contain no-repeat`,
          backgroundSize: "cover",
        }}
      ></motion.h3>

      {/* <div
        style={{
          background:
            'url("https://media.istockphoto.com/id/513694258/photo/medium-golden-brown-wood-texture-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=NsoyhM8kapAlXRAYo5Bsj7MJxnr6DpwywC8_8tZlsM4=")no-repeat center/cover',
           
          minHeight: "30vh",
          width: "100vw",
        }}
      ></div> */}
      <div className=" mx-auto w-[90%]  px-5">
        {OperationsData.map((item, i) => (
          <OperationsAnimation
            key={i}
            name={item.name}
            text={item.description}
            index={i}
            image={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default OperationsPage;
