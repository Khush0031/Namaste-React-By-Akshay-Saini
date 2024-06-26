import React from "react";
import User from "../UserComponent/User";
import UserClass from "../ClassComponent/UserClass";
const AboutComponent = () => {
  return (
    <div>
      <h1>About Page</h1>
      {/* <User name={"Khush(Function)"} /> */}
      <UserClass name={"Khush(Class)"} />
    </div>
  );
};

export default AboutComponent;
