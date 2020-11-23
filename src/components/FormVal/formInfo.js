import React from "react";

const formInfo = () => {
  return (
    <div className="formContent">
      <form className="form">
        <h1>
          If you wish to reach out to me, then please fill out the form on the
          page. I will be sent the request!
        </h1>
        <div className="form">
          <label htmlFor="firstName" className="formLabel">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="formInput"
            placeholder="Please enter in your first name."
          />
        </div>
        <div className="form">
          <label htmlFor="lastName" className="formLabel">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="formInput"
            placeholder="Please enter in your Last name."
          />
        </div>
        <div className="form">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="formInput"
            placeholder="Please enter in your email."
          />
        </div>
      </form>
    </div>
  );
};

export default formInfo;
