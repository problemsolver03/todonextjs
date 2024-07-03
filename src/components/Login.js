"use client";
import { Formik } from "formik";
import { useState } from "react";
import Register from "./Register";
import { useRouter } from "next/navigation";
import axios from "axios";
import { updateUser } from "@/stores/userSlice";
import { useAppDispatch } from "@/app/hooks";
import { BiCheckSquare } from "react-icons/bi";

// main login component
const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState(true);
  const [error, setError] = useState({ message: "" });

  // clearing all state on login page
  localStorage.removeItem("persist:tasks");
  const toggleRegister = () => {
    setLogin(!login);
  };
  // switching to register if the user clicks on register option
  if (!login) {
    return <Register toggleRegister={toggleRegister} />;
  }
  // rendering login form if the login state is true
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please enter a email address";
        }
        if (!values.password) {
          errors.password = "Please provide a password";
        }
        //using regex to validate email address
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post("/api/login", { ...values })
          .then((res) => {
            if (res.data.success === false) {
              setError({ message: res.data.message });
            } else {
              dispatch(updateUser({ ...res.data.data }));
              router.push("/dashboard");
            }
            setSubmitting(false);
          })
          .catch((err) => {
            setError({ message: res.data.message });
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
      }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 w-[360px] mx-auto  rounded text-slate-300 shadow-xl"
        >
          <div className="flex -ml-1 items-center mb-4">
            <BiCheckSquare size={"40px"} color="#fff" />
            <span className=" text-2xl font-semobold  whitespace-nowrap text-slate-300">
              TaskManager
            </span>
          </div>
          <h1 className="mb-4 text-lg font-medium">
            Welcome!
            <small className="block mb-2 text-sm font-normal text-slate-500">
              Login or register to manage tasks
            </small>
          </h1>
          {error.message !== "" ? (
            <p className="bg-red-600 rounded mb-2 text-white p-2">
              {error.message}
            </p>
          ) : null}
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`text-slate-800 border w-full p-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              autoComplete="new-password"
            />

            <span className="text-red-600">
              {errors.email && touched.email && errors.email}
            </span>
          </div>

          <div className="mt-4">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={`text-slate-800 border w-full p-2 rounded ${
                errors.password ? "border-red-500" : ""
              }`}
              autoComplete="new-password"
            />
            <span className="text-red-500">
              {errors.password && touched.password && errors.password}
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-800 text-white px-3 py-2 w-full rounded mt-5"
          >
            {isSubmitting ? "Please wait.." : "Submit"}
          </button>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{" "}
            <span
              className="border-dashed border-b hover:cursor-pointer hover:text-white"
              onClick={toggleRegister}
            >
              Register
            </span>{" "}
          </p>
        </form>
      )}
    </Formik>
  );
};

export default Login;
