import React from "react";
import Service1 from "/src/assets/food/MGF-1.webp";
import Service2 from "/src/assets/food/MGF-2.webp";
import Service3 from "/src/assets/food/MGF-3.webp";
import Service4 from "/src/assets/food/MGF-4.webp";
import { delay, motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
import { Link } from "react-router-dom";
import Divider from "/src/components/Divider/Divider";
import shape from "/src/assets/food/shape.svg";
import { useInView } from "react-intersection-observer";

const OperationsData = [
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
    delay: 0.6,
  },
  {
    id: 3,
    name: "Club Operations",
    img: Service3,
    description:
      "For over six years, Magnet Foods has managed exclusive clubs... ",

    delay: 0.8,
  },
  {
    id: 4,
    name: "Operations & Maintenance",
    img: Service4,
    description:
      "If your property, whether it’s a club, restaurant, or event venue... ",

    delay: 1,
  },
];

const Operations = () => {
  return (
    <section
      className=" text-black  "
      style={{
        // background: `url("https://images.pexels.com/photos/616401/pexels-photo-616401.webp?cs=srgb&dl=pexels-goumbik-616401.webp&fm=jpg") center/cover  no-repeat`,
        background: `url("https://img.freepik.com/free-psd/indian-food-illustration-isolated_23-2151851514.jpg?t=st=1728988377~exp=1728991977~hmac=d5c109f1e8567b92f6368302ba35a7b3fb0ecb276e84ac9828cba7b35e8e4bc0&w=996") center/cover no-repeat `,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Added class for background */}
      <div className="container pb-14  ">
        {/* Section */}

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {OperationsData.map((item) => {
            return (
              <motion.div
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
              >
                <img
                  src={item.img}
                  alt="Image"
                  className="w-52 xl:w-56 aspect-square overflow-hidden transition-all duration-500 m-auto transform hover:scale-90"
                />

                <div>
                  <h3 className="text-[10px] xl:text-[15px]  text-center  ">
                    {item.name}
                  </h3>
                  {/* <h3 className="text-xl text-yellow-500">{item.price}</h3>*/}
                  <p className=" m-5 ">{item.description}</p>
                  <Link
                    to={`/OperationsPage#service${item.id}`}
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

export default Operations;
