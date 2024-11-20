import Link from "next/link";
import React from "react";

export default function AdsSectionRight({
  landing,
  image,
  title,
  description,
}: any) {
  return (
    <div className="tradex-pt-[120px] tradex-w-full">
      <div className="tradex-container tradex-space-y-3 md:tradex-space-y-10 tradex-relative xl:tradex-rounded-3xl">
        <div className="tradex-flex tradex-flex-col lg:tradex-flex-row tradex-gap-12 tradex-items-center">
          <div className="tradex-order-2 xl:tradex-order-none tradex-w-full">
            <img
              src={image}
              alt="Advertisement Image"
              className="tradex-rounded-lg tradex-w-[300px] tradex-h-auto xl:tradex-w-[400px] tradex-object-cover tradex-object-center tradex-mx-auto"
            />
          </div>
          <div className="lg:tradex-min-w-[500px] lg:tradex-max-w-[500px] xl:tradex-min-w-[695px] xl:tradex-max-w-[695px] tradex-space-y-5 md:tradex-space-y-8 tradex-order-1">
            <div className="tradex-space-y-2 md:tradex-space-y-3">
              <h3 className="tradex-text-[18px] tradex-leading-[26px] !tradex-font-nunito md:tradex-text-2xl xl:tradex-text-[40px] xl:tradex-leading-[50px] !tradex-font-medium !tradex-text-gray-600">
                {title}
              </h3>
              <p className="tradex-text-base tradex-leading-6 !tradex-font-nunito md:tradex-text-lg md:tradex-leading-7 xl:tradex-text-xl xl:tradex-leading-8 tradex-font-semibold !tradex-text-title">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
