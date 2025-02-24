import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Message sent successfully!");
        setFormData(0);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            
                <h2 className="text-2xl font-bold text-white text-center mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-300">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"> Send Message </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
