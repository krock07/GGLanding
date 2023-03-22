import React from "react";
import { Formik, Form, Field, useFormik } from "formik";

import { alpha, styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { SnackbarProvider, useSnackbar, enqueueSnackbar } from "notistack";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import MainLayout from "../components/MainLayout";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      "&::placeholder": {
        color: "#fff",
      },
      borderRadius: 8,
      position: "relative",
      // backgroundColor: theme.palette.mode === "light" ? "#2a2a2a" : "#2b2b2b",
      border: "1px solid #ced4da",
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

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("You made the list!", { variant });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <MainLayout>
      <Formik
        initialValues={{ email: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.Email = "Required";
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
              // handleClickVariant("success");
              setOpen(true);

              setSubmitting(false);
              resetForm();
            })
            .catch((error) => {
              if (error) {
                console.error("Error", error);
              }
            })
            .finally(() => {
              setTimeout(() => {
                router.push("/");
              }, 1000);
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
            <div class="min-h-screen bg-[#101010] py-6 flex flex-col justify-center items-center  sm:py-12">
              <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
                <div class="relative p-8 bg-[#2A2A2A] shadow-sm sm:rounded-xl ">
                  <div className="flex flex-col items-center pb-8 text-white ">
                    <img
                      src="/ggIso.png"
                      className=" w-[63px] h-[37px] object-contain md:w-[78px] md:h-[56px]"
                    />
                    <h1 className="text-2xl font-extrabold md:text-3xl">
                      Join the list
                    </h1>
                    <p className="text-md md:text-xl">
                      Get notified immediately on BETA Launch!
                    </p>
                  </div>

                  <div class="mb-5 relative">
                    <p className="text-red-600">
                      {errors.email && touched.email && errors.email}
                    </p>
                    <Field
                      component={BootstrapInput}
                      name="email"
                      id="email"
                      type="email"
                      label="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      // helperText={
                      //   !values.email.length ? "email is required" : ""
                      // }
                      placeholder="Email"
                      fullWidth
                    />
                  </div>
                  <div className="flex justify-center w-[30%] mx-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mb-5 font-bold mt-2 p-2.5 flex-1 text-white rounded-[3px] outline-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ring-offset-2 ring-indigo-600 focus:ring-2 bg-[#278aec] w-[153px]"
                    >
                      JOIN
                    </button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        You made the list!
                      </Alert>
                    </Snackbar>
                    ;
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Signup />
    </SnackbarProvider>
  );
}
