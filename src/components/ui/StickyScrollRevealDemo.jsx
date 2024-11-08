"use client";
import {React,useEffect} from "react";
import { StickyScroll } from "./StickyScroll";
// import Image from "next/image";
import Service1 from "/src/assets/food/service_1.png";
import Service2 from "/src/assets/food/service_2.png";
import Service3 from "/src/assets/food/service_3.png";
import Service4 from "/src/assets/food/service_4.png";
import OperationsPage1 from "/src/assets/food/Service_page-1.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const content = [
  {
    id: 1,
    title: " Industrial / Institutional Catering",
    description: (
      <ol>
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
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Service1}
          loading="lazy"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Outdoor Catering",
    description: (
      <ol>
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
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Service2}
          loading="lazy"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Club Operations",
    description: (
      <ol>
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
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Service3}
          loading="lazy"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Operations & Maintenance",
    description: (
      <ol>
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
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Service4}
          loading="lazy"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
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
    <motion.div>
      <StickyScroll content={content} />
    </motion.div>
  );
}
