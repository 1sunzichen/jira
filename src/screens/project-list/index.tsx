import { NewList } from "./list"
import { SearchPancel } from "./search-panel"
import { useState,useEffect } from "react";
import {cleanObject} from '../../util';
import qs from 'qs'
const apiUrl=process.env.REACT_APP_URL
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const [param, setParam] = useState({ name: "", personId: "" });
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
     
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      });
    }, [param]);
    useEffect(() => {
      fetch(`${apiUrl}/users`).then(async (res) => {
        if (res.ok) {
          setUsers(await res.json());
        }
      });
    }, [param]);
    return <div>
        <SearchPancel param={param} setParam={setParam} users={users}/>
        <NewList list={list} users={users}/>
    </div>
}