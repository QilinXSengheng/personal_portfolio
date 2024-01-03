import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { Alert } from "./";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.email === "") {
      setAlert({
        isAlert: true,
        message: "Required fields cannot be empty!",
        status: "warning",
      });
      setTimeout(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      }, 4000);
    } else if (!emailRegex.test(data.email)) {
      setAlert({
        isAlert: true,
        message: "Please enter a valid email address!",
        status: "error",
      });
      setTimeout(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      }, 4000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          setData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          setAlert({
            isAlert: true,
            message: "Thanks for contacting me!",
            status: "success",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        })
        .catch((error) => {
          setAlert({
            isAlert: true,
            message: `Error: ${error.message}`,
            status: "error",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        });
    }

    // Clear the alert after 4 seconds
    setTimeout(() => {
      setAlert({
        isAlert: false,
        message: "",
        status: null,
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-12 overflow-x-hidden" // Added overflow-x-hidden
    >
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      <div className="w-full flex items-center justify-center py-19 mt-10">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-4 ">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              value={data.firstName}
              onChange={handleTextChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
              bg-transparent focus:border-primary outline-none text-white"
            />
            <input
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
              bg-transparent focus:border-primary outline-none text-white"
            />
          </div>
          {/* email */}
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={handleTextChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
              bg-transparent focus:border-primary outline-none text-white"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            cols="0"
            rows="10"
            placeholder="Message here..."
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)]
            bg-transparent focus:border-primary outline-none text-white"
          ></textarea>
          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto
              hover:bg-gradient-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
              onClick={sendMessage}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
