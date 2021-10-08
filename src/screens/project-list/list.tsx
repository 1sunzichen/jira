export const NewList = (props: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((pro: any) => (
          <tr>
            <td>{pro.name}</td>
            <td>
              {props.users.find((user: any) => user.id === pro.personId)
                ?.name || "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
