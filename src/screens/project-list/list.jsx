

export const NewList=(props)=>{
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {props.list.map(pro=><tr>
                <td>{pro.name}</td>
                <td>{props.users.find(user=>user.id===pro.personId)?.name||"未知"}</td>
            </tr>)}
        </tbody>
    </table>
}