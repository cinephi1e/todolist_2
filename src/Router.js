import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contents from "./components/contents/Contents";
import TodolistPages from "./components/todolistpages/TodolistPages";

const Router = () => {
  return (
    <BrowserRouter>
      <Home>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/:id" element={<TodolistPages />} />
        </Routes>
      </Home>
    </BrowserRouter>
  );
};

export default Router;
