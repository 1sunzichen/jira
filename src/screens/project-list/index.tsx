import { NewList } from "./list";
import { SearchPancel } from "./search-panel";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce, useMount } from "../../util";
import qs from "qs";
export const apiUrl = process.env.REACT_APP_URL;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 2000);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPancel param={param} setParam={setParam} users={users} />
      <NewList list={list} users={users} />
    </div>
  );
};
