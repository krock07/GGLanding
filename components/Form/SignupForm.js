import React from "react";
import { Formik, Form } from "formik";
import { useToast } from "@chakra-ui/react";

const SignupForm = () => {
  const toast = useToast();
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch("https://api.gapgambler.com/api/addUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: values.email,

              main: "earningstournament.com",
            }),
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("success", json);
              toast({
                title: "CONGRATS.",
                description: "You Made The List.",
                status: "success",
                duration: 9000,
                position: "top",
                isClosable: true,
              });
              setSubmitting(false);
              resetForm();
            })
            .catch((error) => {
              if (error) {
                console.error("Error", error);
              }
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,

          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="sm:h-[431px] sm:flex sm:flex-col sm:justify-center">
              <div className="flex flex-col items-center gap-4 px-0 mt-3 md:px-5 sm:items-center sm:justify-center sm:flex sm:flex-col">
                <img
                  src="/ggIso.png"
                  className=" w-[63px] h-[37px] object-contain md:w-[78px] md:h-[56px]"
                />
                <p className="font-bold text-[30px] md:text-[40px] text-white">
                  Join the List
                </p>
                <p className="text-white px-0 text-[20px] md:text-[24px]">
                  Get notified immediately on BETA Launch!
                </p>
                {/* <p className="text-red-600">
                  {errors.name && touched.name && errors.name}
                </p>
                <input
                  className="w-[427px] pl-3 text-white bg-transparent border rounded-[5px] outline-none ring-offset-2 ring-white focus:ring-2 focus:ring-white placeholder:pl-3"
                  type="text"
                  placeholder="NAME"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                /> */}
                <p className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  className=" px-5 w-full md:w-[427px] pl-3 text-white bg-transparent border rounded-[5px] outline-none ring-offset-2 ring-white focus:ring-2 focus:ring-white placeholder:pl-3"
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mb-5 font-bold mt-2 p-2.5 flex-1 text-white rounded-[3px] outline-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ring-offset-2 ring-indigo-600 focus:ring-2 bg-[#278aec] w-[153px]"
                >
                  JOIN
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
