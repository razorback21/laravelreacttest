export default function UsersTable({ users }) {
    return (
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Roles</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.roles.map((role) => role.name).join(", ")}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
