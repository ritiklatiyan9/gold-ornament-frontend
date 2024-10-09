import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ChatInterface from "./ChatInterface";
import wp from "../assets/jw1.jpg";

const customFontStyle4 = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const customFontStyle = {
  fontFamily: "'Ananda Personal Use Black', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Home: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const categories = [
    {
      name: "Diamonds",
      image:
        "https://www.avtaara.com/wp-content/uploads/2021/01/20210105_163052_0000.png",
      description:
        "Explore our stunning collection of diamond pieces that captivate and inspire.",
    },
    {
      name: "Gold",
      image:
        "https://odishabytes.com/wp-content/uploads/2018/05/gold-1369453_640.jpg",
      description:
        "Discover our exquisite gold jewelry, blending tradition with contemporary style.",
    },
    {
      name: "Pearls",
      image:
        "https://chandranipearls.in/cdn/shop/files/Stunning_Stone_Studded_Pearl_Bangle_-_Chandrani_Pearls-4017440.jpg?v=1727544535",
      description:
        "Indulge in the timeless elegance of our carefully curated pearl collection.",
    },
  ];

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heartbeatAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  return (
    <div
      style={customFontStyle4}
      className="relative min-h-screen mt-16 bg-gradient-to-br from-amber-50 to-rose-100 overflow-hidden"
    >
      {/* Animated SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="jewel-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20 2L2 10L20 18L38 10L20 2Z"
              fill="none"
              stroke="rgba(245, 158, 11, 0.2)"
              strokeWidth="1"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                M20 2L2 10L20 18L38 10L20 2Z;
                M20 0L0 10L20 20L40 10L20 0Z;
                M20 2L2 10L20 18L38 10L20 2Z"
              />
            </path>
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#jewel-pattern)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10">
        <header
          style={customFontStyle4}
          ref={headerRef}
          className="py-12 px-4 mt-10 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-transparent bg-clip-text"
          >
            BHARAT GOLD ORNAMENTS
          </motion.h1>
          <motion.p
            style={customFontStyle}
            initial={{ y: 50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-center text-amber-700"
          >
            Timeless Elegance, Modern Allure
          </motion.p>
        </header>

        <main className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-800">
              Exquisite Jewellery Collection
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-amber-700">
              Discover our curated selection of timeless pieces that blend
              tradition with contemporary style.
            </p>
          </motion.div>

          <motion.div
            ref={categoriesRef}
            initial={{ y: 50, opacity: 0 }}
            animate={categoriesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={featuredInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 mb-12 relative"
          >
            <img
              className="w-full max-w-3xl mx-auto rounded-t-2xl"
              src={wp}
              alt="Featured Jewelry"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-60 rounded-3xl"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Discover Our Latest Collection
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-800 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-amber-600" />
        </motion.div>
      </motion.div>

      {/* Chat Button with Heartbeat Animation */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        animate={heartbeatAnimation}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleChat}
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center space-x-2"
        >
          <MessageSquare size={20} className="text-white" />
          <span className="sm:inline">Chat</span>
        </motion.button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100%-2rem)] sm:w-96 h-[60vh] sm:h-[70vh] bg-yellow-50 shadow-2xl rounded-2xl overflow-hidden border border-amber-200 z-50"
          >
            <div className="flex justify-between items-center bg-amber-600 text-white p-4">
              <span className="font-semibold text-lg">
                Let's Chat
              </span>
              <button
                onClick={toggleChat}
                className="hover:text-amber-200 transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="h-[calc(100%-64px)]">
              <ChatInterface />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;