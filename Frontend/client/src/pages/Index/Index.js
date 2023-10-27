import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import img2 from "../../assets/Index/image2.jpg";

const validationSchema = Yup.object().shape({
  selectedDistrict: Yup.string().required("District is required"),
  selectedLocation: Yup.string().required("Location is required"),
});

function Index() {
  const [data, setData] = useState([]);
  const [district, setDistrict] = useState([]);
  const navigate = useNavigate();

  const fetchData = useCallback(async (selectedDistrict) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/franchise/getallstatedistrict?district=${selectedDistrict}`
      );
      setData(response.data);
      localStorage.setItem(
        "district",
        JSON.stringify({ district: selectedDistrict })
      );
      console.log(localStorage.getItem("district"));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchalldistrict = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/franchise/alldistrict`
      );
      setDistrict(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchalldistrict();
  }, [fetchData, fetchalldistrict]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="relative h-screen">
      <motion.img
        src={img2}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="flex justify-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-1/3">
          <h1 className="text-5xl lg:text-5xl text-center font-mont font-bold mb-4 text-white">
            Welcome to <span className="text-[#22c55e]">Grocerz Store</span>
          </h1>
          <Formik
            initialValues={{
              selectedDistrict: "",
              selectedLocation: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleChange }) => (
              <Form className="flex flex-col gap-[10px] px-[10px] font-poppins">
                <Field
                  as="select"
                  name="selectedDistrict"
                  className="px-4 py-2 rounded-md bg-white shadow-md outline-none"
                  onChange={(e) => {
                    handleChange(e);
                    fetchData(e.target.value);
                  }}
                >
                  <option value="">Select district</option>
                  {district.map((row) => (
                    <option key={row} value={row}>
                      {row}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="selectedDistrict"
                  component="div"
                  className="text-red-500 text-[14px] "
                />

                <Field
                  as="select"
                  name="selectedLocation"
                  className="px-4 py-2 rounded-md bg-white shadow-md outline-none"
                  onChange={(e) => {
                    handleChange(e);
                    localStorage.setItem(
                      "city",
                      JSON.stringify({ city: e.target.value })
                    );
                    console.log(localStorage.getItem("city"));
                  }}
                >
                  <option value="" disabled>
                    Select location
                  </option>
                  {data.map((row) => (
                    <option key={row.city} value={row.city}>
                      {row.city}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="selectedLocation"
                  component="div"
                  className="text-red-500 text-[14px]"
                />
                <motion.div
                  whileHover="hover"
                  variants={buttonVariants}
                  className="w-full"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-mont font-bold px-6 py-2 bg-[#dd292f] w-full flex justify-center text-white rounded-md shadow-md"
                  >
                    Let me in
                  </button>
                </motion.div>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
}

export default Index;
