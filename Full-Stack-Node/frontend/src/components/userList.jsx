import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const userList = () => {
    const [users, setUser] = useState([]);
    // home effect
    useEffect(() => {
        getUsers();
    }, []);

    //API Backend
    const getUsers = async () => {
        const response = await axios.get("http://localhost:3000/users");
        setUser(response.data);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            getUsers();
        } catch (error) {}
    };

    return (
        <>
            <div className='min-h-screen p-10'>
                <Link
                    to={"add"}
                    className='px-6 py-2 mb-5 text-center text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring inline-block'
                >
                    Add New
                </Link>
                <div className='shadow-lg rounded-lg overflow-hidden'>
                    <table className='w-full table-fixed'>
                        <thead>
                            <tr className='bg-gray-500 mt-10'>
                                <th className='py-1 px-5 text-center text-gray-100 font-bold uppercase'>
                                    No
                                </th>
                                <th className='py-1 px-5 text-center text-gray-100 font-bold uppercase'>
                                    Nama
                                </th>
                                <th className='py-1 px-5 text-center text-gray-100 font-bold uppercase'>
                                    Email
                                </th>
                                <th className='py-1 px-5 text-center text-gray-100 font-bold uppercase'>
                                    Gender
                                </th>
                                <th className='py-1 px-5 text-center text-gray-100 font-bold uppercase'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className='py-4 px-6 border-b border-gray-200 text-center'>
                                        {index + 1}
                                    </td>
                                    <td className='py-4 px-6 border-b border-gray-200 text-center'>
                                        {user.name}
                                    </td>
                                    <td className='py-4 px-6 border-b border-gray-200 truncate text-center'>
                                        {user.email}
                                    </td>
                                    <td className='py-4 px-6 border-b border-gray-200 text-center'>
                                        {user.gender}
                                    </td>
                                    <td className='py-4 px-6 border-b border-gray-200 text-center grid grid-cols-2 gap-2'>
                                        <Link
                                            to={`edit/${user.id}`}
                                            type='button'
                                            className='bg-blue-500 text-white py-2 px-5 rounded-xl text-1xl hover:bg-blue-700'
                                        >
                                            edit
                                        </Link>

                                        <Link
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                            type='button'
                                            className='bg-red-500 text-white py-2 px-5 rounded-xl text-1xl hover:bg-red-700 '
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default userList;
