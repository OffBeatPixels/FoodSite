import React from "react";
import Service1 from "/src/assets/food/service_1.png";
import Service2 from "/src/assets/food/service_2.png";
import Service3 from "/src/assets/food/service_3.png";
import Service4 from "/src/assets/food/service_4.png";
import { motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
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
];

const ExplorePage = () => {
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
          Event-Booking
        </motion.h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
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

export default ExplorePage;
