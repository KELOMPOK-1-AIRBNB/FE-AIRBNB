import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import imageSample from "@/assets/images/banner1.jpg";
import Image from "next/image";

const HeaderDetail = ({ items }: any) => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 max-h-[300px] gap-x-4">
      <Image
        src={items.Images1}
        alt=""
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-lg border-2 border-black"
      />
      <Image
        src={items.Images2}
        alt=""
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-lg border-2 border-black"
      />
    </div>
  );
};

export default HeaderDetail;
