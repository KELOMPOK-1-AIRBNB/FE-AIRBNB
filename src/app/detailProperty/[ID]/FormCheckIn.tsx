import ButtonPrimary from "@/components/elements/ButtonPrimary";
import React from "react";
import DividingLine from "./DividingLine";

const FormCheckIn = () => {
  return (
    <div className="w-full rounded-lg border-2 py-2 flex items-center justify-between flex-col px-2 border-black font-medium mt-6 lg:absolute lg:top-0 lg:right-0 lg:max-w-[350px] lg:bg-white lg:shadow-2xl xl:max-w-[450px]">
      <main className="w-full flex items-center justify-between flex-row py-4">
        <h1>
          <span className="font-bold">Rp.1.000.000 /</span>
          <span>Night</span>
        </h1>
        <p>
          <span>0.0</span>
          <span>0 Reviews</span>
        </p>
      </main>

      <form className="w-full grid grid-cols-2 grid-rows-2">
        <div className="col-start-1 flex items-center justify-start flex-col rounded-tl-lg border-2 border-r-0 border-b-0 border-black h-[70px]">
          <p className="text-base font-bold">Check In</p>
          <p></p>
        </div>
        <div className="col-start-2 flex items-center justify-start flex-col rounded-tr-lg border-2 border-black border-b-0 h-[70px]">
          <p className="text-base font-bold">Check Out</p>
          <p></p>
        </div>
        <div className="row-start-2 col-span-2 flex items-start justify-start flex-col rounded-b-lg border-2 border-black h-[70px] pl-2">
          <p className="text-base font-bold">Guest</p>
          <p></p>
        </div>
      </form>

      <div className="flex items-center justify-center flex-col py-4 gap-y-2">
        <ButtonPrimary variant="primary">Instant Book</ButtonPrimary>
        <h1 className="text-xl font-semibold">You’ll be able to review before paying</h1>
      </div>

      <DividingLine />

      <div className="flex items-center justify-between pt-2">
        <h1 className="text-lg font-bold">Total</h1>
        <h1 className="text-lg font-bold">Rp.1.000.000</h1>
      </div>
    </div>
  );
};

export default FormCheckIn;
