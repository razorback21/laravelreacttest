import Layout from "@/Layouts/Layout";
import UsersTable from "./UsersTable";
import { Link } from "@inertiajs/inertia-react";

export default function Index({ users }) {
    return (
        <Layout title="Users">
            <div className="bg-white p-5 rounded-md w-full">
                <h1 className="font-bold mb-5">Users</h1>
                {!users.length ? (
                    <div>
                        <p className="text-center text-sm bg-blue-200 border border-blue-300 mb-2 p-2 rounded-md text-blue-900">
                            There are no users in the database
                        </p>

                        <Link href={route("users.create")}>
                            <button className="btn btn-neutral w-full">
                                Create User
                            </button>
                        </Link>
                    </div>
                ) : (
                    <UsersTable users={users} />
                )}
            </div>
        </Layout>
    );
}
