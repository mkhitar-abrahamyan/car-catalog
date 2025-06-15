import { Car } from "@/types/car";

export default function CarCard({ car }: { car: Car }) {
    return (
        <div className="border p-4 rounded shadow">
            <img src={car.photo} alt={car.mark_id} className="h-40 w-full object-cover" alt="" />
            <h3>{car.mark_id} {car.folder_id}</h3>
            <p>{car.price.toLocaleString()} ₽</p>
        </div>
    );
}
