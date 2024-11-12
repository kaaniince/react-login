import React from "react";
import { Formik } from "formik";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          hobbies: [],
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />
            <br />
            <br />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="theatre"
                onChange={handleChange}
              />
              theatre
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="tennis"
                onChange={handleChange}
              />
              tennis
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="swim"
                onChange={handleChange}
              />
              swim
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="football"
                onChange={handleChange}
              />
              football
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
