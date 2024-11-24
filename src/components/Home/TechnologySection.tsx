/* eslint-disable @typescript-eslint/no-explicit-any */

import SectionHeader from "@/shared/common/SectionHeader";

import Image from "next/image";
import { img } from "@/shared/constant/imgExport";
import { FaStar } from "react-icons/fa";

const BrandsName = [
  {
    id: 1,
    featured_image: img.brand1,
  },
  {
    id: 2,
    featured_image: img.brand2,
  },
  {
    id: 3,
    featured_image: img.brand3,
  },
  {
    id: 4,
    featured_image: img.brand4,
  },
  {
    id: 5,
    featured_image: img.brand5,
  },
  {
    id: 6,
    featured_image: img.brand6,
  },
  {
    id: 7,
    featured_image: img.brand7,
  },
  {
    id: 8,
    featured_image: img.brand8,
  },
];

const TechnologySection = () => {
  return (
    <div className="py-20 text-center px-2 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center flex-col space-y-5">
        <SectionHeader text="Beauty Redefined" icon={FaStar} />
        <p className="text-5xl font-bold leading-tight">Unveiling Elegance, Every Day</p>
        <p className="text-gray-500">
          Transforming beauty routines with premium cosmetics designed to inspire confidence and celebrate individuality. Your journey to radiance
          begins here.
        </p>
      </div>

      <div className=" mt-10 grid gap-5 md:grid-cols-4">
        {BrandsName?.map((project: any) => (
          <section key={project.id} className="w-full">
            <div className="rounded-xl bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image src={project.featured_image} alt={"image"} width={400} height={400} loading="eager" />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
