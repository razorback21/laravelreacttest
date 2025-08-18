export default function UsersTable({ users }) {
    return (
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
