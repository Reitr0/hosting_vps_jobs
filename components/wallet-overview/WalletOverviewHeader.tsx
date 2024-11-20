import WalletOverViewMenuTab from "layout/WalletOverViewMenuTab";
import Link from "next/link";
import React from "react";

export default function WalletOverviewHeader({ title, imageUrl }: any) {
  return (
    <div className="mb-4 report-overview-header-main  tradex-bg-background-primary tradex-relative">
      <span className=" tradex-absolute tradex-right-0">
        <svg
          width="1324"
          height="354"
          viewBox="0 0 1324 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" tradex-opacity-30"
        >
          <path
            d="M1.06132 110.747C0.548968 111.265 0.553883 112.101 1.0723 112.613C1.59072 113.126 2.42632 113.121 2.93868 112.602L1.06132 110.747ZM2.93868 112.602C39.8701 75.2337 111.715 35.4016 207.091 37.6691C302.436 39.9358 421.457 84.2823 552.723 215.548L554.589 213.682C422.961 82.0534 303.326 37.3167 207.154 35.0303C111.012 32.7446 38.4758 72.8895 1.06132 110.747L2.93868 112.602ZM552.723 215.548C603.651 266.477 690.131 329.221 798.609 347.858C907.164 366.508 1037.56 340.953 1176.14 215.594L1174.37 213.636C1036.34 338.502 906.742 363.757 799.056 345.256C691.293 326.742 605.281 264.374 554.589 213.682L552.723 215.548Z"
            fill="#4E4E4E"
          />
          <path
            d="M19.5379 106.465C19.0255 106.983 19.0304 107.819 19.5489 108.331C20.0673 108.843 20.9029 108.838 21.4152 108.32L19.5379 106.465ZM21.4152 108.32C58.3467 70.9514 130.192 31.1194 225.567 33.3868C320.913 35.6536 439.933 80.0001 571.199 211.266L573.066 209.4C441.437 77.7711 321.803 33.0345 225.63 30.7481C129.488 28.4624 56.9524 68.6073 19.5379 106.465L21.4152 108.32ZM571.199 211.266C622.128 262.194 708.608 324.939 817.086 343.576C925.641 362.226 1056.04 336.671 1194.62 211.312L1192.85 209.354C1054.81 334.219 925.218 359.475 817.533 340.974C709.769 322.46 623.758 260.092 573.066 209.4L571.199 211.266Z"
            fill="#4E4E4E"
          />
          <path
            d="M38.0144 102.183C37.5021 102.701 37.507 103.537 38.0254 104.049C38.5438 104.561 39.3794 104.556 39.8918 104.038L38.0144 102.183ZM39.8918 104.038C76.8233 66.6694 148.668 26.8374 244.044 29.1049C339.389 31.3716 458.41 75.7181 589.676 206.984L591.542 205.118C459.914 73.4891 340.279 28.7525 244.107 26.4661C147.965 24.1804 75.4289 64.3253 38.0144 102.183L39.8918 104.038ZM589.676 206.984C640.604 257.913 727.084 320.657 835.562 339.294C944.117 357.944 1074.51 332.389 1213.1 207.03L1211.33 205.072C1073.29 329.937 943.695 355.193 836.009 336.692C728.246 318.178 642.234 255.81 591.542 205.118L589.676 206.984Z"
            fill="#4E4E4E"
          />
          <path
            d="M56.491 97.9003C55.9787 98.4188 55.9836 99.2544 56.502 99.7667C57.0204 100.279 57.856 100.274 58.3684 99.7557L56.491 97.9003ZM58.3684 99.7557C95.2998 62.3872 167.145 22.5552 262.521 24.8226C357.866 27.0894 476.886 71.4359 608.152 202.702L610.019 200.835C478.39 69.2069 358.756 24.4703 262.583 22.1839C166.441 19.8982 93.9055 60.0431 56.491 97.9003L58.3684 99.7557ZM608.152 202.702C659.081 253.63 745.561 316.374 854.039 335.011C962.594 353.661 1092.99 328.107 1231.57 202.747L1229.8 200.79C1091.77 325.655 962.172 350.911 854.486 332.41C746.722 313.896 660.711 251.528 610.019 200.835L608.152 202.702Z"
            fill="#4E4E4E"
          />
          <path
            d="M74.9676 93.6184C74.4552 94.1368 74.4601 94.9724 74.9786 95.4847C75.497 95.9971 76.3326 95.9922 76.8449 95.4738L74.9676 93.6184ZM76.8449 95.4738C113.776 58.1052 185.621 18.2732 280.997 20.5407C376.342 22.8074 495.363 67.1539 626.629 198.42L628.495 196.553C496.867 64.9249 377.232 20.1883 281.06 17.9019C184.918 15.6162 112.382 55.7611 74.9676 93.6184L76.8449 95.4738ZM626.629 198.42C677.557 249.348 764.038 312.092 872.515 330.729C981.071 349.379 1111.47 323.825 1250.05 198.465L1248.28 196.508C1110.24 321.373 980.648 346.629 872.962 328.128C765.199 309.614 679.188 247.246 628.495 196.553L626.629 198.42Z"
            fill="#4E4E4E"
          />
          <path
            d="M93.4436 89.3361C92.9313 89.8545 92.9362 90.6902 93.4546 91.2025C93.973 91.7149 94.8086 91.7099 95.321 91.1915L93.4436 89.3361ZM95.321 91.1915C132.252 53.823 204.097 13.991 299.473 16.2584C394.818 18.5252 513.839 62.8717 645.105 194.138L646.971 192.271C515.343 60.6427 395.709 15.9061 299.536 13.6197C203.394 11.334 130.858 51.4789 93.4436 89.3361L95.321 91.1915ZM645.105 194.138C696.033 245.066 782.514 307.81 890.991 326.447C999.547 345.097 1129.94 319.542 1268.53 194.183L1266.76 192.226C1128.72 317.091 999.124 342.347 891.438 323.846C783.675 305.332 697.664 242.963 646.971 192.271L645.105 194.138Z"
            fill="#4E4E4E"
          />
          <path
            d="M111.92 85.0541C111.408 85.5726 111.413 86.4082 111.931 86.9205C112.45 87.4329 113.285 87.428 113.798 86.9095L111.92 85.0541ZM113.798 86.9095C150.729 49.541 222.574 9.70898 317.95 11.9764C413.295 14.2432 532.316 58.5897 663.582 189.856L665.448 187.989C533.819 56.3607 414.185 11.6241 318.013 9.33769C221.871 7.05201 149.335 47.1969 111.92 85.0541L113.798 86.9095ZM663.582 189.856C714.51 240.784 800.99 303.528 909.468 322.165C1018.02 340.815 1148.42 315.26 1287 189.901L1285.23 187.944C1147.2 312.809 1017.6 338.065 909.915 319.564C802.151 301.05 716.14 238.682 665.448 187.989L663.582 189.856Z"
            fill="#4E4E4E"
          />
          <path
            d="M130.397 80.7719C129.884 81.2903 129.889 82.1259 130.408 82.6383C130.926 83.1507 131.762 83.1457 132.274 82.6273L130.397 80.7719ZM132.274 82.6273C169.206 45.2588 241.05 5.42676 336.426 7.69422C431.772 9.96095 550.792 54.3075 682.058 185.573L683.924 183.707C552.296 52.0785 432.662 7.34186 336.489 5.05546C240.347 2.76979 167.811 42.9146 130.397 80.7719L132.274 82.6273ZM682.058 185.573C732.987 236.502 819.467 299.246 927.945 317.883C1036.5 336.533 1166.9 310.978 1305.48 185.619L1303.71 183.661C1165.67 308.527 1036.08 333.782 928.391 315.282C820.628 296.767 734.617 234.399 683.924 183.707L682.058 185.573Z"
            fill="#4E4E4E"
          />
          <path
            d="M148.873 76.4899C148.361 77.0084 148.366 77.844 148.884 78.3563C149.403 78.8687 150.238 78.8638 150.751 78.3453L148.873 76.4899ZM150.751 78.3453C187.682 40.9768 259.527 1.14477 354.903 3.41224C450.248 5.67897 569.269 50.0255 700.535 181.291L702.401 179.425C570.773 47.7965 451.138 3.05988 354.966 0.77348C258.824 -1.51219 186.288 38.6327 148.873 76.4899L150.751 78.3453ZM700.535 181.291C751.463 232.22 837.943 294.964 946.421 313.601C1054.98 332.251 1185.37 306.696 1323.96 181.337L1322.19 179.379C1184.15 304.245 1054.55 329.5 946.868 311C839.105 292.485 753.093 230.117 702.401 179.425L700.535 181.291Z"
            fill="#4E4E4E"
          />
        </svg>
      </span>
      <div className=" tradex-absolute tradex-left-0 tradex-bottom-0">
        <img
          src="/LeftBall.png"
          className=" tradex-h-[230px] tradex-w-full"
          alt=""
        />
      </div>
      <div className="tradex-relative tradex-z-10 tradex-space-y-6">
        <div className="profle-are-top container-4xl">
          <h2 className="!tradex-text-white tradex-text-[28px] sm:tradex-text-[36px] md:tradex-text-[44px] lg:tradex-text-[48px] tradex-font-medium">
            {title}
          </h2>
        </div>
        <WalletOverViewMenuTab />
      </div>
      <div className="tradex-absolute tradex-right-0 tradex-top-0">
        <img
          src="/RightBall.png"
          className=" tradex-h-[150px] tradex-w-full"
          alt=""
        />
      </div>
    </div>
  );
}
