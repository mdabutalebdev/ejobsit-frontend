import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfetionalCourse = () => {
  return (
    <div className="py-10 bg-[#E1F6FF]">
      <div className="cnontainer mx-auto px-20">
        <h3 className="text-center font-medium text-xl">
          আহসানুল্লাহ শাওন-এর দুইটা প্রফেশনাল কোর্স
        </h3>
        <h3 className="text-center font-bold text-4xl leading-20">
          মোশন গ্রাফিক্স এবং ভিডিও এডিটিং
        </h3>
        <div className="flex items-center justify-center gap-20 mt-10">
          <div className="w-[450px] h-[550px]  bg-[#E7F6FF] rounded-2xl shadow-lg overflow-hidden group">
            {/* Image Section */}
            <div className="overflow-hidden">
              <Image
                src="/images/Motion-Boss-Course-design-01-768x768.jpg"
                alt="Motion-Boss-Course-design-01-768x768"
                width={500}
                height={400}
                className="w-full h-[350px] object-content transform group-hover:scale-110 duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Motion Boss Premium Course
              </h2>

              <p className="text-sm text-gray-600 mb-5">
                সুন্দরভাবে ক্যারিয়ার গড়তে আজই জয়েন করুন আমাদের স্পেশাল কোর্সে।
              </p>

              {/* Button */}
              <Link
                href="#"
                className="inline-block bg-gradient-to-r from-[#185BF0] to-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                এখনই এনরোল করুন
              </Link>
            </div>
          </div>

      <div className="w-[450px] h-[550px]  bg-[#E7F6FF] rounded-2xl overflow-hidden  shadow-lg  group">
            {/* Image Section */}
            <div className=" ">
              <Image
                src="/images/Video-editing-Course-design-01-768x768.jpg"
                alt="Motion-Boss-Course-design-01-768x768"
                width={500}
                height={400}
                className="w-full h-[350px] object-content transform group-hover:scale-110 duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Motion Boss Premium Course
              </h2>

              <p className="text-sm text-gray-600 mb-5">
                সুন্দরভাবে ক্যারিয়ার গড়তে আজই জয়েন করুন আমাদের স্পেশাল কোর্সে।
              </p>

              {/* Button */}
              <Link
                href="#"
                className="inline-block bg-gradient-to-r from-[#185BF0] to-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                এখনই এনরোল করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfetionalCourse;
