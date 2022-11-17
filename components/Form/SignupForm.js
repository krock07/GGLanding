import React from "react";
import { Formik, Form } from "formik";
import { useToast } from "@chakra-ui/react";

const SignupForm = () => {
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
              name: values.name,
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
            <div className="mt-3 sm:flex sm:flex-col">
              <div className="flex flex-col gap-2 px-5 mt-3 sm:items-center sm:flex sm:flex-col">
                <p className="text-red-600">
                  {errors.name && touched.name && errors.name}
                </p>
                <input
                  className="w-full pl-3 text-white bg-black border rounded-full outline-none ring-offset-2 ring-white focus:ring-2 focus:ring-white placeholder:pl-3"
                  type="text"
                  placeholder="NAME"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  className="w-full pl-3 text-white bg-black border rounded-full outline-none ring-offset-2 ring-white focus:ring-2 focus:ring-white placeholder:pl-3"
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
                  className="w-[50%] mt-2 p-2.5 flex-1 text-white rounded-full outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 bg-black"
                >
                  JOIN THE LIST
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
