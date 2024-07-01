import axios from "axios";
import { Formik } from "formik";
import { connect } from "react-redux";

const TaskForm = (props) => {
  return (
    <Formik
      initialValues={{ title: "", description: "", status: "todo" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "Please enter a title address";
        }
        if (!values.description) {
          errors.description = "Please provide a description";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "/api/addtasks",
            { ...values, userid: props.id },
            { headers: { Authorization: `Bearer ${props.token}` } }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
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
        <form onSubmit={handleSubmit} className="bg-white">
          <div>
            <label className="block">Title</label>
            <input
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className={`border w-full p-2 rounded ${
                errors.title ? "border-red-500" : ""
              }`}
              autoComplete="new-description"
            />

            <span className="text-red-700">
              {errors.title && touched.title && errors.title}
            </span>
          </div>

          <div className="mt-4">
            <label className="block">Description</label>
            <input
              type="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className={`border w-full p-2 rounded ${
                errors.description ? "border-red-500" : ""
              }`}
              autoComplete="new-description"
            />
            <span className="text-red-700">
              {errors.description && touched.description && errors.description}
            </span>
          </div>

          <div className="mt-4">
            <label className="block">Status</label>
            <select
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
              className={`border w-full p-2 rounded ${
                errors.status ? "border-red-500" : ""
              }`}
            >
              <option value="todo">Todo</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <span className="text-red-700">
              {errors.status && touched.status && errors.status}
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-800 text-white px-3 py-2 w-full rounded mt-5"
          >
            {isSubmitting ? "Please wait.." : "Submit"}
          </button>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => state.value;

export default connect(mapStateToProps, {})(TaskForm);
