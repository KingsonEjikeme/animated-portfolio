import { transition } from "@cloudinary/url-gen/actions/effect";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis
            perspiciatis eveniet ipsam tenetur unde, facere repellendus
            voluptatum ex, temporibus molestias praesentium voluptatibus porro a
            minus explicabo magnam sit iste!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis
            perspiciatis eveniet ipsam tenetur unde, facere repellendus
            voluptatum ex, temporibus molestias praesentium voluptatibus porro a
            minus explicabo magnam sit iste!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis
            perspiciatis eveniet ipsam tenetur unde, facere repellendus
            voluptatum ex, temporibus molestias praesentium voluptatibus porro a
            minus explicabo magnam sit iste!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quis
            perspiciatis eveniet ipsam tenetur unde, facere repellendus
            voluptatum ex, temporibus molestias praesentium voluptatibus porro a
            minus explicabo magnam sit iste!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
