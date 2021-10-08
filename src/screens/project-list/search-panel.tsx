export const SearchPancel = (props: any) => {
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
