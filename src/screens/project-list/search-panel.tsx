export interface Users {
  id: string;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
interface SearchPanelProps {
  users: Users[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPancel = (props: SearchPanelProps) => {
  // const [param, setParam] = useState({ name: "", personId: "" });
  const { users } = props;
  const { param, setParam } = props;

  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        ></input>
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user: any) => {
            return <option value={user.id}>{user.name}</option>;
          })}
        </select>
      </div>
    </form>
  );
};
