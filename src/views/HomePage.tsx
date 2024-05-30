import React, { useState } from "react";
import "./styles/Page.css";
import NewsFeed from "../components/news/News";

export const HomePage: React.FC = () => {

  return (
    <div className="page-wrapper">
      <NewsFeed/>
    </div>
  );
};
