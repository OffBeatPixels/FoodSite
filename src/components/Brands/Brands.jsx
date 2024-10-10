// import React from "react";
// import Company1 from "../../assets/food/Brand_1.jpg";
// import Company2 from "../../assets/food/Brand_2.jpg";
// import Company3 from "../../assets/food/Brand_3.jpg";
// import Company4 from "../../assets/food/Brand_4.jpg";
// import { delay, motion } from "framer-motion";
// import { SlideUp } from "../Hero/Hero";

// const BrandsData = [
//   {
//     id: 1,
//     name: "Chimes Café ",
//     img: Company1,
//     // price: "$10",
//     description:
//       "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army, the restaurants are a fusion of fine dining and a café. ",
//     delay: 0.4,
//   },
//   {
//     id: 2,
//     name: "Drool Ah ",
//     img: Company2,
//     description:
//       " Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
//     // price: "$5",
//     delay: 0.8,
//   },
//   {
//     id: 3,
//     name: "Ace Caterers ",
//     img: Company3,
//     description:
//       "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
//     // price: "$8",
//     delay: 1.2,
//   },
//   {
//     id: 4,
//     name: "Passiflora Foods & Services LLP ",
//     img: Company4,
//     description:
//       "Passiflora Foods & Services LLP is the brand under which events are taken up – corporate, weddings, get-togethers etc. ",
//     // price: "$8",
//     delay: 1.2,
//   },
// ];

// const Brands = () => {
//   return (
//     <section>
//       <div className="container py-10">
//         {/* Heading Section */}
//         <motion.h3
//           variants={SlideUp(0)}
//           initial="hidden"
//           whileInView="show"
//           className="text-2xl font-semibold text-darkGreen uppercase py-8"
//         >
//           Brands
//         </motion.h3>

//         {/* Grid Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
//           {BrandsData.map((item) => {
//             return (
//               <motion.div
//                 variants={SlideUp(item.delay)}
//                 initial="hidden"
//                 whileInView="show"
//                 className="group bg-white/50 shadow-md p-3 flex items-center gap-5"
//               >
//                 <img
//                   src={item.img}
//                   alt="Image"
//                   className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700
//                   "
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                   <h3 className="text-xl text-yellow-500">{item.price}</h3>
//                   <p>{item.description}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

// import React from "react";
// import Company1 from "../../assets/food/Brand_1.jpg";
// import Company2 from "../../assets/food/Brand_2.jpg";
// import Company3 from "../../assets/food/Brand_3.jpg";
// import Company4 from "../../assets/food/Brand_4.jpg";
// import { delay, motion } from "framer-motion";
// import { SlideUp } from "../Hero/Hero";

// const BrandsData = [
//   {
//     id: 1,
//     name: "Chimes Café ",
//     img: Company1,
//     // price: "$10",
//     description:
//       "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army, the restaurants are a fusion of fine dining and a café. ",
//     delay: 0.4,
//   },
//   {
//     id: 2,
//     name: "Drool Ah ",
//     img: Company2,
//     description:
//       " Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
//     // price: "$5",
//     delay: 0.8,
//   },
//   {
//     id: 3,
//     name: "Ace Caterers ",
//     img: Company3,
//     description:
//       "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
//     // price: "$8",
//     delay: 1.2,
//   },
//   {
//     id: 4,
//     name: "Passiflora Foods & Services LLP ",
//     img: Company4,
//     description:
//       "Passiflora Foods & Services LLP is the brand under which events are taken up – corporate, weddings, get-togethers etc. ",
//     // price: "$8",
//     delay: 1.2,
//   },
// ];

// const Brands = () => {
//   return (
//     <section>
//       <div className="container py-10">
//         {/* Heading Section */}
//         <motion.h3
//           variants={SlideUp(0)}
//           initial="hidden"
//           whileInView="show"
//           className="text-2xl font-semibold text-darkGreen uppercase py-8"
//         >
//           Brands
//         </motion.h3>

//         {/* Grid Section */}
//         <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-5 mx-auto justify-items-center ">
//           {BrandsData.map((item) => {
//             return (
//               <motion.div
//                 variants={SlideUp(item.delay)}
//                 initial="hidden"
//                 whileInView="show"
//                 className="group bg-white/50 shadow-md  ml-20  p-3 w-[50%] "
//               >
//                 <img
//                   src={item.img}
//                   alt="Image"
//                   className="w-36 rounded-full m-auto img-shadow group-hover:scale-125 transition-all duration-700
//                   "
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                   <h3 className="text-xl text-yellow-500">{item.price}</h3>
//                   <p>{item.description}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

import React from "react";
import Company1 from "../../assets/food/Brand_1.jpg";
import Company2 from "../../assets/food/Brand_2.jpg";
import Company3 from "../../assets/food/Brand_3.jpg";
import Company4 from "../../assets/food/Brand_4.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const BrandsData = [
  {
    id: 1,
    name: "Chimes Café ",
    img: Company1,
    description:
      "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army, the restaurants are a fusion of fine dining and a café. ",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Drool Ah ",
    img: Company2,
    description:
      "Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Ace Caterers ",
    img: Company3,
    description:
      "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
    delay: 1.2,
  },
  {
    id: 4,
    name: "Passiflora Foods & Services LLP ",
    img: Company4,
    description:
      "Passiflora Foods & Services LLP is the brand under which events are taken up – corporate, weddings, get-togethers etc. ",
    delay: 1.2,
  },
];

const Brands = () => {
  return (
    <section>
      <div className="container py-10">
        {/* Heading Section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8 text-center"
        >
          Brands
        </motion.h3>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mx-auto justify-items-center">
          {BrandsData.map((item) => {
            return (
              <motion.div
                key={item.id} // Add a key here for React's map iteration
                variants={SlideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                className="group bg-white/50 shadow-md p-5 w-full max-w-xs rounded-xl text-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-36  rounded-full m-auto img-shadow group-hover:scale-125 transition-all duration-700"
                />
                <div>
                  <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
