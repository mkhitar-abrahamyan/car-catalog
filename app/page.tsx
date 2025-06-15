import { CarsApiResponse, fetchCars } from "@/utils/fetchCars"
import CarCard from "@/components/CarCard"
import SortSelector from "@/components/SortSelector"
import Pagination from "@/components/Pagination"
import { Car } from "@/types/car"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>
}) {
  const params = await searchParams
  const page = Number(params.page) || 1
  const sort = params.sort as "asc" | "desc" | undefined

  const carsData: CarsApiResponse = await fetchCars(page, sort)
    console.log(carsData)
  const cars: Car[] = carsData.data
  const totalPages = carsData.meta.last_page

  return (
    <div className="p-6">
      <SortSelector />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {cars.map((car, index) => (
          <CarCard key={car.unique_id || index} car={car} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  )
}
