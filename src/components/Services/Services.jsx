import React from "react";
import Service1 from "../../assets/food/service_1.png";
import Service2 from "../../assets/food/service_2.png";
import Service3 from "../../assets/food/service_3.png";
import Service4 from "../../assets/food/service_4.png";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";
import { Link } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    name: "Industrial/Institutional Catering",
    img: Service1,
    // price: "$10",
    description:
      "At Ace Caterers, we specialize in providing high-quality catering services tailored to the needs of industrial and institutional clients... ",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Outdoor Catering in ",
    img: Service2,
    description:
      "Life is full of big and small happenings which prompt us to celebrate with friends and relatives to share our joy and happiness...  ",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Club Operations (Golf Clubs, Private Clubs)",
    img: Service3,
    description:
      "For over six years, Magnet Foods has managed exclusive clubs, including those for guests offering top-notch service... ",

    delay: 1,
  },
  {
    id: 4,
    name: "Operations & Maintenance",
    img: Service4,
    description:
      "If your property, whether it’s a club, restaurant, or event venue, isn’t delivering the returns you expected, Magnet foods can help... ",

    delay: 1.2,
  },
];

const Services = () => {
  return (
    <section>
      <div className="container pb-14 ">
        {/* Heading Section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8 text-center"
        >
          Services
        </motion.h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
          {ServicesData.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className=" group gap-5 rounded-2xl"
              >
                <img
                  src={item.img}
                  alt="Image"
                  className="w-52 xl:w-56 rounded-xl img-shadow  group-hover:scale-90 overflow-hidden transition-all duration-500 mb-5 mt-5"
                />
                <div>
                  <h3 className="text-[13px] xl:text-[15px] font-semibold">
                    {item.name}
                  </h3>
                  {/* <h3 className="text-xl text-yellow-500">{item.price}</h3>*/}
                  <p className="text-sm">{item.description}</p>
                  <Link
                    to={`/servicePage#service${item.id}`}
                    className="bg-green-600 rounded-lg p-1"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
