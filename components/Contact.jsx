"use client";
import { motion } from "framer-motion";
import { CONTACT } from "@/constants";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center text-tighter">
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          href="mailto:vikassharma20015@gmail.com"
          className="border-b"
        >
          <MdEmail className="inline-block text-xl" />
          {" " + CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};
export default Contact;
