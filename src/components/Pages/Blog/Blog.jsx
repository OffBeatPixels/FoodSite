import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../VideoAnimation";
import Popup from "/src/components/Pages/Blog/PopUp";
import Blog1_1 from "/src/assets/food/Blog_1_1.webp";
import Blog1_2 from "/src/assets/food/Blog_1_2.webp";
import Blog1_3 from "/src/assets/food/Blog_1_3.webp";
import Blog1_4 from "/src/assets/food/Blog_1_4.webp";
import Blog1_5 from "/src/assets/food/Blog_1_5.webp";
import Blog1_6 from "/src/assets/food/Blog_1_6.webp";
import Blog2_1 from "/src/assets/food/Blog_2_1.webp";
import Blog2_2 from "/src/assets/food/Blog_2_2.webp";
import Blog2_3 from "/src/assets/food/Blog_2_3.webp";
import Blog2_4 from "/src/assets/food/Blog_2_4.webp";
import Blog3_1 from "/src/assets/food/Blog_3_1.webp";
import Blog3_2 from "/src/assets/food/Blog_3_2.webp";

const BlogData = [
  {
    id: 1,
    name: "Themes to Make Your Next Event Unforgettable",
    img: Blog1_4,
    // descriptoin: "short description here",
    delay: 0.4,
    text: {
      title: "Themes to Make Your Next Event Unforgettable",
      sections: [
        {
          content: (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p>
                Corporate events or social events are essential for fostering
                team spirit, networking, and celebrating milestones. But to
                truly stand out and leave a lasting impression, it's crucial to
                infuse creativity and innovation into your event planning
                process. One effective way to do this is by choosing a unique
                theme that resonates with your company culture and objectives.
                In this blog post, we'll explore 10 distinct themes guaranteed
                to make your next corporate event an unforgettable success.
              </p>
              <br />
              <h1 className="text-xl font-bold">1. Retro</h1>
              <br />

              <img
                className="block w-[400px] mx-auto"
                src={Blog1_1}
                alt="Image of Retro Event"
              />
              <p>
                Take your guests back in time with a retro-themed event. Whether
                it's the swinging 60s, disco fever of the 70s, or neon-soaked
                80s, embracing nostalgia adds a fun and lighthearted atmosphere
                to your gathering. Encourage attendees to dress in period
                attire, decorate with vintage props, and groove to classic tunes
                for a truly memorable experience.
              </p>
              <br />
              <h1 className="text-xl font-bold">2. Around the World</h1>
              <br />

              <img
                className="block w-[400px] mx-auto"
                src={Blog1_2}
                alt="Around the World"
              />
              <p>
                Bring the global experience to your event by showcasing
                different cultures from around the world. Set up themed stations
                representing various countries, each offering authentic cuisine,
                music, and activities. Guests can embark on a culinary journey
                or participate in cultural workshops, fostering diversity and
                appreciation among attendees.
              </p>
              <br />
              <h1 className="text-xl font-bold">3. Masquerade Ball</h1>
              <br />

              <img
                className="block w-[400px] mx-auto"
                src={Blog1_3}
                alt="Masquerade Ball"
              />
              <p>
                Add an air of mystery and elegance to your corporate event with
                a masquerade ball theme. Encourage guests to wear masks and
                glamorous attire as they mingle and dance the night away.
                Incorporate opulent decor, live entertainment, and themed
                cocktails to create an enchanting atmosphere reminiscent of a
                fascinating evening.
              </p>
              <br />

              <h1 className="text-xl font-bold">4. Fantasy Island </h1>
              <br />

              <img
                className="block w-[400px] mx-auto"
                src={Blog1_4}
                alt="Fantasy Island "
              />
              <p>
                Escape reality and indulge in a whimsical fantasy-themed event.
                Transform your venue into an enchanted island paradise complete
                with lush foliage, mystical creatures, and ethereal lighting.
                From fairy tale forests to mystical underwater realms, the
                possibilities are endless for creating a magical experience that
                captivates the imagination.
              </p>
              <br />
              <h1 className="text-xl font-bold">5. HOLLYWOOD GLAMOUR </h1>
              <br />

              <img
                className="block w-[400px] mx-auto"
                src={Blog1_5}
                alt="HOLLYWOOD GLAMOUR "
              />
              <p>
                Roll out the red carpet and embrace the glitz and glamour of
                Hollywood for your event. Channel the golden age of cinema with
                elegant decor, paparazzi photo ops, and VIP lounge areas. Guests
                will feel like A-list celebrities as they mingle amidst the
                luxury and sophistication of glamour town.
              </p>
              <br />
              <h1 className="text-xl font-bold">6. ENCHANTED GARDEN </h1>
              <br />

              <img
                className="block w-[400px] mx-auto"
                src={Blog1_6}
                alt="ENCHANTED GARDEN "
              />
              <p>
                Celebrate the beauty of nature with an enchanted garden-themed
                event. Transform your venue into a lush botanical paradise
                adorned with cascading florals, twinkling lights, and whimsical
                garden accents. Incorporate interactive elements such as flower
                crown workshops or butterfly releases for an immersive
                experience that delights the senses.
              </p>
            </motion.div>
          ),
        },
        // Add more sections here if needed
      ],
    },
  },
  {
    id: 2,
    name: "Guest Management during an event",
    img: Blog2_1,
    delay: 0.4,
    text: {
      title:
        "Are you worried about Guest Management During an Event? Let Professionals take over…",
      sections: [
        {
          content: (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p>
                Are you looking forward to celebrating your kid’s birthday?
                Would you like to throw your better half a surprise birthday
                party? Or are you planning a wedding or reception? These days,
                every event, be it a birthday party, a wedding or a reception is
                a life occasion to celebrate. Wouldn’t you want everything to be
                perfect? Trusting professionals to manage the show is the key to
                relax, sit back and enjoy!
              </p>
              <br />
              <img
                className="block w-[400px] mx-auto"
                src={Blog2_2}
                alt="image of planning occasions "
              />

              <p>
                There is no denying that be it a wedding or a birthday party,
                the preparations are quite elaborate. However, when you hire
                professionals, you can be assured that everything from booking
                to invitations to <strong>guest management</strong> will be
                taken care of wonderfully.
                <br />
                <br />
                All you need to do is enjoy the company of your loved ones
                completely. When you hire professional event managers, you can
                be assured that they will take care of everything possible.
                Confused whether you should hire an event management company?
                We’ll help you make a decision with ease….
              </p>
              <br />
              <img
                className="block w-[400px] mx-auto"
                src={Blog2_1}
                alt="image of Event management "
              />
              <ol>
                <li>
                  ❖ The first step in planning an occasion, be it a birthday
                  party or a wedding is invitation. Are you confused what would
                  look best or where to start? Don’t worry! We can help you by
                  not only suggesting you several options but also get it done
                  for you…
                </li>
                <br />
                <img
                  className="block w-[400px] mx-auto"
                  src={Blog2_4}
                  alt="image of planning occasions "
                />
                <li>
                  ❖ The next in line is where to host the party? Depending on
                  your budget, we can provide you with several options that are
                  within your budget. What’s more, we can even sweeten the deal
                  by taking care of booking the place so that you don’t have to
                  worry about the lodging of your guests.
                </li>
                <br />
                <li>
                  ❖ Once you have sorted out the invitation and booking, the
                  next thing that comes to mind is guest management. We
                  understand, that keeping your guests happy is the biggest
                  challenge and we are ready to step up to it. Through a
                  hospitality desk any query of the guests is immediately
                  addressed and answered. What’s more, there are small mementos
                  commemorating this happy occasion waiting for your guests in
                  their room. Each guest is provided attention and their needs
                  are catered to with a smile.
                </li>
                <br />
                <li>
                  ❖ Are you worried about the decoration of the place? Since the
                  décor of the place is something that can make or break a
                  function, paying enough attention to it is important. With
                  enough experience on hand, we can provide you several ideas
                  regarding themes, colour combination etc. If you have
                  something particular in mind, we can help you materialise that
                  too!
                </li>
                <img
                  className="block w-[400px] mx-auto"
                  src={Blog2_3}
                  alt="image of Family party "
                />
                <br />
                <li>
                  ❖ Food is something that is an integral part of any
                  celebration. In fact, apart from hospitality, it is the only
                  thing that is remembered for years. We can help you prepare
                  the menu for every occasion, from snacks, to breakfast, to
                  lunch and dinner and even cocktail party. With one of the best
                  catering team, you can be assured that people would love
                  gorging on the yummy delicacies.
                </li>
                <br />
                <li>
                  ❖ What function is complete these days without some dance
                  masti and fun? With DJ, trained choreographers and music
                  lovers on the team, we provide you with a chance of a lifetime
                  to dance your heart out on the best music.
                </li>
                <br />
                If you liked the idea of having fun without stressing yourself,
                it is time you made a decision. Hire event managers to relax and
                enjoy the show put by them.
              </ol>
            </motion.div>
          ),
        },
      ],
    },
  },
  {
    id: 3,
    name: "Role of an Event Consultant",
    img: Blog3_1,
    delay: 0.4,
    text: {
      title:
        "Looking Forward to Hiring an Event Consultant? Here's What You Should Look for….",
      sections: [
        {
          content: (
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p>
                Are you excited about the upcoming wedding in your family? We
                can understand that apart from the joy of all the festivities,
                you are also worried about how you will be able to manage every
                responsibility that has come your way. Managing every aspect of
                the wedding is not a job for the faint hearted, after all, they
                are not called the big fat Indian wedding just like that. Every
                function from haldi to bhaat, to sangeet and cocktail, to the
                actual wedding and reception require lots of preparation. A
                sensible thing would be to let professionals assist you so that
                you can enjoy the festivities without any worries. Thankfully,
                we have event consultant and manager available to take care of
                every possible situation.
              </p>
              <br />
              <h2>What is the Role of an Event Consultant?</h2>

              <p>
                Planning an event, especially one at a large scale is not
                everyone’s cup of tea. There are several things which might go
                out of hand. However, instead of managing everything on your
                own, you can take the assistance of event consultants. If you
                know what you want but don’t know how to get it done, hiring an
                event consultant would make things easy.
                <br />
                <br />
                <h2>What to look for before hiring an event consultant?</h2>
                Sometimes people hire <strong>event consultant</strong> to plan
                the event, while others have some ideas but need professionals
                to execute it. Whatever your requirement, ensure that you
                discuss it with prospective candidates before hiring one. If you
                have decided to trust the responsibilities of the event to an
                event consultant, here’s what you should keep in mind before
                hiring one:
              </p>
              <br />
              <img
                className="block w-[400px] mx-auto"
                src={Blog2_1}
                alt="image of Event management "
              />
              <ol>
                <li>
                  ❖ <strong>What is their general disposition?</strong> Since
                  you will be trusting the entire responsibility of the event,
                  from guest management to food and décor etc. to them, it is
                  important that they have a friendly nature. We can assure you
                  that guests love to be entertained by family members and if
                  you are busy, your event consultant should be able to fill in
                  for you. Apart from helping clients fulfil their dreams, we
                  also believe in building relationships. Your guests are
                  welcomed and taken care of in the best possible way and their
                  needs are attended to pronto!
                </li>
                <br />
                <img
                  className="block w-[400px] mx-auto"
                  src={Blog2_4}
                  alt="image of planning occasions "
                />
                <li>
                  ❖{" "}
                  <strong>
                    What responsibilities are they willing to share?
                  </strong>{" "}
                  There are several areas which require attention during any
                  event. We assure that every tiny detail and requirements of
                  the client is fulfilled as we work closely with graphic
                  designers, PR agency, vendors, venue managers, caterers,
                  decorators etc. Thanks to our cordial relationship with them
                  the event is successfully managed. Additionally, we also take
                  care of the logistics for the event. Thus, you do not have to
                  worry about transportation, parking, security etc.
                </li>
                <br />
                <li>
                  ❖<strong> What is their experience?</strong> In the event
                  management and catering industry, experience matters a lot.
                  Apart from experience the drive to excel is also important.
                  Having successfully executed events of different sizes, like
                  conferences, birthday parties, weddings, receptions, etc. we
                  have carved a niche for ourselves. Our team comprises of
                  professionals from different fields which makes us a unique
                  one-stop solution for all your event requirements.
                </li>
                <br />
                <li>
                  ❖ <strong>What do they charge?</strong> Last but not the
                  least, the event consultant should be able to work within your
                  budget. It is important to discuss this with the team before
                  you finalise them. We offer budget friendly services to our
                  clients, tailored as per your requirements.
                </li>
                <img
                  className="block w-[400px] mx-auto"
                  src={Blog3_2}
                  alt="image of Family party "
                />
                <br />
                If you liked the idea of having fun without stressing yourself,
                it is time you made a decision. Hire event managers to relax and
                enjoy the show put by them.
              </ol>
              <p>
                Considering that event consultants can lower your stress, hiring
                one seems like a good idea. Survey to hire the best event
                consultant in your area.
              </p>
            </motion.div>
          ),
        },
      ],
    },
  },
];

export default function Blog() {
  const [popupData, setPopupData] = useState(null);

  const handleImageClick = (item) => {
    setPopupData(item);
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  return (
    <section>
      <div className="container pb-24 ">
        {/* Section Title */}
        <h3 className="oswald uppercase mb-8 text-center">Blogs</h3>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center ">
          {BlogData.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 text-center   shadow-2xl p-3 rounded-xl"
            >
              <div className="flex justify-center items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="
                   w-ful  rounded-2xl 
                    group-hover:scale-105
                    group-hover:translate-y-[-10px]
                    transition-all
                    duration-700 "
                />
              </div>
              <div>
                <p
                  className="text-sm font-bold  cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  {item.name}
                </p>
                {/* <p className="text-sm font-bold text-yellow-500 overflow-hidden">
                  {item.descriptoin}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popupData && (
        <Popup
          image={popupData.img}
          name={popupData.name}
          text={popupData.text}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}
