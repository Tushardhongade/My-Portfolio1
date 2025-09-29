import React from "react";
import Header from "./Header";
import Home from "./Home";

function Background() {
  return (
    <div className="w-full h-full bg-[url(https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-no-repeat">
      <div className="w-full h-full bg-black  bg-opacity-90  ">
        <Home />
      </div>
    </div>
  );
}

export default Background;
