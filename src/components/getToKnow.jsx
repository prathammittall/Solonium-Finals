import React from 'react'

export default function SolosInfoSection() {
  return (
    <section className="bg-white text-center py-12 px-6 mt-42">
      <h2 className="text-3xl font-bold text-gray-900">Get to know SOLOS</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mt-4">
        At SOLOS, we focus on delivering an innovative AI chatbot experience. Our platform features a
        captivating dark theme and dynamic violet gradients, making every chat visually appealing and enjoyable.
        Join us in exploring the world of AI, where creativity meets functionality.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-purple-900 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Interactive Chat Interface</h3>
          <p className="mt-2 text-gray-200">
            Our advanced chatbot features an intuitive interface designed for effortless navigation, allowing users
            to engage in rich conversations while enjoying a visually striking dark theme.
          </p>
          <a href="#" className="text-white font-bold mt-4 inline-block">Contact →</a>
        </div>

        <div className="bg-purple-800 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold">AI-Powered Features</h3>
          <p className="mt-2 text-gray-200">
            SOLOS is equipped with a plethora of AI functionalities, designed to enhance user interactions and
            provide insightful responses, ensuring a satisfying and informative experience.
          </p>
          <a href="#" className="text-white font-bold mt-4 inline-block">Contact →</a>
        </div>

        <div className="bg-purple-900 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Customizable Experience</h3>
          <p className="mt-2 text-gray-200">
            At SOLOS, we offer a customizable chatbot experience tailored to your preferences. Our platform adapts to
            your needs, making every conversation unique and engaging.
          </p>
          <a href="#" className="text-white font-bold mt-4 inline-block">Contact →</a>
        </div>
      </div>
    </section>
  );
}
