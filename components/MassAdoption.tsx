import React from "react";

const MassAdoption = () => {
  return (
    <div className="tradex-text-white tradex-container tradex-pt-[120px] tradex-px-20">
      <h2 className="tradex-text-4xl tradex-font-semibold tradex-text-center tradex-font-nunito">
        Made for mass adoption
      </h2>
      <p className="tradex-font-normal tradex-text-base tradex-mb-8 tradex-text-center mt-3 tradex-font-nunito">
        Empowering innovation at scale with unmatched speed, security, and
        sustainability.
      </p>
      <div className="tradex-grid tradex-grid-cols-1 md:tradex-grid-cols-2 tradex-gap-6">
        {/* Card 1 */}
        <div className="tradex-flex tradex-flex-col tradex-justify-between tradex-p-6 tradex-border tradex-border-gray-300 tradex-rounded-lg tradex-bg-white tradex-h-full">
          <div>
            <h3 className="tradex-text-xl tradex-font-bold tradex-mb-2 tradex-border-l-2 tradex-border-l-darkBlue tradex-pl-3 tradex-font-nunito">
              Fast
            </h3>
            <p className="tradex-text-gray-600 tradex-font-nunito">
              Don’t keep your users waiting. Solana has block times of 400
              milliseconds — and as hardware gets faster, so will the network.
            </p>
          </div>
          <div className="tradex-mt-auto">
            <h1 className="tradex-text-2xl tradex-font-medium !tradex-text-darkBlue tradex-mt-3 ">
              3.831+
            </h1>
            <p className="tradex-uppercase tradex-text-xs">
              Transactions per Second
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="tradex-flex tradex-flex-col tradex-justify-between tradex-p-6 tradex-border  tradex-border-gray-300 tradex-rounded-lg tradex-bg-white tradex-h-full">
          <div>
            <h3 className="tradex-text-xl tradex-font-bold tradex-mb-2 tradex-border-l-2 tradex-border-l-darkBlue tradex-pl-3 tradex-font-nunito">
              Decentralized
            </h3>
            <p className="tradex-text-gray-600">
              The Solana network is validated by thousands of nodes that operate
              independently, ensuring your data remains secure and censorship
              resistant.
            </p>
          </div>
          <div className="tradex-mt-auto">
            <h1 className="tradex-text-2xl tradex-font-medium !tradex-text-darkBlue tradex-mt-3">
              1.380+
            </h1>
            <p className="tradex-uppercase tradex-text-xs">Validator Nodes</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="tradex-flex tradex-flex-col tradex-justify-between tradex-p-6 tradex-border tradex-border-gray-300 tradex-rounded-lg tradex-bg-white tradex-h-full">
          <div>
            <h3 className="tradex-text-xl tradex-font-bold tradex-mb-2 tradex-border-l-2 tradex-border-l-darkBlue tradex-pl-3 tradex-font-nunito">
              Scalable
            </h3>
            <p className="tradex-text-gray-600">
              Get big, quick. Solana is made to handle thousands of transactions
              per second, with fees for both developers and users remaining low.
            </p>
          </div>
          <div className="tradex-mt-auto">
            <h1 className="tradex-text-2xl tradex-font-medium !tradex-text-darkBlue tradex-mt-3">
              333.444.385.374+
            </h1>
            <p className="tradex-uppercase tradex-text-xs">
              Total Transactions
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="tradex-flex tradex-flex-col tradex-justify-between tradex-p-6 tradex-border tradex-border-gray-300 tradex-rounded-lg tradex-bg-white tradex-h-full">
          <div>
            <h3 className="tradex-text-xl tradex-font-bold tradex-mb-2 tradex-border-l-2 tradex-border-l-darkBlue tradex-pl-3 tradex-font-nunito">
              Energy Efficient
            </h3>
            <p className="tradex-text-gray-600">
              Solana’s proof of stake network and other innovations minimize its
              environmental impact, using about the same energy as a few Google
              searches.
            </p>
          </div>
          <div className="tradex-mt-auto">
            <h1 className="tradex-text-2xl tradex-font-medium !tradex-text-darkBlue tradex-mt-3">
              0%
            </h1>
            <p className="tradex-uppercase tradex-text-xs">Net Carbon Impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassAdoption;
