"use client"

import CourseCard from "@/components/sheard/CourseCard";
import { useEffect, useState } from "react";


interface Course {
  id: number;
  title: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  buttonText: string;
  features: string[];
}

const AllCoursePrice:React.FC = () => {

    const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/AllCourseData.json');
        
        if (!response.ok) {
          throw new Error('ডেটা লোড করতে সমস্যা হয়েছে');
        }
        
        const data = await response.json();
        setCourses(data.courses);
      } catch (err) {
        setError('ডেটা লোড করতে ব্যর্থ হয়েছে');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">লোড হচ্ছে...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className='py-10'> 
        <div className="container mx-auto px-20">
            <h3 className='text-center text-[#0456AA] font-bold text-4xl leading-20'>পছন্দ করুন আপনার প্রয়োজনীয় কোর্সটি</h3>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
         </div>
    </div>
  )
}

export default AllCoursePrice