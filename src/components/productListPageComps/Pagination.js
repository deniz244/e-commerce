import React from "react";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <div className="container m-auto py-6 flex justify-center items-center">
        <ul className="flex list-style-none text-lg font-['Montserrat', sans-serif]">
          <li>
            <a className="pointer-events-none relative block rounded bg-[#BDBDBD] px-3 py-1.5 text-neutral-500 transition-all duration-300 dark:text-neutral-400 font-['Montserrat', sans-serif]">
              Previous
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white "
              href="#!"
            >
              1
            </a>
          </li>
          <li aria-current="page">
            <a
              className="relative block rounded bg-primary-100 px-3 py-1.5 font-medium text-primary-700 transition-all duration-300"
              href="#!"
            >
              2
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5  p-[25px] text-[#23A6F0] "
              href="#!"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
