import { Pagination } from "antd";
const App = () => (
  <div style={{ padding: "20px" }}>
    <Pagination defaultCurrent={1} total={500} />
  </div>
);

export default App;
