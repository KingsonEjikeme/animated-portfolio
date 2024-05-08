import { useRef } from "react";
import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2166916/pexels-photo-2166916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consectetur ea expedita laudantium reiciendis dolore accusamus id neque ipsum sapiente sit delectus unde nisi, hic maxime fugit assumenda dolorum alias.",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2166916/pexels-photo-2166916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consectetur ea expedita laudantium reiciendis dolore accusamus id neque ipsum sapiente sit delectus unde nisi, hic maxime fugit assumenda dolorum alias.",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2166916/pexels-photo-2166916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consectetur ea expedita laudantium reiciendis dolore accusamus id neque ipsum sapiente sit delectus unde nisi, hic maxime fugit assumenda dolorum alias.",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2166916/pexels-photo-2166916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consectetur ea expedita laudantium reiciendis dolore accusamus id neque ipsum sapiente sit delectus unde nisi, hic maxime fugit assumenda dolorum alias.",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    //   offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>

            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item, index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
