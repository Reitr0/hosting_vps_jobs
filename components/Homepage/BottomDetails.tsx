import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const BottomDetails = ({ landing }: any) => {
  const { t } = useTranslation("common");
  return (
    <>
      {parseInt(landing?.landing_fifth_section_status) === 1 && (
        <section className=" tradex-pt-[60px] md:tradex-pt-[120px] tradex-relative">
          <div className="tradex-container tradex-space-y-3 md:tradex-space-y-10 tradex-relative">
            <div className=" tradex-flex tradex-flex-col lg:tradex-flex-row tradex-gap-12 tradex-items-center">
              <div className=" tradex-order-2 xl:tradex-order-none">
                <img
                  src={landing?.secure_trade_left_img || "/secure_trend.png"}
                  alt=""
                />
              </div>
              <div className="lg:tradex-min-w-[500px] lg:tradex-max-w-[500px] xl:tradex-min-w-[695px] xl:tradex-max-w-[695px] tradex-space-y-5 md:tradex-space-y-8">
                <div className=" tradex-space-y-2 md:tradex-space-y-3 2xl:tradex-space-y-6 ">
                  <h5 className="tradex-text-[18px] tradex-leading-[26px] md:tradex-text-2xl !tradex-font-nunito xl:tradex-text-[40px] xl:tradex-leading-[50px] tradex-font-medium !tradex-text-title">
                    {landing?.secure_trade_title || t(`Secure Trend System`)}
                  </h5>
                  <h5 className="tradex-text-[18px] tradex-leading-[26px] md:tradex-text-2x !tradex-font-nunito xl:tradex-text-36 xl:tradex-leading-[60px] !tradex-font-medium !tradex-text-title">
                    {landing?.customization_title || t(`Easy Customization `)}
                  </h5>
                  <p className="tradex-text-xs md:tradex-text-base md:tradex-leading-6  !tradex-font-nunito">
                    {landing?.customization_details ||
                      t(`Tradexpro Exchange is a complete crypto coins exchange
                  platform developed with Laravel. It works via coin payment.
                  There is no need for any personal node, it will connect with a
                  coin payment merchant account. Our system is 100% secure and
                  dynamic. It supports all crypto currency wallets including
                  Coin Payment, Deposit, Withdrawal, Referral system, and
                  whatever you need.`)}
                  </p>
                </div>
                <Link href={`${landing?.know_more_link || "/"}`}>
                  <a className=" tradex-group tradex-w-fit tradex-py-3 tradex-px-5 md:tradex-py-4 md:tradex-px-8 tradex-rounded-full tradex-bg-darkBlue tradex-flex tradex-items-center tradex-gap-2">
                    <span className=" tradex-text-sm md:tradex-text-base md:tradex-leading-6 !tradex-text-background-main  group-hover:!tradex-text-white">
                      {t(landing?.know_more_button_title || "Know More")}
                    </span>
                    <span>
                      <FaArrowRight className=" tradex-w-3 md:tradex-w-[14px] !tradex-text-background-main  group-hover:!tradex-text-white" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BottomDetails;
