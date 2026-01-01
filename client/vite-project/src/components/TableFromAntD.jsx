import { Button, Table } from "antd";
import moment from "moment";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useMemo } from "react";

function TableFromAntD({
  moviesData,
  setIsModalOpen,
  setIsDeleteModalOpen,
  setSelectedMovie,
  setFormType,
}) {
  const columns = useMemo(
    () => [
      {
        title: "Poster",
        dataIndex: "poster",
        render: (poster) => (
          <img
            src={poster}
            alt="poster"
            style={{ width: 50, height: 60, objectFit: "cover" }}
          />
        ),
      },
      {
        title: "Movie Name",
        dataIndex: "title",
      },
      {
        title: "ID",
        dataIndex: "_id",
        ellipsis: true,
      },
      {
        title: "Duration",
        dataIndex: "duration",
        render: (duration) => `${duration} mins`,
      },
      {
        title: "Genre",
        dataIndex: "genre",
      },
      {
        title: "Release Date",
        dataIndex: "releaseDate",
        render: (date) => moment(date).format("DD-MM-YYYY"),
      },
      {
        title: "Language",
        dataIndex: "language",
      },
      {
        title: "Action",
        render: (_, record) => (
          <div style={{ display: "flex", gap: 10 }}>
            <Button
              type="primary"
              onClick={() => {
                setSelectedMovie(record);
                setFormType("edit");
                setIsModalOpen(true);
              }}
            >
              <EditOutlined />
            </Button>

            <Button
              danger
              onClick={() => {
                setSelectedMovie(record);
                setIsDeleteModalOpen(true);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <Table
      columns={columns}
      dataSource={moviesData}
      rowKey="_id"
      pagination={{ pageSize: 8 }}
    />
  );
}

export default TableFromAntD;
