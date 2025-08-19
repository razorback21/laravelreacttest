import Layout from "@/Layouts/Layout";
import UsersTable from "./UsersTable";

export default function Users({ roles }) {
    return (
        <Layout title="Role Users">
            <div className="bg-white p-5 rounded-md w-full">
                {roles?.map((role) => (
                    <div key={role.id} className="mb-5">
                        <h1 className="font-bold mb-2">{role.name}</h1>
                        {role.users.length ? (
                            <UsersTable users={role.users} />
                        ) : (
                            <p className="text-center text-sm bg-gray-100 border border-gray-300 mb-2 p-2 rounded-md text-gray-900">
                                There are no users in this role
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </Layout>
    );
}
