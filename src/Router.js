import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TodolistPages from "./components/todolistpages/TodolistPages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<TodolistPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
