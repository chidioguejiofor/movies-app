import AppHeader from "components/lib/AppHeader";
import React from "react";
import { Link } from "react-router-dom";
import { MOVIES } from "./paths";

function NotFound() {
  return (
    <div>
      <AppHeader/>

    <div>
      Page not Found Please go back <Link to={MOVIES}>Home</Link>
    </div>
    </div>
  );
}

export default NotFound;
