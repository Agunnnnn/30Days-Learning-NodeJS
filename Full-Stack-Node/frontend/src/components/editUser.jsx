import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const editUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/users/${id}`, {
                name,
                email,
                gender,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    };

    return (
        <>
            <div className='max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-6 text-center uppercase '>
                    UPDATE USER
                </h2>
                <div className='column'>
                    <form
                        onSubmit={updateUser}
                        className='max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-l'
                        action=''
                    >
                        <div className='field'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Name
                            </label>
                            <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                <input
                                    type='text'
                                    className='input w-full'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Name'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Email
                            </label>
                            <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                <input
                                    type='text'
                                    className='input w-full'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email'
                                />
                            </div>
                        </div>
                        <div className='mt-5 '>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Gender
                            </label>
                            <div className='control'>
                                <div className='grid place-items-center select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                    <select
                                        className='w-full'
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    >
                                        <option
                                            value='Male'
                                            className='text-center'
                                        >
                                            {" "}
                                            Male
                                        </option>
                                        <option
                                            value='Female'
                                            className='text-center'
                                        >
                                            Female
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div
                            type='button'
                            className='mt-5 text-center bg-red-500 text-white py-2 px-5 rounded-xl text-1xl hover:bg-red-700 '
                        >
                            <button type='submit' className='button'>
                                Update
                            </button>
                        </div>
                        <div
                            type='button'
                            className='mt-5 text-center bg-blue-500 text-white py-2 px-5 rounded-xl text-1xl hover:bg-blue-700  '
                        >
                            <button
                                type='button'
                                onClick={() => navigate("/")}
                                className='button w-full'
                            >
                                Back
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default editUser;
