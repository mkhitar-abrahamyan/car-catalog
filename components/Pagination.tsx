"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page") || "1");
    const sort = searchParams.get("sort");

    return (
        <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    className={`px-3 py-1 border ${i + 1 === page ? "bg-blue-500 text-white" : ""}`}
                    onClick={() => router.push(`/?page=${i + 1}${sort ? `&sort=${sort}` : ""}`)}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}
