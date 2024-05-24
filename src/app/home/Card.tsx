import Link from "next/link";
import Image from "next/image";
import cardImage from "@/assets/images/banner1.jpg";
import pinMaps from "@/assets/icons/pin_maps.svg";
import star from "@/assets/icons/star.svg";

interface CardProps {
  index: number;
}
const Card = ({ index }: CardProps) => {
  return (
    <Link
      href={`/detailProperty/${ID}`}
      className="w-full shadow-2xl rounded-lg overflow-hidden text-start"
    >
      <Image
        src={cardImage}
        width={150}
        height={150}
        alt={`Sample Image ${index + 1}`}
        className="w-full h-[200px] object-cover"
      />
      <h1 className="text-lg font-bold px-2">Bogor {index + 1}</h1>
      <p className="text-base font-medium px-2 flex items-center justify-start gap-x-1">
        10 Guests 4 Bed Rooms 4 Bath Rooms
      </p>
      <div className="flex items-center justify-between text-base font-medium px-2">
        <span className="flex items-center justify-between gap-x-1">
          <Image src={pinMaps} alt="" width={14} height={14} />
          <p>Bogor</p>
        </span>
        <span className="flex items-center justify-between gap-x-1">
          <Image src={star} alt="" width={14} height={14} />
          <p>0 (0)</p>
        </span>
      </div>
      <div className=" py-1 px-2">
        <h3 className="text-semibold text-accent-primary font-bold">
          Rp. 1.000.000
        </h3>
      </div>
    </Link>
  );
};

export default Card;
