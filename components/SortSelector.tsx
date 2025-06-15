"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelector() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get("page") ?? "1";

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sort = e.target.value;
        router.push(`/?page=${page}${sort ? `&sort=${sort}` : ""}`);
    };

    return (
        <select onChange={handleChange} defaultValue={searchParams.get("sort") || ""}>
            <option value="">Без сортировки</option>
            <option value="asc">По возрастанию цены</option>
            <option value="desc">По убыванию цены</option>
        </select>
    );
}
