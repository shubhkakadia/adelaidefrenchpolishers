import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Slider from "./slider";
import { beforeafter } from "./gallerydata/beforeafter";

const ProjectCard = ({ job, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
      isSelected ? "ring-2 ring-theme" : "hover:ring-2 hover:ring-gray-300"
    }`}
  >
    <div className="aspect-video w-64 overflow-hidden">
      <img
        src={job.after}
        alt={job.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div
      className={`p-2 text-center ${
        isSelected ? "bg-theme text-white" : "bg-white group-hover:bg-gray-50"
      }`}
    >
      <h3 className="text-sm font-medium truncate">{job.name}</h3>
    </div>
  </button>
);

const Beforeafter = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(beforeafter[0]);
  const [selectedJob, setSelectedJob] = useState(
    beforeafter[0].jobList ? beforeafter[0].jobList[0] : beforeafter[0]
  );

  useEffect(() => {
    const handleScroll = () => {
      setNavbarCollapsed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedJob(category.jobList ? category.jobList[0] : category);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar isCollapsed={isNavbarCollapsed} />

      <div className="md:pt-28 pt-32 max-w-7xl mx-auto px-4">
        <h1 className="text-center text-3xl">Before and After</h1>

        {/* Main Categories */}
        <div className="flex md:gap-8 gap-2 justify-center mt-4">
          {beforeafter.map((category, index) => (
            <button
              key={index}
              className={`text-lg px-4 py-2 rounded-md transition-colors duration-300 ${
                selectedCategory.name === category.name
                  ? "text-theme underline"
                  : "hover:text-theme"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Comparison Area */}
        <div className="mt-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-medium mb-4 text-center">
              {selectedJob.name}
            </h2>
            <Slider
              beforeImage={selectedJob.before}
              afterImage={selectedJob.after}
            />
          </div>
        </div>

        {/* Project Selection Cards */}
        {selectedCategory.jobList && selectedCategory.jobList.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl mb-4 text-center">More Projects</h2>
            <div className="flex gap-4 overflow-x-auto p-4">
              {selectedCategory.jobList.map((job, index) => (
                <ProjectCard
                  key={index}
                  job={job}
                  isSelected={selectedJob.name === job.name}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beforeafter;
