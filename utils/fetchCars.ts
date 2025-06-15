import axios from "axios"

import { Car, FetchCarsParams, PaginationInfo } from "@/types/car"

export interface CarsApiResponse {
  data: Car[]
  meta: PaginationInfo
}

export async function fetchCars(
  page = 1,
  sort?: "asc" | "desc"
): Promise<CarsApiResponse> {
  const params: FetchCarsParams = {
    _limit: 12,
    _page: page,
  }

  if (sort) {
    params._sort = "price"
    params._order = sort
  }

  const res = await axios.get<CarsApiResponse>(
    "https://testing-api.ru-rating.ru/cars",
    {
      params,
    }
  )
  return res.data
}
