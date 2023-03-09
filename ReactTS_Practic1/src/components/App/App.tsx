import { useState } from "react";

import Info from "../info/info";
import Filter from "../filter/filter";
import ListEmployees from "../listEmployees/listEmployees";
import AddEmployees from "../addEmployees/addEmployees";

import { IDataEmployee } from "../../interfaces/globalInterfaces";

import "./app.scss";

export default function App(): JSX.Element {
  const [data, setData] = useState<IDataEmployee[]>([
    {id: 1, name: "John C.", salary: 800, increase: false, like: false},
    {id: 2, name: "Alex M.", salary: 3000, increase: false, like: true},
    {id: 3, name: "Carl W.", salary: 5000, increase: true, like: false}
  ]);

  let curentMaxId = Math.max(...data.map((obj) => {
    return obj.id;
  }));

  function deleteEmployees(id: number): void {
    setData(data.filter((obj) => obj.id !== id));
  }

  function addEmployees(obj: {name: string, salary: number}): void {
    curentMaxId++;
    const newData = [...data, {...obj, id: curentMaxId, increase: false, like: false}];

    setData(newData);
  }

  function changingEmployees(id: number, obj: {increase: boolean} | {like: boolean}): void {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {...item, ...obj};
      }

      return item;
    }) ;
    
    setData(newData);
  }

  return (
    <div className="app">
      <Info/>
      <Filter/>
      <ListEmployees 
        data={data} 
        deleteEmployees={deleteEmployees} 
        changingEmployees={changingEmployees}/>
      <AddEmployees addEmployees={addEmployees}/>
    </div>
  );
}