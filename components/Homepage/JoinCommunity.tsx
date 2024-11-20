import React from "react";

const JoinCommunity = () => {
  return (
    <div className="tradex-text-white tradex-container tradex-pt-[120px] tradex-px-4 md:tradex-px-20">
      <div className="tradex-grid tradex-grid-cols-1 md:tradex-grid-cols-2 tradex-gap-8 tradex-items-center">
        {/* Left Section */}
        <h1 className="tradex-text-[36px] md:tradex-text-[60px] tradex-font-semibold tradex-text-black !tradex-font-nunito tradex-text-center md:tradex-text-left">
          Join a community of millions
        </h1>

        {/* Right Section */}
        <div className="tradex-flex tradex-flex-col tradex-gap-8 tradex-text-center md:tradex-text-left lg:tradex-pl-32">
          <div>
            <h2 className="tradex-text-[40px] md:tradex-text-[60px] tradex-font-semibold !tradex-text-darkBlue">
              29.7M
            </h2>
            <p className="tradex-text-sm !tradex-font-nunito">
              FEE PAYING ACCOUNTS, ALL TIME
            </p>
          </div>
          <div>
            <h2 className="tradex-text-[40px] md:tradex-text-[60px] tradex-font-semibold !tradex-text-darkBlue">
              340M+
            </h2>
            <p className="tradex-text-sm !tradex-font-nunito">NFTS MINTED</p>
          </div>
          <div>
            <h2 className="tradex-text-[40px] md:tradex-text-[60px] tradex-font-semibold !tradex-text-darkBlue">
              $0.00064
            </h2>
            <p className="tradex-text-sm">MEDIAN FEE PER TRANSACTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
