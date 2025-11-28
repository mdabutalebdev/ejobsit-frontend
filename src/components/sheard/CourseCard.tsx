import React from "react";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    currentPrice: string;
    originalPrice: string;
    discount: string;
    buttonText: string;
    features: string[];
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-[#E1F6FF] rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Header Section */}
      <div className="py-6 px-3">
        <h2 className="text-xl text-center font-bold text-gray-500">{course.title}</h2>
        <h3 className="text-3xl text-center font-bold pt-2">
          {course.currentPrice}
        </h3>
        <div className="flex items-baseline justify-center gap-4 mt-2">
          <h3 className="line-through text-gray-600">{course.originalPrice}</h3>
          <h3 className="text-black font-medium text-base">{course.discount} ডিসকাউন্ট</h3>
        </div>
      </div>

      {/* Enroll Button */}
      <div className=" ">
        <button className="px-8 border rounded-xl flex items-center justify-center mx-auto text-black font-bold py-2 text-center">
          {course.buttonText}
        </button>
      </div>

      {/* Features */}
      <div className="p-4">
        <ul className="space-y-2">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {/* শুধু ৪ নং কার্ডের জন্য টিক মার্ক দেখাবে না */}
              {course.id !== 4 && <span className="text-[#3884F4] font-bold mr-2">✓</span>}
              <span className="text-gray-700  text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;