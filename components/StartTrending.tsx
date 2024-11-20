import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

export default function StartTrending() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  return (
    <section className="tradex-mx-0 tradex-pt-12 md:tradex-pt-24">
      <div
        className="tradex-bg-darkBlue tradex-flex tradex-flex-col tradex-items-center tradex-justify-center tradex-gap-4
        lg:tradex-min-h-[120px] md:tradex-min-h-[220px] tradex-py-20 md:tradex-py-20 lg:tradex-py-24 xl:tradex-py-28
        tradex-relative tradex-overflow-hidden"
      >
        <h2 className="tradex-text-2xl md:tradex-text-3xl lg:tradex-text-4xl xl:tradex-text-5xl tradex-leading-6 md:tradex-leading-10 lg:tradex-leading-[60px] tradex-font-medium !tradex-text-white tradex-font-nunito text-center">
          {t("Start Your Crypto Journey Now!")}
        </h2>

        <p className="tradex-text-base md:tradex-text-base lg:tradex-text-lg !tradex-text-white tradex-font-nunito text-center">
          {t("Get In Touch. Stay In Touch")}
        </p>

        <div className="tradex-flex tradex-gap-3 md:tradex-gap-5 lg:tradex-gap-6 tradex-items-center tradex-relative tradex-z-10 tradex-mt-4">
          {/* Uncomment the following code if you want to show the "Sign Up" button for non-logged-in users */}
          {/* {!isLoggedIn && (
            <Link href="/signup">
              <button className="tradex-px-4 md:tradex-px-8 lg:tradex-px-10 tradex-py-2 md:tradex-py-3 lg:tradex-py-4 tradex-rounded-full tradex-bg-white tradex-text-black tradex-text-xs md:tradex-text-sm lg:tradex-text-base tradex-font-bold">
                {t("Sign Up")}
              </button>
            </Link>
          )} */}
          <a
            href={
              router.locale !== "en"
                ? `/${router.locale}/exchange/dashboard`
                : "/exchange/dashboard"
            }
          >
            <button className="tradex-px-4 md:tradex-px-8 lg:tradex-px-10 tradex-py-2 md:tradex-py-3 lg:tradex-py-4 tradex-rounded-full tradex-bg-white tradex-text-black tradex-text-xs md:tradex-text-sm lg:tradex-text-base tradex-font-bold">
              {t("Trade Now")}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
