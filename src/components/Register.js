"use client";
import { Formik } from "formik";
import { useState } from "react";

const Register = (props) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please enter a email address";
        }
        if (!values.password) {
          errors.password = "Please provide a password";
        }

        if (!values.name) {
          errors.name = "Please enter your name";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
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
              Register to manage tasks
            </small>
          </h1>
          <div>
            <label className="block">Name</label>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={`border w-full p-2 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              autoComplete="new-password"
            />

            <span className="text-red-700">
              {errors.name && touched.name && errors.name}
            </span>
          </div>
          <div className="mt-4">
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
              onClick={props.toggleRegister}
            >
              Register
            </span>{" "}
          </p>
        </form>
      )}
    </Formik>
  );
};

export default Register;
