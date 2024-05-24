"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import avatarSample from "@/assets/images/avatar.png";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import Box from "./Box";
import FormCheckIn from "./FormCheckIn";
import HeaderDetail from "./HeaderDetail";
import DividingLine from "./DividingLine";
import axios from "axios";
import { HomeStaysData } from "@/app/home/interface";

interface MovieDetailProps {
  params: {
    ID: string;
  };
}

const DetailProperty = ({ params }: MovieDetailProps) => {
  const { ID } = params;
  const [data, setData] = useState<HomeStaysData[]>([]);
  useEffect(() => {
    const getHomeStayById = async () => {
      try {
        const response = await axios.get(`https://auf.my.id/homestays/${ID}`);
        setData(response.data.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getHomeStayById();
  }, []);

  console.log(data);
  return (
    <section className="w-full mt-[80px] py-8 px-2 relative">
      <div className="container mx-auto h-full relative ">
        <HeaderDetail items={data} />
        <div className="w-full h-full relative">
          <Box className="flex items-start justify-start gap-x-4 py-6 text-start lg:col-start-1 lg:h-fit">
            <div className="flex items-start justify-center flex-col">
              <h1 className="text-lg lg:text-2xl font-extrabold">
                {data.HomestayName}
              </h1>
            </div>
          </Box>

          <DividingLine />

          <FormCheckIn />

          <Box className="col-start-1">
            <h1 className="text-xl font-bold">About This Listing</h1>
            <p className="text-base font-medium">
              Best Acomodation for a perfect vacation trip
            </p>
          </Box>

          <DividingLine />

          <Box className="col-start-1">
            <h1 className="text-xl font-bold">The Space</h1>
            <p>{data.Description}</p>
          </Box>

          <DividingLine />

          <Box className="!text-center flex items-center justify-center flex-col lg:items-start lg:text-start ">
            <h1 className="text-xl font-bold">No Reviews Yet</h1>
            <p className="text-base font-medium mb-2">
              This host has reviews for other properties.
            </p>
            <ButtonPrimary variant="primary">View Other Reviews</ButtonPrimary>
          </Box>

          <DividingLine />

          <Box className="text-start text-base font-medium pb-8">
            <h1 className="text-xl font-bold mb-4">About The Host</h1>

            <figure className="flex items-center justify-start gap-x-4">
              <Image
                src={avatarSample}
                alt="Rounded avatar"
                width={30}
                height={30}
                className="w-16 h-16 p-[2px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              />
              <h3 className="font-semibold text-xl">KopalMuhamad</h3>
            </figure>
            <h2 className="mt-2">Things To Know</h2>
            <h3>House Rules</h3>
            <span>
              <p> Check in after: 6AM</p>
            </span>
            <span>
              <p> Check out after: 10PM</p>
            </span>
            <p>
              <span>Cancellation Policy:</span>
              <span className="text-base font-semibold text-accent-primary">
                Flexible
              </span>
            </p>
          </Box>
        </div>
      </div>
      <Box className="absolute left-0 bottom-0 w-full h-[50px] bg-slate-400 p-4">
        <div className="w-full h-full container mx-auto flex items-center justify-between">
          <h1>
            <span className="font-bold text-base">Rp.1.000.000/</span>
            <span>Night</span>
          </h1>
          <ButtonPrimary variant="primary">Check Avaibility</ButtonPrimary>
        </div>
      </Box>
    </section>
  );
};

export default DetailProperty;
