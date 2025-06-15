import { FaGasPump, FaCarSide } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { PiCalendarBlankLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { LuGitCompare } from "react-icons/lu";
import Image from "next/image";

import { Car } from "@/types/car";

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden w-full">
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={car.images.image[0] || "/placeholder-image.jpg"}
          alt={`${car.mark_id} ${car.folder_id}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1 gap-2">
        <div>
          <h3 className="font-semibold text-lg leading-tight mb-1 text-black">
            {car.mark_id} {car.model_name}
          </h3>
          <p className="text-xl font-bold text-gray-900">
            {car.price.toLocaleString()} ₽
          </p>
          <p className="text-sm text-blue-500">от 17 000 ₽/мес</p>
        </div>

        <div className="text-sm text-gray-700 space-y-1 mt-2">
          <p>{car.modification_id}</p>
          <div className="flex gap-2 items-center text-xs text-gray-600">
            <FaCarSide className="text-gray-400" />
            <span>{car.run.toLocaleString()} км</span>
            <TbSteeringWheel className="text-gray-400 ml-3" />
            <span>{car.gearbox}</span>
          </div>
          <div className="flex gap-2 items-center text-xs text-gray-600">
            <FaGasPump className="text-gray-400" />
            <span>{car.engine_type}</span>
            <MdOutlineColorLens className="text-gray-400 ml-3" />
            <span>{car.color}</span>
            <PiCalendarBlankLight className="text-gray-400 ml-3" />
            <span>{car.year}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3 text-gray-500">
            <button title="Избранное">
              <BsHeart className="w-5 h-5 hover:text-red-500" />
            </button>
            <button title="Сравнить">
              <LuGitCompare className="w-5 h-5 hover:text-blue-500" />
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            КУПИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;