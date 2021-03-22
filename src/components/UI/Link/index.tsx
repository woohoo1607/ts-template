import React from "react";
import { NavLink } from "react-router-dom";

interface ILink {
  pathname: String;
  title: String;
}

const Link = ({ pathname, title = "link" }: ILink) => (
  <NavLink to={`/${pathname}`}>{title}</NavLink>
);

export default Link;
