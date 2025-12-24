
import { Table } from "antd";
import moment from "moment";
const columns = [
  {
    title: "Poster",
    dataIndex: "poster",
    key: "poster",
    render: (text) => <img height={60} src={text} alt="poster" style={{ width: "50px" }} />,
  },
  {
    title: "Movie Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "id",
    dataIndex: "_id",
    key: "_id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
    render: (text) => <div>{text}{" mins"}</div>,
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
  },
  {
    title: "Release Date",
    dataIndex: "releaseDate",
    key: "releaseDate",
    render: (relDate) => <div>{moment(relDate).format("DD-MM-YYYY")}</div>,
  },
  {
    title: "Language",
    dataIndex: "language",
    key: "language",
  },
];

const TableFromAntD = ({ moviesData }) => (
  <Table columns={columns} dataSource={moviesData} />
);

export default TableFromAntD;
