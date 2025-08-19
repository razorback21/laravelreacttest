import { useState, useRef } from "react";
import Layout from "@/Layouts/Layout";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import MultiSelect from "@/Components/MultiSelect";

export default function Create({ roles }) {
    const [selectedRoles, setSelectedRoles] = useState([]);
    const formDateRef = useRef({
        name: "",
        email: "",
        roles: [],
        password: "12345678",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected roles:", selectedRoles);

        // We will use axios to submit he form data as it is required in the Exam.
        axios
            .post(route("users.store"), {
                ...formDateRef.current,
                roles: selectedRoles,
            })
            .then((res) => {
                console.log(res);
                if (res.status === 201) {
                    // redirect using Inertia.visit() method
                    Inertia.visit(route("users.index"));
                }
            });
    };

    function handleInputChange(e) {
        const { name, value } = e.target;
        formDateRef.current[name] = value;
    }

    return (
        <Layout title="Create User">
            <div className="max-w-2xl mx-auto">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className="card-title text-2xl font-bold mb-6">
                            Create New User
                        </h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Full Name *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter full name"
                                    className="input input-bordered w-full focus:input-primary"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Email Address *
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    className="input input-bordered w-full focus:input-primary"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">
                                        User Roles *
                                    </span>
                                </label>
                                <MultiSelect
                                    options={roles}
                                    selectedValues={selectedRoles}
                                    onChange={setSelectedRoles}
                                    placeholder="Select user roles"
                                    required
                                />
                            </div>

                            <div className="form-control pt-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                    Create User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
