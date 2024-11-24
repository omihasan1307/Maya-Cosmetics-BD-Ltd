/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { img } from "@/shared/constant/imgExport";
import Image from "next/image";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" ">
      <div className="max-w-screen-xl mx-auto py-10 px-1 text-center">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 space-y-1">
            <Image src={img.cos5} alt={"cos1"} className="rounded-xl " />
            <Image src={img.cos2} alt={"cos1"} className="rounded-xl " />
            <Image src={img.cos4} alt={"cos1"} className="rounded-xl " />
          </div>
          <div className="col-span-3 ">
            <Slider {...settings}>
              <Image src={img?.banCos1} alt={`Image banner`} width={700} height={500} className="rounded-xl " />
              <Image src={img?.banCos3} alt={`Image banner`} width={400} height={400} className="rounded-xl " />
              <Image src={img?.banCos4} alt={`Image banner`} width={400} height={400} className="rounded-xl " />
            </Slider>
          </div>
          <div className="col-span-1 space-y-1">
            <Image src={img.cos3} alt={"cos1"} className="rounded-xl " />
            <Image src={img.cos6} alt={"cos1"} className="rounded-xl " />
            <Image src={img.cos1} alt={"cos1"} className="rounded-xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
