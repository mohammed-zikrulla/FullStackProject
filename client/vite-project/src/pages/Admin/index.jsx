import React from "react";
import { Tabs } from "antd";
import MovieList from "./MovieList";
import TheatreTable from "./TheatreTable";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Movie List",
    children: <MovieList />,
  },
  {
    key: "2",
    label: "Theater List",
    children: <TheatreTable />,
  }
];

function Admin() {
  return <Tabs defaultActiveKey="2" items={items} onChange={onChange} />;
}

export default Admin;
