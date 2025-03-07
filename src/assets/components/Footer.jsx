import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-400 to-blue-500 p-10">
        <div className="flex items-center justify-center flex-col p-6 text-white">
          <div className="text-2xl">1% of the Industry</div>
          <div className="font-bold text-3xl text-center">
            Welcome to your new digital reality. <br />
            Now.
          </div>
          <form className="mt-8 rounded-md flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="p-2 bg-white text-black outline-none mb-2 md:mb-0 md:mr-2"
            />
            <button className="pl-4 pr-4 p-2 text-white bg-orange-400 rounded-md cursor-pointer">
              Submit
            </button>
          </form>
          <div className="flex gap-8 mt-8  text-center">
            <div className="flex gap-2 items-center justify-center">
              {" "}
              <IoIosCheckmark className="text-blue-700 text-xl font-semibold" />{" "}
              <p>Instant results</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              {" "}
              <IoIosCheckmark className="text-blue-700 text-xl font-semibold" />{" "}
              <p>User-friendly interface</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              {" "}
              <IoIosCheckmark className="text-blue-700 text-xl font-semibold" />{" "}
              <p>Personalized customization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-7 flex items-center justify-center">
        <svg
          width="1184"
          height="48"
          viewBox="0 0 1184 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.116 16.7003C22.2353 16.7003 18.4217 20.4054 18.4217 25.3654C18.4217 30.3254 22.1389 33.9988 27.116 33.9988C32.0931 33.9988 35.875 30.262 35.875 25.3337C35.875 20.4371 32.1577 16.7003 27.116 16.7003ZM27.1489 30.4242C24.3695 30.4242 22.3328 28.2656 22.3328 25.3666C22.3328 22.4348 24.3366 20.2774 27.116 20.2774C29.9283 20.2774 31.9638 22.4677 31.9638 25.3666C31.9638 28.2656 29.9283 30.4242 27.1489 30.4242ZM36.9409 20.47H39.3652V33.678H43.2435V17.0223H36.9409V20.47ZM8.66141 20.2761C10.6981 20.2761 12.314 21.5323 12.9275 23.4007H17.0326C16.2886 19.4066 12.9921 16.7003 8.69434 16.7003C3.8136 16.7003 0 20.4054 0 25.3666C0 30.3279 3.71726 34 8.69434 34C12.8958 34 16.2569 31.2938 17.0008 27.2667H12.9275C12.3457 29.1351 10.7298 30.4242 8.69314 30.4242C5.88079 30.4242 3.90994 28.2656 3.90994 25.3666C3.91117 22.4348 5.8503 20.2761 8.66141 20.2761ZM110.63 23.7556L107.786 23.3373C106.429 23.1446 105.459 22.6933 105.459 21.6299C105.459 20.47 106.72 19.8907 108.432 19.8907C110.307 19.8907 111.503 20.6957 111.762 22.0165H115.511C115.09 18.6663 112.504 16.7016 108.53 16.7016C104.425 16.7016 101.71 18.7956 101.71 21.7591C101.71 24.5934 103.488 26.2374 107.075 26.7521L109.919 27.1704C111.309 27.3631 112.085 27.9119 112.085 28.9424C112.085 30.2632 110.728 30.8108 108.853 30.8108C106.558 30.8108 105.265 29.8766 105.071 28.4595H101.257C101.614 31.7133 104.166 34 108.82 34C113.055 34 115.866 32.067 115.866 28.7485C115.866 25.7849 113.83 24.2385 110.63 23.7556ZM41.3044 10.161C39.8824 10.161 38.8155 11.1915 38.8155 12.6087C38.8155 14.0258 39.8812 15.0563 41.3044 15.0563C42.7264 15.0563 43.7936 14.0258 43.7936 12.6087C43.7936 11.1915 42.7264 10.161 41.3044 10.161ZM98.2196 22.725C98.2196 19.1175 96.0221 16.7016 91.368 16.7016C86.9726 16.7016 84.5163 18.9249 84.0311 22.3396H87.8775C88.0714 21.0189 89.1056 19.9237 91.3035 19.9237C93.2756 19.9237 94.245 20.7932 94.245 21.8567C94.245 23.2422 92.4667 23.5958 90.2692 23.8215C87.2959 24.1434 83.6115 25.1739 83.6115 29.04C83.6115 32.0365 85.842 33.9683 89.3974 33.9683C92.1765 33.9683 93.9217 32.8085 94.7951 30.9718C94.9245 32.6146 96.1526 33.678 97.866 33.678H100.128V30.2315H98.2207V22.725H98.2196ZM94.4059 26.9131C94.4059 29.1363 92.4667 30.7791 90.1069 30.7791C88.6522 30.7791 87.4241 30.1669 87.4241 28.879C87.4241 27.2362 89.3959 26.785 91.206 26.5923C92.9512 26.4313 93.9206 26.0447 94.4059 25.3032V26.9131ZM73.8184 16.7003C71.6524 16.7003 69.8426 17.6028 68.55 19.1163V10H64.6717V33.678H68.4851V31.4877C69.7777 33.0658 71.6209 34 73.8184 34C78.4721 34 81.9956 30.3279 81.9956 25.3666C81.9956 20.4054 78.4076 16.7003 73.8184 16.7003ZM73.2367 30.4242C70.4572 30.4242 68.4206 28.2656 68.4206 25.3666C68.4206 22.4677 70.4891 20.2774 73.2682 20.2774C76.0807 20.2774 78.0514 22.436 78.0514 25.3666C78.0514 28.2656 76.0159 30.4242 73.2367 30.4242ZM55.3954 16.7003C52.8746 16.7003 51.2257 17.7309 50.2564 19.1809V17.0223H46.4096V33.6768H50.2879V24.6252C50.2879 22.0799 51.9037 20.2761 54.2955 20.2761C56.526 20.2761 57.915 21.8543 57.915 24.1422V33.678H61.7932V23.8531C61.7947 19.6639 59.6299 16.7003 55.3954 16.7003ZM134.353 24.8191C134.353 20.0517 130.863 16.7016 126.176 16.7016C121.199 16.7016 117.546 20.4383 117.546 25.3666C117.546 30.5535 121.457 34 126.241 34C130.281 34 133.448 31.6157 134.256 28.2339H130.215C129.633 29.7156 128.211 30.5535 126.304 30.5535C123.815 30.5535 121.94 29.0071 121.521 26.3008H134.352V24.8191H134.353ZM121.747 23.53C122.362 21.2103 124.107 20.0835 126.111 20.0835C128.309 20.0835 129.99 21.3396 130.377 23.53H121.747Z"
            fill="#0052FF"
          />
          <g clip-path="url(#clip0_1_22430)">
            <path
              d="M238.273 3.0791C226.675 3.0791 217.272 12.4813 217.272 24.0792C217.272 35.6777 226.675 45.0791 238.273 45.0791C249.872 45.0791 259.273 35.6777 259.273 24.0792C259.273 12.482 249.872 3.0801 238.272 3.0801L238.273 3.0791ZM247.903 33.3673C247.527 33.9842 246.72 34.1798 246.103 33.8011C241.172 30.7894 234.965 30.1073 227.655 31.7774C226.951 31.9379 226.248 31.4966 226.088 30.7919C225.927 30.0872 226.366 29.3851 227.072 29.2246C235.072 27.3969 241.934 28.1839 247.469 31.5668C248.086 31.9454 248.282 32.7504 247.903 33.3673ZM250.474 27.6492C250 28.4196 248.992 28.6628 248.222 28.1889C242.577 24.7192 233.972 23.7144 227.295 25.7411C226.429 26.0026 225.515 25.5146 225.252 24.6502C224.991 23.7843 225.48 22.8715 226.344 22.6082C233.971 20.2941 243.452 21.415 249.935 25.3985C250.704 25.8725 250.948 26.8806 250.474 27.6495V27.6492ZM250.694 21.6949C243.926 17.6748 232.759 17.3051 226.297 19.2664C225.259 19.5811 224.162 18.9953 223.848 17.9576C223.533 16.9194 224.118 15.8228 225.157 15.5073C232.575 13.2554 244.907 13.6905 252.699 18.3165C253.634 18.8704 253.94 20.0759 253.386 21.008C252.834 21.9414 251.626 22.2491 250.695 21.6949H250.694ZM274.407 22.4653C270.781 21.6006 270.137 20.9937 270.137 19.7186C270.137 18.5139 271.27 17.7031 272.958 17.7031C274.593 17.7031 276.213 18.3187 277.913 19.5861C277.963 19.6245 278.029 19.6398 278.091 19.6298C278.156 19.6203 278.212 19.5854 278.249 19.533L280.02 17.0373C280.092 16.9345 280.072 16.7928 279.975 16.7143C277.951 15.0911 275.674 14.3019 273.011 14.3019C269.096 14.3019 266.36 16.6514 266.36 20.013C266.36 23.6178 268.72 24.8942 272.797 25.8795C276.266 26.6787 276.852 27.3483 276.852 28.545C276.852 29.8716 275.669 30.6966 273.763 30.6966C271.646 30.6966 269.919 29.9819 267.988 28.3118C267.94 28.2691 267.875 28.2516 267.815 28.2541C267.749 28.2591 267.692 28.2892 267.652 28.3368L265.665 30.6991C265.583 30.7994 265.593 30.9449 265.688 31.0301C267.935 33.0363 270.698 34.0945 273.683 34.0945C277.901 34.0945 280.627 31.79 280.627 28.2215C280.634 25.2105 278.831 23.5428 274.415 22.4685L274.407 22.4653ZM290.171 18.8893C288.343 18.8893 286.843 19.6095 285.604 21.0853V19.4242C285.604 19.293 285.499 19.1862 285.369 19.1862H282.121C281.991 19.1862 281.885 19.293 281.885 19.4242V37.8812C281.885 38.0116 281.991 38.1194 282.121 38.1194H285.369C285.499 38.1194 285.604 38.0116 285.604 37.8812V32.0558C286.843 33.4425 288.343 34.1221 290.171 34.1221C293.569 34.1221 297.009 31.5066 297.009 26.5064C297.014 21.5053 293.574 18.889 290.173 18.889L290.171 18.8893ZM293.233 26.5064C293.233 29.0515 291.665 30.8295 289.419 30.8295C287.199 30.8295 285.524 28.9713 285.524 26.5064C285.524 24.0414 287.199 22.1836 289.419 22.1836C291.628 22.1834 293.233 24.001 293.233 26.5062V26.5064ZM305.824 18.8893C301.448 18.8893 298.02 22.2586 298.02 26.5609C298.02 30.817 301.426 34.1497 305.771 34.1497C310.162 34.1497 313.601 30.7919 313.601 26.5064C313.601 22.2356 310.185 18.8898 305.824 18.8898V18.8893ZM305.824 30.8546C303.497 30.8546 301.742 28.9838 301.742 26.5052C301.742 24.0153 303.437 22.2085 305.771 22.2085C308.114 22.2085 309.879 24.0785 309.879 26.5596C309.879 29.049 308.174 30.8546 305.824 30.8546ZM322.944 19.1862H319.371V15.5334C319.371 15.4025 319.265 15.2957 319.135 15.2957H315.888C315.757 15.2957 315.649 15.4025 315.649 15.5334V19.1862H314.09C313.959 19.1862 313.854 19.293 313.854 19.4242V22.2145C313.854 22.3454 313.959 22.4525 314.09 22.4525H315.649V29.6734C315.649 32.5899 317.101 34.0695 319.968 34.0695C321.131 34.0695 322.097 33.8287 323.007 33.3121C323.082 33.272 323.127 33.1918 323.127 33.1065V30.4483C323.127 30.3681 323.085 30.2903 323.014 30.2477C322.944 30.2026 322.856 30.2001 322.784 30.2377C322.159 30.5511 321.555 30.6966 320.878 30.6966C319.837 30.6966 319.371 30.2226 319.371 29.1644V22.4537H322.944C323.075 22.4537 323.18 22.3469 323.18 22.2157V19.4257C323.185 19.2945 323.08 19.1877 322.947 19.1877L322.944 19.1862ZM335.393 19.2005V18.7518C335.393 17.432 335.899 16.8435 337.033 16.8435C337.71 16.8435 338.254 16.9779 338.863 17.181C338.938 17.2046 339.016 17.1928 339.076 17.1479C339.139 17.103 339.174 17.031 339.174 16.9548V14.2189C339.174 14.1143 339.109 14.0218 339.006 13.9909C338.364 13.7996 337.542 13.6032 336.308 13.6032C333.311 13.6032 331.724 15.2919 331.724 18.485V19.1721H330.164C330.034 19.1721 329.926 19.279 329.926 19.4099V22.2145C329.926 22.3454 330.034 22.4525 330.164 22.4525H331.724V33.588C331.724 33.7209 331.832 33.8262 331.962 33.8262H335.207C335.34 33.8262 335.445 33.7209 335.445 33.588V22.4532H338.477L343.121 33.588C342.595 34.7566 342.076 34.9898 341.368 34.9898C340.797 34.9898 340.192 34.8193 339.578 34.4807C339.52 34.4506 339.45 34.4456 339.39 34.4632C339.327 34.4858 339.275 34.5309 339.249 34.5911L338.149 37.006C338.096 37.1214 338.141 37.2543 338.251 37.3145C339.4 37.9364 340.436 38.2022 341.717 38.2022C344.114 38.2022 345.441 37.0837 346.607 34.0795L352.239 19.5255C352.27 19.4522 352.259 19.3695 352.214 19.3045C352.172 19.2401 352.099 19.2012 352.021 19.2012H348.641C348.538 19.2012 348.448 19.2657 348.415 19.3607L344.952 29.2496L341.16 19.3542C341.125 19.2622 341.037 19.2012 340.94 19.2012H335.393V19.2005ZM328.175 19.1862H324.928C324.797 19.1862 324.69 19.293 324.69 19.4242V33.588C324.69 33.7209 324.797 33.8262 324.928 33.8262H328.175C328.306 33.8262 328.414 33.7209 328.414 33.588V19.4252C328.414 19.294 328.308 19.1872 328.175 19.1872V19.1862ZM326.57 12.7366C325.284 12.7366 324.241 13.7778 324.241 15.064C324.241 16.3509 325.284 17.3934 326.57 17.3934C327.857 17.3934 328.898 16.3509 328.898 15.064C328.898 13.778 327.854 12.7366 326.57 12.7366ZM355.013 23.7404C353.729 23.7404 352.728 22.7085 352.728 21.4554C352.728 20.2023 353.742 19.1586 355.026 19.1586C356.309 19.1586 357.31 20.1903 357.31 21.4424C357.31 22.6955 356.297 23.7404 355.013 23.7404ZM355.026 19.3858C353.854 19.3858 352.969 20.3161 352.969 21.4554C352.969 22.5942 353.849 23.512 355.013 23.512C356.184 23.512 357.069 22.5824 357.069 21.4424C357.069 20.3036 356.189 19.3858 355.026 19.3858ZM355.532 21.6773L356.179 22.5821H355.632L355.051 21.7521H354.552V22.5821H354.095V20.1837H355.163C355.723 20.1837 356.089 20.4689 356.089 20.9488C356.091 21.3421 355.863 21.5823 355.535 21.6773H355.532ZM355.146 20.5953H354.552V21.3538H355.146C355.442 21.3538 355.62 21.2086 355.62 20.9742C355.62 20.7274 355.442 20.5953 355.146 20.5953Z"
              fill="#1ED760"
            />
          </g>
          <g clip-path="url(#clip1_1_22430)">
            <path
              d="M477.325 32.4265L478.793 28.995C480.401 30.1854 482.497 30.8155 484.594 30.8155C486.132 30.8155 487.111 30.2205 487.111 29.3103C487.076 26.7891 477.849 28.7499 477.779 22.4113C477.744 19.1898 480.61 16.7037 484.665 16.7037C487.076 16.7037 489.488 17.2992 491.2 18.665L489.828 22.1697C488.252 21.1567 486.307 20.4504 484.455 20.4504C483.197 20.4504 482.357 21.0454 482.357 21.8163C482.393 24.3024 491.689 22.9366 491.794 28.995C491.794 32.2866 488.998 34.5978 485.014 34.5978C482.078 34.5978 479.387 33.8976 477.325 32.4265H477.325ZM535.783 27.7524C535.413 28.4109 534.873 28.9589 534.221 29.3403C533.569 29.7217 532.827 29.9227 532.071 29.9228C529.717 29.9228 527.808 28.0101 527.808 25.6508C527.808 23.2914 529.717 21.3787 532.071 21.3787C532.827 21.3788 533.569 21.5798 534.221 21.9612C534.873 22.3426 535.413 22.8906 535.783 23.5491L539.865 21.2835C538.336 18.5513 535.42 16.7037 532.071 16.7037C527.14 16.7037 523.142 20.7091 523.142 25.6508C523.142 30.5919 527.14 34.5978 532.071 34.5978C535.42 34.5978 538.336 32.7502 539.865 30.018L535.783 27.7524ZM494.443 34.2474H499.545V9.25586H494.443L494.443 34.2474ZM542.442 9.25586V34.2474H547.544V26.76L553.59 34.2474H560.113L552.424 25.3525L559.553 17.0526H553.311L547.544 23.9531V9.25586H542.442ZM515.266 17.0536V19.0851C514.427 17.6841 512.365 16.7037 510.198 16.7037C505.725 16.7037 502.195 20.661 502.195 25.6332C502.195 30.6055 505.725 34.5978 510.198 34.5978C512.365 34.5978 514.427 33.6174 515.266 32.2164V34.2474H520.368V17.0536H515.266ZM515.266 27.787C514.532 29.0125 512.994 29.9223 511.282 29.9223C508.926 29.9223 507.018 28.0101 507.018 25.6508C507.018 23.2914 508.926 21.3787 511.282 21.3787C512.994 21.3787 514.532 22.3241 515.266 23.5842V27.787Z"
              fill="black"
            />
            <path
              d="M450.378 8.70361C448.725 8.70361 447.384 10.0469 447.384 11.7035C447.384 12.0971 447.461 12.4868 447.611 12.8506C447.762 13.2143 447.982 13.5449 448.26 13.8235C448.538 14.1021 448.868 14.3231 449.232 14.4741C449.595 14.6251 449.985 14.703 450.378 14.7034H453.373V11.7035C453.373 10.9086 453.058 10.1461 452.497 9.58348C451.935 9.0209 451.173 8.70441 450.378 8.70361ZM450.378 16.7033H442.394C440.741 16.7033 439.4 18.0466 439.4 19.7037C439.4 21.3603 440.741 22.7036 442.394 22.7036H450.379C452.032 22.7036 453.373 21.3603 453.373 19.7037C453.373 18.0466 452.032 16.7033 450.378 16.7033Z"
              fill="#36C5F0"
            />
            <path
              d="M469.341 19.7037C469.341 18.0466 468 16.7033 466.347 16.7033C464.693 16.7033 463.353 18.0466 463.353 19.7037V22.7036H466.347C467.142 22.7028 467.904 22.3863 468.465 21.8237C469.027 21.2612 469.342 20.4986 469.341 19.7037ZM461.357 19.7037V11.7035C461.358 10.9086 461.043 10.1461 460.481 9.58348C459.919 9.0209 459.157 8.70441 458.363 8.70361C456.709 8.70361 455.369 10.0469 455.369 11.7035V19.7032C455.369 21.3608 456.709 22.7041 458.363 22.7041C459.157 22.7033 459.919 22.3868 460.481 21.8242C461.043 21.2617 461.358 20.4991 461.357 19.7042"
              fill="#2EB67D"
            />
            <path
              d="M458.363 38.7036C459.157 38.7028 459.919 38.3863 460.481 37.8237C461.043 37.2612 461.358 36.4986 461.357 35.7037C461.358 34.9088 461.043 34.1463 460.481 33.5837C459.919 33.0211 459.157 32.7046 458.363 32.7038H455.369V35.7037C455.369 37.3603 456.709 38.7036 458.363 38.7036ZM458.363 30.7039H466.347C468 30.7039 469.341 29.3606 469.341 27.7035C469.342 26.9086 469.027 26.1461 468.465 25.5835C467.904 25.0209 467.142 24.7044 466.347 24.7036H458.363C456.709 24.7036 455.369 26.0469 455.369 27.7035C455.368 28.0971 455.445 28.4868 455.596 28.8506C455.746 29.2143 455.966 29.5449 456.244 29.8235C456.522 30.1021 456.853 30.3231 457.216 30.4741C457.579 30.6251 457.969 30.703 458.363 30.7034"
              fill="#ECB22E"
            />
            <path
              d="M439.4 27.7035C439.4 28.0971 439.477 28.4868 439.627 28.8506C439.777 29.2143 439.998 29.5449 440.276 29.8235C440.554 30.1021 440.884 30.3231 441.247 30.4741C441.611 30.6251 442 30.703 442.394 30.7034C443.189 30.7026 443.951 30.3861 444.512 29.8235C445.074 29.261 445.389 28.4984 445.388 27.7035V24.7036H442.394C440.74 24.7036 439.4 26.0469 439.4 27.7035ZM447.384 27.7035V35.7032C447.384 37.3603 448.724 38.7036 450.378 38.7036C451.173 38.7028 451.935 38.3863 452.496 37.8237C453.058 37.2612 453.373 36.4986 453.372 35.7037V27.7035C453.373 27.3099 453.296 26.9201 453.145 26.5563C452.995 26.1925 452.775 25.8619 452.497 25.5833C452.219 25.3048 451.888 25.0837 451.525 24.9327C451.161 24.7818 450.772 24.7039 450.378 24.7036C448.724 24.7036 447.384 26.0469 447.384 27.7035Z"
              fill="#E01E5A"
            />
          </g>
          <g clip-path="url(#clip2_1_22430)">
            <path
              d="M687.65 14.0131H695.272C700.132 14.0131 704.146 16.8247 704.146 23.2442V24.5931C704.146 31.0613 700.392 33.9704 695.419 33.9704H687.65V14.0131ZM691.908 17.6373V30.33H695.175C697.938 30.33 699.79 28.526 699.79 24.5118V23.4555C699.79 19.4412 697.84 17.6373 695.029 17.6373H691.908ZM706.405 17.8323H709.818L710.37 21.5865C711.021 19.0349 712.678 17.6698 715.685 17.6698H716.741V21.9765H714.986C711.524 21.9765 710.679 23.1792 710.679 26.5921V34.0192H706.47V17.8323H706.405ZM717.586 26.2508V25.7957C717.586 20.3838 721.048 17.426 725.761 17.426C730.572 17.426 733.936 20.3838 733.936 25.7957V26.2508C733.936 31.5652 730.669 34.4255 725.761 34.4255C720.544 34.3767 717.586 31.5814 717.586 26.2508ZM729.629 26.202V25.7957C729.629 22.7891 728.118 20.9852 725.712 20.9852C723.356 20.9852 721.796 22.6429 721.796 25.7957V26.202C721.796 29.1111 723.307 30.7688 725.712 30.7688C728.118 30.7201 729.629 29.1111 729.629 26.202ZM736.146 17.8323H739.656L740.063 20.8877C740.908 18.8399 742.712 17.426 745.377 17.426C749.489 17.426 752.203 20.3838 752.203 25.8607V26.3158C752.203 31.6302 749.196 34.4417 745.377 34.4417C742.825 34.4417 741.07 33.2879 740.209 31.4351V39.6098H736.097L736.146 17.8323ZM747.929 26.202V25.8445C747.929 22.6266 746.271 21.0339 744.061 21.0339C741.704 21.0339 740.144 22.8379 740.144 25.8445V26.1533C740.144 29.0136 741.655 30.8176 744.012 30.8176C746.433 30.7688 747.929 29.2249 747.929 26.202ZM758.427 31.0288L758.07 33.9867H754.462V12.4204H758.574V20.6926C759.484 18.5799 761.288 17.426 763.839 17.426C767.707 17.4748 770.567 20.1401 770.567 25.5032V26.007C770.567 31.3701 767.853 34.4417 763.742 34.4417C761.028 34.3767 759.272 33.1253 758.427 31.0288ZM766.244 26.007V25.6007C766.244 22.6429 764.636 20.9852 762.377 20.9852C760.069 20.9852 758.46 22.8379 758.46 25.6495V26.007C758.46 29.0136 760.02 30.7688 762.328 30.7688C764.798 30.7688 766.244 29.2249 766.244 26.007ZM772.371 26.2508V25.7957C772.371 20.3838 775.833 17.426 780.546 17.426C785.357 17.426 788.721 20.3838 788.721 25.7957V26.2508C788.721 31.5652 785.405 34.4255 780.546 34.4255C775.329 34.3767 772.371 31.5814 772.371 26.2508ZM784.447 26.202V25.7957C784.447 22.7891 782.935 20.9852 780.53 20.9852C778.173 20.9852 776.613 22.6429 776.613 25.7957V26.202C776.613 29.1111 778.125 30.7688 780.53 30.7688C782.951 30.7201 784.447 29.1111 784.447 26.202ZM794.23 25.6007L788.558 17.8323H793.418L796.684 22.6916L800 17.8323H804.81L799.057 25.5519L805.119 33.9867H800.357L796.652 28.6236L793.044 33.9867H788.071L794.23 25.6007Z"
              fill="black"
            />
            <path
              d="M661.452 14.0132L652.026 20.0264L661.452 26.0396L652.026 32.0528L642.6 26.0071L652.026 19.9939L642.6 14.0132L652.026 8L661.452 14.0132ZM651.977 33.9868L661.403 27.9736L670.83 33.9868L661.403 40L651.977 33.9868ZM661.452 26.0071L670.878 19.9939L661.452 14.0132L670.83 8L680.256 14.0132L670.83 20.0264L680.256 26.0396L670.83 32.0528L661.452 26.0071Z"
              fill="#0061FF"
            />
          </g>
          <g clip-path="url(#clip3_1_22430)">
            <path
              d="M925.046 21.4076C925.046 19.346 922.985 17.1469 919.549 17.1469C915.7 17.1469 911.302 20.0332 910.615 25.8057C909.928 31.5782 913.501 34.1896 917.212 34.1896C920.923 34.1896 922.71 32.8152 924.634 30.891C922.985 28.8294 920.786 29.7915 920.373 29.9289C919.961 30.2038 919.274 30.4787 918.174 30.4787C916.8 30.4787 915.288 29.7915 915.288 27.1801C924.359 26.218 925.046 23.4692 925.046 21.4076ZM920.648 21.6825C920.648 22.3697 920.373 23.4692 915.838 24.019C916.8 20.5829 918.587 20.3081 919.411 20.3081C920.236 20.4455 920.648 20.9953 920.648 21.6825ZM905.392 22.2322C905.392 22.2322 903.468 28.2796 903.331 28.8294C903.331 28.2796 901.819 17.4218 901.819 17.4218C898.52 17.4218 896.734 19.7583 895.909 22.2322C895.909 22.2322 893.572 28.2796 893.435 28.8294C893.298 28.4171 893.023 22.3697 893.023 22.3697C892.748 19.346 889.999 17.4218 887.8 17.4218L890.549 33.9147C893.985 33.9147 895.909 31.5782 896.871 29.1043C896.871 29.1043 898.933 23.7441 899.07 23.4692C899.07 23.7441 900.582 33.9147 900.582 33.9147C904.018 33.9147 905.942 31.7156 906.904 29.3791L911.715 17.4218C908.141 17.4218 906.354 19.7583 905.392 22.2322ZM937.828 17.0095C935.767 17.0095 934.118 18.109 932.743 19.8957L933.843 10C930.956 10 928.757 12.4739 928.208 16.0474L926.009 33.7772C927.658 33.7772 929.307 33.3649 930.269 32.128C931.094 33.2275 932.331 34.0521 934.118 34.0521C938.928 34.0521 942.227 28.5545 942.227 23.3318C942.364 18.5213 940.027 17.0095 937.828 17.0095ZM937.279 25.5308C936.729 28.4171 935.217 30.3412 933.568 30.3412C932.056 30.3412 931.369 29.654 931.369 29.654C931.644 27.1801 931.918 25.5308 932.468 24.1564C933.018 22.782 934.392 20.7204 935.767 20.7204C937.141 20.8578 937.828 22.6446 937.279 25.5308ZM954.321 17.4218H951.023V17.2844C951.298 15.0853 951.71 13.9858 953.497 13.8483C954.596 13.7109 955.146 13.1611 955.283 12.4739C955.421 11.9242 955.696 10.1374 955.696 10.1374C948.961 10.1374 946.9 13.0237 946.35 17.4218V17.5592H946.212C945.113 17.5592 943.876 18.7962 943.738 20.3081L943.601 20.8578H945.8L943.876 36.2512L943.326 39C943.463 39 943.463 39 943.601 39C946.762 38.8626 948.686 36.3886 949.236 32.8152L950.748 20.7204H951.847C952.809 20.7204 954.046 19.7583 954.321 17.9716V17.4218ZM971.639 17.1469C967.791 17.1469 964.217 20.0332 963.118 24.4313C962.018 28.8294 963.667 34.1896 969.302 34.1896C974.937 34.1896 978.236 28.6919 978.236 24.1564C978.099 19.6209 975.075 17.1469 971.639 17.1469ZM973.151 25.3934C973.013 27.455 972.051 30.4787 969.577 30.4787C967.103 30.4787 967.516 26.9052 967.653 25.2559C967.928 23.4692 968.89 20.8578 971.089 20.8578C973.151 20.8578 973.426 23.1943 973.151 25.3934ZM997.203 22.2322C997.203 22.2322 995.279 28.2796 995.141 28.8294C995.141 28.2796 993.629 17.4218 993.629 17.4218C990.331 17.4218 988.544 19.7583 987.719 22.2322C987.719 22.2322 985.383 28.2796 985.245 28.8294C985.245 28.4171 984.833 22.3697 984.833 22.3697C984.696 19.346 981.809 17.5592 979.61 17.5592L982.359 34.0521C985.795 34.0521 987.719 31.7156 988.682 29.2417C988.682 29.2417 990.743 23.8815 990.881 23.6066C990.881 23.8815 992.392 34.0521 992.392 34.0521C995.828 34.0521 997.753 31.8531 998.715 29.5166L1003.25 17.4218C999.814 17.4218 998.027 19.7583 997.203 22.2322ZM957.482 10.1374L954.734 32.6777L954.184 35.4265C954.321 35.4265 954.321 35.4265 954.459 35.4265C957.482 35.4265 959.682 32.6777 959.956 29.3791L961.606 16.4597C962.018 12.6114 959.544 10.1374 957.482 10.1374Z"
              fill="#1B1B1B"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1165.71 20.5972C1166.08 21.2429 1166.2 21.9774 1166.24 22.8032L1166.3 23.9039V31.6007L1166.35 32.7025C1166.46 34.502 1167.79 35.8325 1169.6 35.9457L1170.7 36V23.9039L1170.75 22.8032C1170.8 21.9867 1170.92 21.2382 1171.3 20.588C1171.68 19.921 1172.24 19.3677 1172.91 18.9835C1173.58 18.5993 1174.34 18.3978 1175.11 18.3992C1175.88 18.4006 1176.64 18.6049 1177.3 18.9915C1177.97 19.3781 1178.52 19.9335 1178.91 20.6018C1179.28 21.2475 1179.4 21.9959 1179.44 22.8032L1179.5 23.9005V31.6007L1179.55 32.7025C1179.67 34.5112 1180.98 35.8418 1182.8 35.9457L1183.9 36V22.8032C1183.9 20.4697 1182.97 18.2317 1181.32 16.5813C1179.67 14.9309 1177.43 14.0032 1175.1 14.0023C1173.85 14.001 1172.62 14.2662 1171.48 14.7803C1170.34 15.2944 1169.32 16.0454 1168.5 16.9833C1167.67 16.0458 1166.66 15.2949 1165.52 14.7807C1164.38 14.2665 1163.15 14.0007 1161.9 14.0012C1160.07 14.0012 1158.38 14.5555 1156.97 15.513C1156.12 14.5567 1154.2 14.0012 1153.1 14.0012V36L1154.2 35.9457C1156.04 35.8244 1157.37 34.5297 1157.44 32.7025L1157.5 31.6007V23.9039L1157.55 22.8032C1157.6 21.9728 1157.72 21.2429 1158.09 20.5926C1158.48 19.9261 1159.03 19.3728 1159.7 18.9882C1160.37 18.6035 1161.13 18.4009 1161.9 18.4005C1162.67 18.4006 1163.43 18.6037 1164.1 18.9893C1164.77 19.3748 1165.32 19.9294 1165.71 20.5972ZM1090.4 35.9469L1091.5 36H1108L1107.94 34.9028C1107.8 33.0941 1106.51 31.7728 1104.7 31.655L1103.6 31.6007H1093.7L1106.9 18.3993L1106.84 17.3032C1106.76 15.4761 1105.42 14.1559 1103.6 14.0554L1102.5 14.0058L1086 14.0012L1086.05 15.1019C1086.2 16.8932 1087.5 18.2422 1089.3 18.3462L1090.4 18.4005H1100.3L1087.1 31.6018L1087.15 32.7025C1087.26 34.5159 1088.57 35.8291 1090.4 35.9457V35.9469ZM1148.78 17.2212C1149.8 18.2426 1150.61 19.4552 1151.16 20.7898C1151.72 22.1244 1152 23.5548 1152 24.9994C1152 26.444 1151.72 27.8744 1151.16 29.209C1150.61 30.5436 1149.8 31.7562 1148.78 32.7776C1146.71 34.8399 1143.92 35.9983 1141 35.9983C1138.08 35.9983 1135.28 34.8399 1133.22 32.7776C1128.92 28.4823 1128.92 21.5166 1133.22 17.2212C1134.24 16.2002 1135.45 15.3902 1136.79 14.8375C1138.12 14.2848 1139.55 14.0002 1140.99 14C1142.44 13.999 1143.87 14.2831 1145.21 14.836C1146.54 15.3889 1147.76 16.1999 1148.78 17.2224V17.2212ZM1145.67 20.3362C1146.9 21.5744 1147.6 23.2531 1147.6 25.0035C1147.6 26.7538 1146.9 28.4326 1145.67 29.6707C1144.43 30.908 1142.75 31.6029 1141 31.6029C1139.25 31.6029 1137.57 30.908 1136.33 29.6707C1135.09 28.4326 1134.4 26.7538 1134.4 25.0035C1134.4 23.2531 1135.09 21.5744 1136.33 20.3362C1137.57 19.099 1139.25 18.404 1141 18.404C1142.75 18.404 1144.43 19.099 1145.67 20.3362ZM1117.91 14C1119.35 14.0004 1120.78 14.2851 1122.11 14.8381C1123.45 15.391 1124.66 16.2012 1125.68 17.2224C1129.98 21.5166 1129.98 28.4834 1125.68 32.7776C1123.62 34.8399 1120.82 35.9983 1117.9 35.9983C1114.98 35.9983 1112.18 34.8399 1110.12 32.7776C1105.82 28.4823 1105.82 21.5166 1110.12 17.2212C1111.14 16.2002 1112.35 15.3902 1113.69 14.8375C1115.02 14.2848 1116.45 14.0002 1117.89 14H1117.91ZM1122.57 20.3339C1123.8 21.5721 1124.5 23.2511 1124.5 25.0017C1124.5 26.7524 1123.8 28.4314 1122.57 29.6696C1121.33 30.9068 1119.65 31.6018 1117.9 31.6018C1116.15 31.6018 1114.47 30.9068 1113.23 29.6696C1111.99 28.4314 1111.3 26.7527 1111.3 25.0023C1111.3 23.252 1111.99 21.5732 1113.23 20.335C1114.47 19.0978 1116.15 18.4028 1117.9 18.4028C1119.65 18.4028 1121.33 19.0978 1122.57 20.335V20.3339Z"
            fill="#2D8CFF"
          />
          <defs>
            <clipPath id="clip0_1_22430">
              <rect
                width="140"
                height="48"
                fill="white"
                transform="translate(217.2)"
              />
            </clipPath>
            <clipPath id="clip1_1_22430">
              <rect
                width="121"
                height="48"
                fill="white"
                transform="translate(439.4)"
              />
            </clipPath>
            <clipPath id="clip2_1_22430">
              <rect
                width="163"
                height="48"
                fill="white"
                transform="translate(642.6)"
              />
            </clipPath>
            <clipPath id="clip3_1_22430">
              <rect
                width="116"
                height="48"
                fill="white"
                transform="translate(887.8)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="bg-blue-700 p-6">
        <div className=" text-white flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="text-2xl text-white flex gap-3 mt-6">
              <FaFacebook className="hover:text-amber-400" />
              <FaGoogle className="hover:text-amber-400" />
              <FaApple className="hover:text-amber-400" />
              <FaInstagram className="hover:text-amber-400" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-yellow-600 text-xl font-semibold">
              START A BUSINESS
            </div>
            <ul className="list-none mt-4">
              <li className="hover:underline">Features</li>
              <li className="hover:underline">Solutions</li>
              <li className="hover:underline">Integration</li>
              <li className="hover:underline">Enterprise</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-yellow-600 text-xl font-semibold">
              GOVERNMENT REGISTRATION
            </div>
            <ul className="list-none mt-4">
              <li className="hover:underline">Partners</li>
              <li className="hover:underline">Community</li>
              <li className="hover:underline">Developers</li>
              <li className="hover:underline">App</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-yellow-600 text-xl font-semibold">
              COMPLIANCE & TAX
            </div>
            <ul className="list-none mt-4">
              <li className="hover:underline">Channels</li>
              <li className="hover:underline">Scale</li>
              <li className="hover:underline">Watch the Demo</li>
              <li className="hover:underline">Our Competition</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="text-yellow-600 text-xl font-semibold">
              BIS & CDSCO
            </div>
            <ul className="list-none mt-4">
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">News</li>
              <li className="hover:underline">Leadership</li>
              <li className="hover:underline">Media Kit</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-white ">
          <p> @ 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
