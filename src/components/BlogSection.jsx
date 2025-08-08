import React from "react";

const blogs = [
  {
    id: 1,
    title: "Startbit IT Solutions Technology-Driven",
    date: "06 Jul 2023",
    category: "Corporate Profile",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Startbit is Recognized by GoodFirms",
    date: "28 Mar 2023",
    category: "Corporate Profile",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Why to work with an outsourced IT",
    date: "20 November 2021",
    category: "Corporate Profile",
    image: "https://via.placeholder.com/300",
  },
];

const BlogSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Blog</h2>
        <p className="text-gray-600 mb-8">The latest blogs & articles from Startbit</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="text-sm text-gray-500 flex items-center justify-between mb-2">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">{blog.category}</span>
                  <span className="flex items-center">
                    📅 {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;