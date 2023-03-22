import React from "react";
import { Formik, Form, Field } from "formik";
import { useToast } from "@chakra-ui/react";
import { alpha, styled } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import { ChakraProvider } from "@chakra-ui/react";

const NewForm = () => {
  const toast = useToast();
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      "&::placeholder": {
        color: "white",
      },
      borderRadius: 8,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#2a2a2a" : "#2b2b2b",
      // border: "1px solid #ced4da",
      fontSize: 16,
      color: "white",
      width: "100%",
      // height: "35px",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
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
            <div className="relative mx-auto flex justify-center w-[90%] mt-5 mb-3 md:justify-between  md:w-[700px] md:-top-[60px] ">
              {/* <input
                className="  rounded-[8px] h-[39px] md:h-[55px]  bg-[#2A2A2A] flex-1 text-white placeholder:text-white  placeholder:text-[12px] placeholder:p-4"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              /> */}
              <Field
                component={BootstrapInput}
                name="email"
                id="email"
                type="email"
                label="Email"
                helperText={!values.email.length ? "email is required" : ""}
                placeholder="Email"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {/* <TextField
                variant="outlined"
                // error={values.email.length === 0}
                // helperText={!values.email.length ? "email is required" : ""}
                value={values.email}
                label="Enter your email"
                onChange={handleChange}
              /> */}
              <ChakraProvider>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] font-bold absolute right-0  text-white text-[10px] w-[74px] h-[43px]  md:w-[174px]    capitalize bg-[#278aec] rounded-[8px]  xl:text-[20px]"
                >
                  JOIN BETA
                </button>
              </ChakraProvider>
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
