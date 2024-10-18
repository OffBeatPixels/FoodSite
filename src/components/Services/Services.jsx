import React from "react";
import Service1 from "/src/assets/food/MGF-1.jpg";
import Service2 from "/src/assets/food/MGF-2.jpg";
import Service3 from "/src/assets/food/MGF-3.jpg";
import Service4 from "/src/assets/food/MGF-4.webp";
import { delay, motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
import { Link } from "react-router-dom";
import Divider from "/src/components/Divider/Divider";
import shape from "/src/assets/food/shape.svg";

const ServicesData = [
  {
    id: 1,
    name: "Industrial/Institutional Catering",
    img: Service1,
    // price: "$10",
    description:
      "At Ace Caterers,We specialize in providing high-quality catering... ",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Outdoor Catering",
    img: Service2,
    description:
      "Life is full of big and small happenings which prompt us to celebrate...  ",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Club Operations",
    img: Service3,
    description:
      "For over six years, Magnet Foods has managed exclusive clubs... ",

    delay: 1,
  },
  {
    id: 4,
    name: "Operations & Maintenance",
    img: Service4,
    description:
      "If your property, whether it’s a club, restaurant, or event venue... ",

    delay: 1.2,
  },
];

const Services = () => {
  return (
    <section
      className=" text-black  "
      style={{
        // background: `url("https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?cs=srgb&dl=pexels-goumbik-616401.jpg&fm=jpg") center/cover  no-repeat`,
        background: `url("https://img.freepik.com/free-psd/indian-food-illustration-isolated_23-2151851514.jpg?t=st=1728988377~exp=1728991977~hmac=d5c109f1e8567b92f6368302ba35a7b3fb0ecb276e84ac9828cba7b35e8e4bc0&w=996") center/cover no-repeat  `,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Added class for background */}
      <div className="container pb-14  ">
        {/* Heading Section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-3xl  font-bold text-black uppercase  py-8 text-center"
        >
          our Services
        </motion.h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {ServicesData.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={item.img}
                  alt="Image"
                  className="w-52 xl:w-56 aspect-square  group-hover:scale-90 overflow-hidden transition-all duration-500 mb-5 mt-5"
                />

                <div>
                  <h3 className="text-[13px] xl:text-[15px] font-semibold  ">
                    {item.name}
                  </h3>
                  {/* <h3 className="text-xl text-yellow-500">{item.price}</h3>*/}
                  <p className="text-sm m-5 ">{item.description}</p>
                  <Link
                    to={`/servicePage#service${item.id}`}
                    className="font-bold text-lg  text-orange-500 "
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
