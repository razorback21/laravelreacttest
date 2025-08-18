import Layout from "@/Layouts/Layout";

export default function HomePage() {
    return (
        <Layout>
            <h1 className="font-bold mb-5">Create User</h1>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Fullname</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter fullname"
                    class="input input-bordered"
                />
                {/* <label class="label">
                    <span class="label-text-alt">Bottom Left label</span>
                </label> */}
            </div>
        </Layout>
    );
}
