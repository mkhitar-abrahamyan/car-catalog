"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || "1");
  const sort = searchParams.get("sort");

  const goToPage = (pageNum: number) => {
    router.push(`/?page=${pageNum}${sort ? `&sort=${sort}` : ""}`);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (page > 3) {
        pages.push("...");
      }

      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) {
        pages.push("...");
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="inline-flex gap-1 items-center">
        <button
          onClick={() => goToPage(1)}
          disabled={page === 1}
          className="px-2 py-0.5 border rounded-md text-sm text-gray-700 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {"<<"}
        </button>

        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-2 py-0.5 border rounded-md text-sm text-gray-700 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {"<"}
        </button>

        {getPageNumbers().map((item, index) => {
          if (item === "...") {
            return (
              <span key={index} className="px-1 py-0.5 text-sm text-gray-500 select-none">
                ...
              </span>
            );
          }
          const pageNum = Number(item);
          const isActive = pageNum === page;
          return (
            <button
              key={index}
              onClick={() => goToPage(pageNum)}
              className={`px-3 py-1 border rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 cursor-pointer`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-2 py-0.5 border rounded-md text-sm text-gray-700 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {">"}
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          disabled={page === totalPages}
          className="px-2 py-0.5 border rounded-md text-sm text-gray-700 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}