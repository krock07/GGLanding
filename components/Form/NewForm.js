import React from "react";
import { Formik, Form } from "formik";
import { useToast } from "@chakra-ui/react";

const NewForm = () => {
  const toast = useToast();
  return (
    <>
      <Formik
        initialValues={{ email: "", name: "" }}
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
            <div className="relative flex justify-center w-full mt-5 mb-3 md:justify-between">
              <input
                className=" rounded-[8px] h-[39px] lg:h-[85px] bg-[#2A2A2A] flex-1 text-white placeholder:text-white  placeholder:text-[12px] placeholder:p-4"
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
                className="shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] font-bold absolute right-0  text-white text-[10px] w-[74px] h-[39px] md:h-[85px] md:w-[174px]    capitalize bg-[#278aec] rounded-[8px] xl:text-xs"
              >
                JOIN BETA
              </button>
            </div>
            <div>
              <p className="text-red-600">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default NewForm;
