import { motion } from "framer-motion";

const IconClickableWithAnimation = (props) => {
  return (
    <>
      <motion.div
        whileHover={{
          y: -3,
          transition: { duration: 0.1 },
        }}
        className=""
      >
        <a href={props.href} className="" target={"_blank"} rel="noreferrer">
          <props.Icon
            className={
              "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
            }
          />
        </a>
      </motion.div>
    </>
  );
};

export default IconClickableWithAnimation;
