import { userRef } from "react";
import Layout from "@/Layouts/Layout";

export default function HomePage() {
    return (
        <Layout>
            <h1 className="font-bold mb-5">Create User</h1>
            <form className="form-control w-full">
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Fullname</span>
                    </label>
                    <input
                        type="text"
                        name=""
                        placeholder="Enter fullname"
                        class="input input-bordered w-full"
                    />
                </div>
                <div className="mb-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        class="input input-bordered w-full"
                    />
                </div>
                <div className="mb-8">
                    <label className="label">
                        <span className="label-text">Roles</span>
                    </label>
                    <select className="select select-bordered w-full" multiple>
                        <option disabled selected>
                            Select roles
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-neutral w-full">submit</button>
                </div>
            </form>
        </Layout>
    );
}
