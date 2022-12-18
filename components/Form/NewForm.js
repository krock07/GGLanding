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
            <div className="flex justify-between w-full mt-5 mb-3">
              <input
                className="rounded-[3px] p-1 bg-[#2A2A2A] flex-1 text-white placeholder:text-white  placeholder:text-[12px]"
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
                className="font-bold text-white text-[10px] w-[174px]   py-1 capitalize bg-[#278aec] rounded-[3px] xl:text-xs"
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
