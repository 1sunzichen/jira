import { Users } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  list: Project[];
  users: Users[];
}
export const NewList = (props: ListProps) => {
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
