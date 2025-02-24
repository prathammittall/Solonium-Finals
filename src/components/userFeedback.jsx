import React from 'react';

const feedbacks = [
    {
        name: "Dhruv Aggarwal",
        avatar: "👨🏾",
        color: "red",
        feedback: "SOLOS transformed my online interactions! The dark theme is not only visually stunning but also makes chatting enjoyable. The AI’s responses are quick and relevant, making every conversation a delight."
    },
    {
        name: "Yamini Baluni",
        avatar: "👩🏻",
        color: "purple",
        feedback: "I am thoroughly impressed with SOLOS! The unique interface and AI capabilities exceeded my expectations. It feels like having a personal assistant that understands my needs perfectly."
    },
    {
        name: "Pratham Mittal",
        avatar: "🧔🏻",
        color: "green",
        feedback: "Using SOLOS has been a game-changer for my online communication. The chatbot is intuitive and responsive, and I love the dark violet gradient design. Highly recommend for anyone looking to enhance their chat experience!"
    }
];

function User() {
    return (
        <div className="bg-white py-12">
            <h2 className="text-3xl font-bold text-center mb-8">User Feedback</h2>
            <div className="flex justify-center gap-6">
                {feedbacks.map((user, index) => (
                    <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center max-w-sm">
                        <div className="text-6xl mb-4 w-[80px] flex items-center justify-center bg-purple-200 h-[70px] border-purple-200 rounded-[20px]">{user.avatar}</div>
                        <h3 className="text-xl font-bold mb-2">{user.name}</h3>
                        <hr className='my-2' />
                        <p className="text-gray-600">{user.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;