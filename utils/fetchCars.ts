import axios from "axios";

export async function fetchCars(page = 1, sort?: "asc" | "desc") {
    const params: any = {
        _limit: 12,
        _page: page,
    };
    if (sort) {
        params._sort = "price";
        params._order = sort;
    }

    const res = await axios.get("https://testing-api.ru-rating.ru/cars", { params });
    return res.data;
}
