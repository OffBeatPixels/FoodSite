import React from "react";
import Service1 from "/src/assets/food/service_1.PNG";
import Service2 from "/src/assets/food/service_2.PNG";
import Service3 from "/src/assets/food/service_3.PNG";
import Service4 from "/src/assets/food/service_4.PNG";
import { motion } from "framer-motion";
import { SlideUp } from "../VideoAnimation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ExplorePageData = [
  {
    id: 1,
    name: " Industrial / Institutional Catering",
    img: Service1,
    // delay: 0.1,
    description: (
      <ol className="p-5">
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
];

const ExplorePage = () => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById("animationelement").classList.add("wiggle"); // Add the 'wiggle' class on page load
  }, []);

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
    <motion.section
    // initial={{ x: "-100%", opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // transition={{
    //   ease: "linear",
    //   duration: 1,
    //   x: { duration: 0.8 },
    // }}
    // exit={{ opacity: 0 }}
    >
      {/* <div className="container"> */}
      <div id="animationelement"></div>
      <div>
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-[40px] font-piston font-extrabold  uppercase text-center  bg-[#C27B30] py-8"
        >
          Explore
        </motion.h3>

        {/* Grid Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
          {ExplorePageData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideUp(item.delay)}
              whileInView="show"
              id={`explorePageExplorePage${item.id}`} // Add the corresponding id for hash navigation
              className="group bg-white/50 shadow-md p-3 rounded-md gap-5"
            
            >
              <img
                src={item.img}
                alt={item.name}
                 loading="lazy"
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
        </div> */}
        {/* <div className="container">
          <div className="w-full" >
            <div className="w-full pt-14">
              <img src={Service1} alt="Industrial Catering" />
            </div>
             loading="lazy"<div cl
            assName="w-[50%]">
              <h1 className="text-2xl font-bold pb-5">Industrial Catering</h1>
              <p>
                At Ace Caterers, we specialize in providing high-quality
                catering Operations tailored to the needs of industrial and
                institutional clients. Our catering is all about convenience,
                cleanliness, and customization. Our service is designed to meet
                the unique requirements of large-scale operations. Our focus is
                aimed at taking over your concern about the canteen Operations
                from DAY 1 bringing about a visible change in it and leaving
                you free to concentrate on your production operations and needs.
              </p>
            </div>
          </div>
        </div> */}

        {/* Mahogany Farms */}
        <div className="text-center  p-5 ">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
              alt="Mahogany Farms"
              loading="lazy"
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute  w-[55%] md:top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/4 bg-black text-white p-5 text-center">
              <h2 className=" text-xl text-white md:text-2xl font-bold">
                Mahogany Farms
              </h2>
              <p className="my-2 ">
                Welcome to our farmstay, where you can relax, rejuvenate, and
                simply have fun. Immerse yourself in the beauty of nature, enjoy
                fresh air, and experience the joys of farm life. Whether you're
                looking to unwind or engage in exciting activities, our farmstay
                offers the perfect escape for everyone. Come and create
                unforgettable memories with us!
              </p>
              <button className="bg-yellow-400 px-4 py-2 mt-2 text-black font-medium">
                Book Now!
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 p-5">
          <img
            src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Interior 1"
            loading="lazy"
            className="w-full h-[40vh] object-cover"
          />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-2  h-[40vh]">
              <img
                src="https://i.pinimg.com/564x/00/be/ec/00beecc179d66bc585f496108907b26e.jpg"
                alt="Interior 2"
                loading="lazy"
                className="w-[65%] rounded object-cover"
              />
              <img
                src="https://i.pinimg.com/1200x/38/f3/9f/38f39f7c16d097417ece90e05654f4c9.jpg"
                alt="Interior 3"
                loading="lazy"
                className="w-[35%] rounded object-cover"
              />
            </div>
            <div className="flex gap-2 w-full h-[40vh]">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
                alt="Exterior 1"
                loading="lazy"
                className="w-[35%] rounded object-cover"
              />
              <img
                src="https://imgs.search.brave.com/YpA7994DFO_s-QyPXJXZuDZ8SxhBya30gOiqocT2EDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNWQzMC9lOTdh/LzI4NGQvZDEyNy85/MzAwLzAxNTQvbmV3/c2xldHRlci9hLTkz/LmpwZz8xNTYzNDg2/NTMw"
                alt="Exterior 2"
                loading="lazy"
                className="w-[65%] rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* Green Pasture */}

        <div className="text-center p-5">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/19003913/pexels-photo-19003913/free-photo-of-golfer-preparing-to-hit-ball.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Green Pasture"
              loading="lazy"
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute w-[55%] top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/4 bg-black text-white p-5 text-center">
              <h2 className="text-2xl text-white font-bold">Green Pasture</h2>
              <p className="my-2">
                Welcome to our farmstay, where you can relax, rejuvenate, and
                simply have fun. Immerse yourself in the beauty of nature, enjoy
                fresh air, and experience the joys of farm life. Whether you're
                looking to unwind or engage in exciting activities, our farmstay
                offers the perfect escape for everyone. Come and create
                unforgettable memories with us!
              </p>
              <button className="bg-yellow-400 px-4 py-2 mt-2 text-black font-medium">
                Book Now!
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 p-8">
          <img
            src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Interior 1"
            loading="lazy"
            className="w-full h-[40vh] object-cover"
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2  h-[40vh]">
              <img
                src="https://imgs.search.brave.com/pKZ42h_XVHls3Np0WElO1UU6k2iJeOTdv1rJ-kPEzfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzc0LzkyLzEx/LzM2MF9GXzk3NDky/MTExNF9BQ0ZnZG9r/ZDZaaEM2eks4RExH/SjJkRkxhb05KMlN6/YS5qcGc"
                alt="Interior 2"
                loading="lazy"
                className="w-[65%] rounded object-cover"
              />
              <img
                src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Interior 3"
                loading="lazy"
                className="w-[35%] rounded object-cover"
              />
            </div>
            <div className="flex gap-2 w-full h-[40vh]">
              <img
                src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Exterior 1"
                loading="lazy"
                className="w-[35%] rounded object-cover"
              />
              <img
                src="https://imgs.search.brave.com/Clh6qoRY6C6foLgoeV45kpSlhB-AlThbToLKtFSao3E/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5r/ZXJhbGFob3VzZXBs/YW5uZXIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzA3/L2VsZXZhdGlvbi5q/cGc"
                alt="Exterior 2"
                loading="lazy"
                className="w-[65%] rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExplorePage;
