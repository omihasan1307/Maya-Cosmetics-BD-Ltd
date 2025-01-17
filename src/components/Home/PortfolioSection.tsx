/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "@/shared/common/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiServiceFill } from "react-icons/ri";

const PortfolioSection = ({ projects }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto  px-2 ">
      <div className="flex items-center justify-center flex-col text-center space-y-5">
        <SectionHeader text="Checkout Out Portfolio" icon={RiServiceFill} />
        <div className="text-5xl leading-tight">
          Explore Our <span className="font-bold hover:text-sk"> Projects</span>
        </div>
        <p className="text-gray-500">Get your dream come true by our excellent team members</p>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {projects?.map((project: any) => (
          <section key={project.id} className="w-full ">
            <div className="rounded-xl bg-white dark:bg-black opacity-80 hover:opacity-100 p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <Link href={`/portfolio/${project.id}`} aria-label="link to project">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image src={project?.featured_image} alt="{alt}" width={400} height={400} loading="eager" />
                </div>
                <div className="mt-1 p-2">
                  <h3 className="text-xl font-semibold px-2 my-2 lg:text-2xl">{project.title}</h3>
                  {/* <p className="text-s px-2">{project.description.slice(0, 100) + "..."}</p> */}
                  {/* <Tags tags={tags} /> */}
                </div>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
