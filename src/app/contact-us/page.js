"use client";

import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = {
  name: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  projectDesc: "",
};

const initState = { values: initValues, isLoading: false, error: "" };

const ContactUs = () => {
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);

      // Show successful email
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen lg:h-[1080px] bg-[url('/images/contactHero.jpg')] bg-no-repeat bg-center bg-cover gap-8">
      <div className="flex flex-col items-center max-w-[2560px]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
          Contact <span className="text-[#ff4343]">Us</span>
        </h1>
        <h3 className="text-md md:text-xl lg:text-2xl text-[#b2b2b2]">
          Speak your mind, we are all ears
        </h3>
      </div>

      {error && (
        <p className="text-red bg-red-300 rounded-lg py-3 px-4">{error}</p>
      )}

      <form
        className="w-11/12 lg:3/5 xl:w-2/5 grid grid-cols-1 lg:grid-cols-4 gap-16"
        id="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          required
          className="bg-transparent border-b-2 border-[#ff4343] focus:outline-none lg:col-span-2 autofill:bg-transparent placeholder:text-white"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={values.email}
          required
          className="bg-transparent border-b-2 border-[#ff4343] focus:outline-none lg:col-span-2 placeholder:text-white"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={values.phoneNumber}
          required
          className="bg-transparent border-b-2 border-[#ff4343] focus:outline-none lg:col-span-2 placeholder:text-white"
          minLength={8}
          maxLength={8}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={values.companyName}
          required
          className="bg-transparent border-b-2 border-[#ff4343] focus:outline-none lg:col-span-2 placeholder:text-white"
          onChange={handleChange}
        />
        <input
          type="text"
          name="projectDesc"
          placeholder="Project Description"
          value={values.projectDesc}
          required
          className="lg:col-span-4 bg-transparent border-b-2 border-[#ff4343] focus:outline-none placeholder:text-white"
          onChange={handleChange}
        />
        <button
          className="bg-transparent border-2 border-[#ff4343] py-4 hover:bg-[#ff4343] ease-in duration-150 disabled:opacity-25"
          onClick={onSubmit}
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
