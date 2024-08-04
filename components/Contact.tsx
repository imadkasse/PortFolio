"use client";
import {
  faEnvelope,
  faHouse,
  faPhone,
  faSquareShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FacebookOutlined, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export const Contact = () => {
  //snakBar
  const [open, setOpen] = useState<boolean>(false);



  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    setOpen(false);
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // احصل على name و value من e.target
    setName(e.target.value);
  };
  const handleChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // احصل على name و value من e.target
    setEmail(e.target.value);
  };
  const handleChangeMsg = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // احصل على name و value من e.target
    setMessage(e.target.value);
  };

  // تعديل نوع e في handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_0st9u0n";
    const templateId = "template_zoml79y";
    const userId = "kgakkiR1WWifT_H29";

    console.log(serviceId, templateId, userId);

    if (!serviceId || !templateId || !userId) {
      setStatus("Configuration is missing.");
      return;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.currentTarget as HTMLFormElement,
        userId
      )
      .then(
        (result) => {
          setOpen(true)
          setStatus("Message sent successfully!");
          // إعادة تعيين القيم في حالة الحقول المنفصلة
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus("Failed to send message.");
        }
      );
  };
  return (
    <div className="text-white ">
      <div className="  dark:text-primary-night    pt-32 ">
        <div className="sm:container mx-auto">
          <div className="flex items-center justify-center mb-10 flex-col  gap-3 ">
            <span className="p-1 sm:text-5xl xs:text-3xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
              Contact
            </span>
            <p className="md:text-lg text-md text-center md:px-24 line-clamp-3 text-gray-200 mb-12">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:px-2 py-5 gap-9 xs:grid-cols-1 xs:px-4 sm:px-0  xs:divide-y-2 md:divide-y-0">
            <div className=" ">
              <div className="uppercase grid grid-cols-1 gap-3 pl-8 ">
                <div className="flex flex-col pr-14 justify-center  mt-6">
                  <div className="flex  items-center gap-2 ">
                    <FontAwesomeIcon icon={faHouse} size="xl" />
                    <h1 className="text-lg ">address</h1>
                  </div>
                  <p className="pl-8 text-secondary-day dark:text-secondary-night text-md capitalize">
                    Algerie,Djelfa
                  </p>
                </div>
                <div className="flex flex-col pr-14 justify-center  mt-9">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    <h1 className="text-lg">EMAIL</h1>
                  </div>
                  <p className="pl-8 text-secondary-day dark:text-secondary-night text-md capitalize">
                    contact@imadka.com
                  </p>
                </div>
                <div className="flex flex-col pr-14 justify-center  mt-9">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faPhone} size="xl" />
                    <h1 className="text-lg">phone</h1>
                  </div>
                  <p className="pl-8 text-secondary-day dark:text-secondary-night text-md capitalize">
                    0675416320
                  </p>
                </div>
                <div className="flex flex-col pr-14 justify-center mt-9 ">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faSquareShareNodes} size="xl" />
                    <h1 className="text-lg">SOCIALS</h1>
                  </div>
                  <div className="pl-6 mt-3 flex gap-3">
                    <Link
                      href="/"
                      className="relative inline-flex items-center justify-center p-2 border rounded-full overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <FacebookOutlined
                        fontSize="medium"
                        className="relative z-10 text-white "
                      />
                    </Link>

                    <Link
                      href="/"
                      className="relative inline-flex items-center justify-center p-2 border rounded-full overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <Instagram
                        fontSize="medium"
                        className="relative z-10 text-white"
                      />
                    </Link>

                    <Link
                      href="/"
                      className="relative inline-flex items-center justify-center p-2 border rounded-full overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <LinkedIn
                        fontSize="medium"
                        className="relative z-10 text-white"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <form className="grid grid-cols-1 gap-8" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 text-base block font-semibold ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="kasse imad"
                    value={name}
                    onChange={handleChangeName}
                    className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Example@ex.com"
                    value={email}
                    onChange={handleChangeEmail}
                    className="px-4 py-2 text-base rounded-md bg-transparent border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={message}
                    onChange={handleChangeMsg}
                    className="p-4 bg-transparent  w-full block text-sm border border-gray-400 outline-[#007bff] rounded"
                    // rows="4"
                  />
                </div>
                <button className="bg-purple-700 font-bold w-full text-white rounded-2xl p-2 text-sm  hover:bg-purple-500 transition duration-200">
                  Send
                </button>
                {status && (
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={status}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
