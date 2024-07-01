"use client";
import { Formik } from "formik";
import { useState } from "react";
import Register from "./Register";
import { useRouter } from "next/navigation";
import axios from "axios";
import { updateUser } from "@/stores/userSlice";
import { useAppDispatch } from "@/app/hooks";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState(true);
  const [error, setError] = useState({ message: "" });

  const toggleRegister = () => {
    setLogin(!login);
  };
  if (!login) {
    return <Register toggleRegister={toggleRegister} />;
  }
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
        } else if (
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
            console.log(res);
            if (res.data.success === false) {
              setError({ message: res.data.message });
            } else {
              dispatch(updateUser({ ...res.data.data }));
              router.push("/dashboard");
            }
          })
          .catch((err) => {
            setError({ message: res.data.message });
          });
        setSubmitting(false);
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
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 w-[360px] mx-auto  rounded"
        >
          <h1 className="mb-4 text-2xl font-medium">
            Welcome!
            <small className="block mb-2 text-sm font-normal">
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
              className={`border w-full p-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              autoComplete="new-password"
            />

            <span className="text-red-700">
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
              className={`border w-full p-2 rounded ${
                errors.password ? "border-red-500" : ""
              }`}
              autoComplete="new-password"
            />
            <span className="text-red-700">
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

          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{" "}
            <span
              className="border-dashed border-b hover:cursor-pointer hover:text-blue-800"
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
