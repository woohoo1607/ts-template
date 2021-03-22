import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilms } from "../../actions/films";

const Films = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch, getFilms]);

  return <div></div>;
};

export default Films;
