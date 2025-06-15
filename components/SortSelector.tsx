"use client"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"

export default function SortSelector() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get("page") ?? "1"

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value
    router.push(`/?page=${page}${sort ? `&sort=${sort}` : ""}`)
  }

  return (
    <select
      onChange={handleChange}
      defaultValue={searchParams.get("sort") || ""}
      className="
        block
        w-full
        max-w-xs
        rounded-md
        border
        border-gray-300
        bg-white
        py-2
        px-3
        text-base
        font-medium
        text-gray-700
        shadow-sm
        focus:border-blue-500
        focus:outline-none
        focus:ring-1
        focus:ring-blue-500
        transition
        duration-150
        ease-in-out
        cursor-pointer
      "
      aria-label="Выберите сортировку"
    >
      <option value="">Без сортировки</option>
      <option value="asc">По возрастанию цены</option>
      <option value="desc">По убыванию цены</option>
    </select>
  )
}
