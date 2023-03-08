import Info from "../info/info";
import Filter from "../filter/filter";
import ListEmployees from "../listEmployees/listEmployees";
import AddEmployees from "../addEmployees/addEmployees";

import { IDataEmployee } from "../../interfaces/globalInterfaces";

import "./app.scss";

export default function App(): JSX.Element {
  const dataEmployees: IDataEmployee[] = [
    {id: 1, name: "John C.", salary: 800, increase: false},
    {id: 2, name: "Alex M.", salary: 3000, increase: false},
    {id: 3, name: "Carl W.", salary: 5000, increase: true}
  ];

  return (
    <div className="app">
      <Info/>
      <Filter/>
      <ListEmployees data={dataEmployees}/>
      <AddEmployees/>
    </div>
  );
}