import Info from "../info/info";
import Filter from "../filter/filter";
import ListEmployees from "../listEmployees/listEmployees";
import AddEmployees from "../addEmployees/addEmployees";

import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <Info/>
      <Filter/>
      <ListEmployees/>
      <AddEmployees/>
    </div>
  );
}