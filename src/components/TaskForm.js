import axios from "axios";
import { Formik } from "formik";
import { connect } from "react-redux";

const TaskForm = (props) => {
  return (
    <>
      <Formik
        initialValues={
          props.activeTask !== null
            ? { ...props.activeTask }
            : { title: "", description: "", status: "todo" }
        }
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Please enter a title";
          }
          if (!values.description) {
            errors.description = "Please provide a description";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(props.activeTask);
          if (props.activeTask !== null) {
            axios
              .post(
                "/api/updatetask",
                {
                  ...values,
                  taskid: props.activeTask.id,
                },
                {
                  headers: {
                    Authorization: `Bearer ${props.user.value.token}`,
                  },
                }
              )
              .then((res) => {
                console.log(res);
                props.getTasksList();
                props.closeCallback(false);

                if (res.data.success) {
                  props.toast.success("Task updated successfully");
                } else {
                  props.toast.error("Task could not be updated");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            axios
              .post(
                "/api/addtasks",
                { ...values, userid: props.user.value.id },
                {
                  headers: {
                    Authorization: `Bearer ${props.user.value.token}`,
                  },
                }
              )
              .then((res) => {
                props.getTasksList();
                props.closeCallback(false);
                if (res.data.success) {
                  props.toast.success("Task added successfully");
                } else {
                  props.toast.error("Task could not be added");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }

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
              <label className="block">
                Title <span className="text-sm text-red-600">*</span>
              </label>
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
              <label className="block">
                Description <span className="text-sm text-red-600">*</span>
              </label>
              <textarea
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
                {errors.description &&
                  touched.description &&
                  errors.description}
              </span>
            </div>

            <div className="mt-4">
              <label className="block">
                Status <span className="text-sm text-red-600">*</span>
              </label>
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
    </>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(TaskForm);
