import React from "react";

const Stats = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500">
          <h3 className="text-3xl font-bold text-blue-600">50+</h3>
          <p className="text-gray-700">Projects Completed</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500">
          <h3 className="text-3xl font-bold text-blue-600">3+</h3>
          <p className="text-gray-700">Years Experience</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500">
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-700">Clients Served</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500">
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-700">Awards Won</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
