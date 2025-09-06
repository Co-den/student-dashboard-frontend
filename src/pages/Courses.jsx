// frontend/src/pages/Courses.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleTable from "../components/SimpleTable";
import { fetchCourses } from "../store/slices/coursesSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const columns = [
    "Code",
    "Course",
    "Instructor",
    "Credits",
    "Progress",
    "Status",
  ];

  const rows =
    courses?.map((course) => [
      course.code,
      course.title,
      course.instructor,
      course.credits,
      course.progress ? `${course.progress}%` : "N/A",
      <span
        className={
          course.status === "On Track"
            ? "text-emerald-400"
            : course.status === "Needs Focus"
            ? "text-amber-400"
            : "text-red-400"
        }
      >
        {course.status}
      </span>,
    ]) || [];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-blue-600 rounded-2xl p-4 border border-blue-400">
        <h2 className="font-bold text-white mb-3">Enrolled Courses</h2>

        {loading && <p className="text-white">Loading courses...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && <SimpleTable columns={columns} rows={rows} />}
      </div>

      <aside className="bg-blue-600 rounded-2xl p-4 border border-blue-400">
        <h3 className="font-bold text-white mb-3">Resources</h3>
        <div className="flex flex-col gap-2">
          <a className="btn text-white bg-blue-400 px-3 py-2 rounded">
            Syllabus (PDF)
          </a>
          <a className="btn text-white bg-blue-400 px-3 py-2 rounded">
            Lecture Slides
          </a>
          <a className="btn text-white bg-blue-400 px-3 py-2 rounded">
            Reading List
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Courses;
