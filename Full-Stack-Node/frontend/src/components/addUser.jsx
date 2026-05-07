import React from "react";

const addUser = () => {
    return (
        <>
            <div className='max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-6 text-center uppercase'>
                    Add User
                </h2>
                <div className='column'>
                    <form
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
                                    className='input'
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
                                    className='input'
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
                                    <select>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div
                            type='button'
                            className='mt-5 text-center bg-red-500 text-white py-2 px-5 rounded-xl text-1xl hover:bg-red-700 '
                        >
                            <button type='submit' className='button'>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default addUser;
