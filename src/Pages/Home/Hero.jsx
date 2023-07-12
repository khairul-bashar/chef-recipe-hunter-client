import React from "react";
const Hero = () => {
  return (
    <>
      <div className="bg-[url('/images/my-image.png')] bg-cover bg-center bg-no-repeat h-screen text-info flex items-center relative">
        <div className="w-[500px] text-center">
          <h2 className="text-3xl font-semibold">Cheerful Restaurants</h2>
          <p className="text-xl font-medium my-6">
            Step into vibrant and cheerful restaurant, where delectable dishes,
            joyful laughter, and lively atmosphere come together
          </p>
          <button className="btn btn-outline text-info capitalize btn-sm rounded-full">
            Order
          </button>
          <button className="btn btn-warning btn-sm text-info capitalize rounded-full ms-3 px-7 ">
            Visit
          </button>
        </div>
        <div className="flex gap-3 bg-white px-5 py-1 rounded-md absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g clip-path="url(#clip0_1_6)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.5955 24.9959C39.5955 29.0324 38.1755 32.4788 35.3312 35.3231C32.4829 38.1714 29.0405 39.5955 25.0041 39.5955C20.9839 39.5955 17.5415 38.1755 14.6891 35.3231C11.8408 32.4788 10.4085 29.0324 10.4085 24.9959C10.4085 20.9717 11.8368 17.5415 14.6891 14.6851C17.5496 11.8368 20.988 10.4045 25.0041 10.4045C29.0405 10.4045 32.4829 11.8327 35.3312 14.6851C38.1714 17.5415 39.5955 20.9717 39.5955 24.9959ZM6.66097 22.3063C7.94271 21.4315 8.58561 20.2881 8.47575 17.6717V10.9456C8.46354 10.0057 6.75863 9.89176 6.67318 10.9456L6.60807 16.4022C6.604 17.4235 5.06999 17.4561 5.07406 16.4022L5.13916 10.7585C5.11881 9.74935 3.49121 9.64762 3.47087 10.7585C3.47087 12.325 3.40576 14.8356 3.40576 16.4022C3.48714 17.391 2.06299 17.5212 2.09961 16.4022L2.16471 10.7951C2.12809 10.0342 1.28988 9.76156 0.720215 10.1196C0.113932 10.5062 0.236003 11.2834 0.211589 11.9385L0 18.3757C0.0325521 20.2474 0.524902 21.7692 1.98975 22.4162C2.21354 22.5138 2.52279 22.5911 2.88086 22.644L2.3763 38.3423C2.34782 39.2741 3.10872 40.035 3.99984 40.035H4.20329C5.20833 40.035 6.05876 39.1764 6.03027 38.1307L5.58675 22.64C6.05469 22.5667 6.44124 22.4569 6.66097 22.3063ZM43.4326 37.8703L43.4082 23.7712C38.4644 20.9147 40.0391 9.90804 44.987 9.96908C51.001 10.0382 51.7131 22.3714 46.5413 23.7264L46.9238 37.9272C46.9971 40.6128 43.4367 40.861 43.4326 37.8703ZM33.5002 24.9837C33.5002 27.3356 32.6742 29.3416 31.0099 31.0059C29.3498 32.6619 27.3437 33.4961 24.9919 33.4961C22.6562 33.4961 20.6502 32.6619 18.9901 31.0059C17.3299 29.3416 16.4998 27.3356 16.4998 24.9837C16.4998 22.6481 17.3299 20.6421 18.9901 18.986C20.6543 17.3299 22.6562 16.4958 24.9919 16.4958C29.716 16.4998 33.5002 20.2555 33.5002 24.9837ZM35.4899 24.9837C35.4899 22.0947 34.4727 19.6248 32.4259 17.5781C30.3792 15.5314 27.9012 14.5142 24.9919 14.5142C22.0907 14.5142 19.6208 15.5314 17.5863 17.5781C15.5396 19.6248 14.5101 22.0947 14.5101 24.9837C14.5101 27.8809 15.5396 30.3507 17.5863 32.4056C19.6208 34.4564 22.0907 35.4858 24.9919 35.4858C27.8971 35.4858 30.3752 34.4564 32.4259 32.4056C34.4686 30.3467 35.4899 27.8768 35.4899 24.9837Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.19703 3.02734C7.77718 3.02734 7.43713 3.36739 7.43713 3.78723C7.43713 4.20707 7.77718 4.54712 8.19703 4.54712H14.7309L16.4367 8.56629H13.0432C12.6233 8.56629 12.2833 8.90633 12.2833 9.32617V24.4049C12.2833 31.3969 17.5034 37.1069 24.1027 37.5184V45.4529H17.3096C16.8898 45.4529 16.5497 45.793 16.5497 46.2128C16.5497 46.6326 16.8898 46.9727 17.3096 46.9727H32.4127C32.8325 46.9727 33.1726 46.6326 33.1727 46.2128C33.1727 45.793 32.8325 45.4529 32.4127 45.4529H25.6226V37.5184C32.2203 37.1037 37.442 31.3937 37.442 24.4049V16.5588C37.4421 16.5534 37.4451 16.549 37.4451 16.5436C37.4451 16.5382 37.4421 16.5337 37.442 16.5283V15.2893C40.3318 14.9065 42.5599 12.3855 42.5629 9.33228C42.5629 9.3302 42.5629 9.32825 42.5629 9.32617C42.5629 6.00618 39.9326 3.30505 36.6791 3.30506C33.6779 3.30506 31.2153 5.60418 30.8502 8.56629H18.0878L15.9363 3.49121C15.899 3.40323 15.8432 3.33032 15.7807 3.26538C15.7689 3.2531 15.7565 3.24329 15.744 3.23182C15.6888 3.18145 15.6275 3.13855 15.5609 3.10669C15.5427 3.09793 15.525 3.08959 15.506 3.08228C15.4191 3.04889 15.3288 3.02728 15.2344 3.02734H8.19703ZM35.9191 4.90723V7.47375L34.1339 5.68848C34.6559 5.29904 35.2599 5.02754 35.9191 4.90723ZM37.442 4.90723C38.1005 5.02745 38.7058 5.29669 39.2273 5.68543L37.442 7.4707V4.90723ZM33.0811 6.78711L34.8603 8.56629H32.3914C32.499 7.91529 32.7335 7.3102 33.0811 6.78711ZM40.2772 6.78711C40.6257 7.31136 40.8623 7.91655 40.9698 8.56934C40.4051 8.56824 39.5428 8.56666 38.4949 8.56629L40.2772 6.78711ZM13.8031 10.086C14.0124 10.086 16.2024 10.086 17.0807 10.086L19.4946 15.7837H13.8031V10.086ZM18.7316 10.086C23.1384 10.086 27.4408 10.086 31.546 10.086C31.5514 10.0861 31.5559 10.0892 31.5613 10.0891H35.9191V14.5844V15.7837H21.1486L18.7316 10.086ZM38.5315 10.0891H40.9698C40.8629 10.7312 40.6331 11.3321 40.2924 11.85L38.5315 10.0891ZM37.442 11.148L39.2456 12.9517C38.7199 13.348 38.1085 13.6234 37.442 13.7451V11.148ZM13.8031 17.3035H35.9191V24.4049C35.9191 30.8384 30.9593 36.0382 24.8596 36.0382C18.7613 36.0382 13.8031 30.8397 13.8031 24.4049V17.3035ZM16.1957 23.0621C15.7759 23.0621 15.4358 23.4021 15.4357 23.8221C15.4358 29.5867 19.9025 34.2743 25.4334 34.2743C25.8532 34.2743 26.1933 33.9343 26.1933 33.5145C26.1933 33.0945 25.8532 32.7545 25.4334 32.7545C20.759 32.7545 16.9556 28.763 16.9556 23.8221C16.9556 23.4021 16.6155 23.0621 16.1957 23.0621Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g clip-path="url(#clip0_1_12)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.19725 29.9601L2.1769 29.952C2.18911 29.9398 2.20131 29.9276 2.20945 29.9194C2.26642 29.7526 2.37628 29.6143 2.51463 29.5166L25.415 9.62321C25.5127 9.38314 25.6307 9.14307 25.765 8.91113C26.6561 7.36491 28.1494 6.38021 29.777 6.0791C28.8004 4.36198 27.4455 2.91748 25.8667 2.0752L25.8016 2.04264C25.2726 1.76595 25.0651 1.11084 25.3458 0.577801C25.6225 0.0488294 26.2776 -0.15869 26.8107 0.122072L26.8799 0.158693L26.8839 0.154624C27.3519 0.394695 27.8035 0.679526 28.2348 1.00098C29.9276 2.27051 31.3192 4.10156 32.2591 6.15641C32.7759 6.28662 33.2804 6.49007 33.7646 6.76676C34.8144 7.37305 35.6038 8.25195 36.0962 9.26514V9.26921L36.1206 9.32617C36.499 10.1563 36.6821 11.0636 36.6496 11.9792C40.0919 13.737 42.8996 16.3534 45.0683 19.7144C45.1497 19.7957 45.2189 19.8975 45.2596 20.0155L45.2636 20.0236L45.2881 20.0602H45.2799C47.2697 24.4385 48.1404 28.6662 48.1038 32.7637C48.0713 36.8978 47.115 40.8895 45.463 44.7754C45.345 45.0521 45.0887 45.2311 44.8079 45.2596L2.78318 49.9959C2.33966 50.0448 1.9409 49.7233 1.89207 49.2798C1.89207 49.2513 1.888 49.2228 1.888 49.1943C1.888 38.1673 2.01821 35.3841 2.16469 30.1554C2.16469 30.0944 2.1769 30.0252 2.19725 29.9601ZM27.2217 9.48079L27.2176 9.48486L27.2135 9.493L27.2095 9.49707L27.2054 9.50114L27.2013 9.50928L27.1972 9.51335L27.1932 9.52149L27.1891 9.52555L27.185 9.53369L27.181 9.54183L27.1769 9.5459L27.1728 9.55404L27.1688 9.55811L27.1647 9.56217L27.1606 9.57031L27.1566 9.57845L27.1525 9.58252L27.1484 9.59066L27.1443 9.5988L27.1403 9.60693L27.1362 9.611L27.1321 9.61914V9.62321L27.1281 9.62728L27.124 9.63542L27.1199 9.64356L27.1159 9.65169L27.1118 9.65576L27.1077 9.6639L27.1037 9.67204L27.0996 9.68018L27.0833 9.70459L27.0752 9.72087L27.0711 9.729L27.0589 9.75342L27.0548 9.76156L27.0467 9.77783L27.0345 9.80225L27.0223 9.82666L27.0141 9.84701L27.0101 9.85107L26.9979 9.87549L26.9938 9.8877L26.9857 9.8999L26.9734 9.92432V9.92839L26.9612 9.94873L26.949 9.96908V9.97315L26.9368 9.99756L26.9287 10.0098L26.9246 10.022L26.9124 10.0464L26.9083 10.0545L26.9002 10.0749L26.8717 10.144L26.8677 10.1522L26.8554 10.1766L26.8514 10.1847L26.8432 10.201L26.831 10.2254L26.8229 10.2498L26.8148 10.2661L26.8107 10.2743L26.8026 10.2987L26.7985 10.3109L26.7822 10.3516V10.3556L26.7741 10.38L26.7578 10.4329L26.7537 10.4452L26.7497 10.4574L26.7415 10.4818V10.4858L26.7334 10.5062L26.7252 10.5306V10.5347L26.709 10.5713L26.7049 10.5876L26.7008 10.5998L26.6927 10.6242V10.6323L26.6886 10.6527L26.6805 10.6771L26.6723 10.7015L26.6683 10.7178L26.6601 10.7544V10.7625L26.6561 10.7788L26.6479 10.8032L26.6398 10.8276L26.6357 10.848V10.8561L26.6317 10.8805L26.6276 10.8927L26.6235 10.909L26.6194 10.9334V10.9375L26.6154 10.9619L26.6032 10.9863V10.9904L26.5991 11.0148L26.595 11.027L26.591 11.0392L26.5869 11.0636V11.0677L26.5828 11.0881L26.5788 11.1125V11.1165L26.5747 11.141V11.1572V11.1694L26.5706 11.1938V11.202L26.5665 11.2223L26.5625 11.2467L26.5584 11.2752V11.2915V11.2996L26.5543 11.3281C26.5096 11.7228 26.5177 12.1216 26.5828 12.5081C26.7985 13.7166 27.5228 14.8234 28.6702 15.4867C30.7291 16.6748 33.3577 15.9709 34.5459 13.9119C34.6395 13.7492 34.7208 13.5824 34.7941 13.4155L34.8063 13.383L34.8104 13.3748L34.8185 13.3504L34.8307 13.3179L34.8348 13.3138L34.847 13.2853L34.8592 13.2528L34.8714 13.2202L34.8836 13.1917V13.1877L34.8958 13.1551L34.9039 13.1307L34.908 13.1226L34.9202 13.09L34.9284 13.0697L34.9324 13.0534L34.9446 13.0208L34.9487 13.0046L34.9528 12.9842L34.965 12.9517L34.9691 12.9435L34.9772 12.9191L34.9853 12.8866V12.8825L34.9935 12.854L35.0016 12.8215L35.0097 12.7889L35.0179 12.7604V12.7563L35.026 12.7238L35.0301 12.6994V12.6912L35.0382 12.6587L35.0423 12.6383L35.0464 12.6221L35.0545 12.5895L35.0586 12.5773L35.0626 12.557L35.0708 12.5244V12.5163L35.0748 12.4919L35.0789 12.4593V12.4552L35.083 12.4268L35.0871 12.3942L35.0911 12.3617L35.0952 12.3332V12.3291L35.0993 12.2965L35.1033 12.2721V12.2599L35.1074 12.2274V12.2111V12.1948L35.1115 12.1623V12.1501V12.1297L35.1155 12.0972V12.089V12.0646V12.0321V12.0036V11.971V11.9385V11.9059V11.8774V11.8693V11.8368V11.8123V11.8001V11.7676V11.7513V11.735V11.7025V11.6903V11.6333V11.6252V11.6007V11.5682V11.5641V11.5316L35.1115 11.499L35.1074 11.4665V11.438V11.4299L35.1033 11.3973L35.0993 11.3729V11.3607L35.0952 11.3281V11.3118V11.2956L35.0911 11.263C35.0382 10.8195 34.9162 10.3882 34.729 9.98128L34.7086 9.94059C34.3424 9.19596 33.7646 8.54492 32.9915 8.1014L32.9549 8.08106L32.9183 8.06071L32.8939 8.0485L32.8776 8.04037L32.841 8.02002L32.8043 7.99967L32.7962 7.99561L32.7677 7.97933L32.7311 7.96305L32.6985 7.94678L32.6945 7.94271L32.6172 7.90609L32.5968 7.89795L32.5765 7.88981L32.5399 7.87354L32.5032 7.85726H32.4992L32.4666 7.84505L32.43 7.82878L32.4015 7.81657L32.3893 7.8125L32.3486 7.79622L32.312 7.77995L32.2998 7.77588L32.2754 7.76774L32.2347 7.75553L32.1981 7.74333L32.1574 7.73112L32.1167 7.71891L32.0923 7.71078L32.076 7.70671L32.0353 7.6945L31.9987 7.67822L31.9905 7.67415L31.958 7.66602L31.9173 7.65381L31.8847 7.64567H31.8766L31.8359 7.63753L31.7952 7.6294L31.7789 7.62533L31.7586 7.62126L31.7179 7.61312L31.6772 7.60498H31.6732L31.6365 7.59684L31.5958 7.58871L31.5674 7.58464H31.5552L31.5145 7.5765L31.4738 7.56836H31.4616L31.3924 7.56022L31.3558 7.55615H31.3517L31.311 7.55208L31.2703 7.54801H31.2459H31.2296L31.1889 7.54395L31.1483 7.53988H31.1401L31.1076 7.53581L31.0343 7.53174H31.0262H30.9855H30.9448H30.9285H30.9041H30.8634H30.8227H30.7861H30.7454H30.7169H30.7047H30.664H30.6234H30.6111H30.5827L30.542 7.53581L30.5338 7.52767H30.5298L30.4891 7.53174C29.1992 7.63753 27.9744 8.32113 27.2217 9.48079ZM25.0325 12.6058L5.60301 28.8452L42.7083 19.5638C40.8528 17.7938 38.6149 15.8203 36.1165 14.2253C36.0433 14.384 35.9619 14.5386 35.8764 14.6891C34.261 17.4845 30.6885 18.4448 27.893 16.8294C26.3346 15.9302 25.3499 14.4246 25.0569 12.7848L25.0325 12.6058ZM33.138 13.7695C33.3008 13.6597 33.3414 13.4399 33.2357 13.2772C33.1299 13.1144 32.9061 13.0697 32.7474 13.1795C32.3445 13.4481 31.9295 13.6515 31.5063 13.7858C31.0831 13.9201 30.6478 13.9933 30.1961 14.0055C30.0008 14.0096 29.8462 14.1683 29.8502 14.3636C29.8543 14.5589 30.013 14.7135 30.2083 14.7095C30.7251 14.6973 31.2296 14.6159 31.7179 14.4572C32.2062 14.3026 32.6823 14.0706 33.138 13.7695ZM3.87368 34.3099C4.15851 34.4523 4.44334 34.6069 4.7241 34.7575L4.73224 34.7616C8.492 36.8001 10.3841 34.9691 12.3454 33.077C14.5345 30.9611 16.805 28.7638 21.6797 31.4087C22.5423 31.8766 23.4009 32.3405 24.3815 32.3568C25.3621 32.373 26.4933 31.9499 27.9297 30.6478L28.0355 30.5216C32.2225 26.2533 34.5866 27.535 36.9954 28.8371C40.7593 30.8797 42.6513 29.0487 44.6085 27.1525C44.9178 26.8514 45.2311 26.5503 45.5485 26.2614C45.1538 24.646 44.6004 23.0062 43.8761 21.342C20.3613 26.945 27.2786 25.3011 3.93471 30.8594C3.92251 31.189 3.90216 32.5195 3.87368 34.3099ZM45.9513 28.2552C45.7886 28.4098 45.6299 28.5645 45.4671 28.7231C43.278 30.839 41.0075 33.0363 36.1328 30.3914C35.2702 29.9235 34.4116 29.4596 33.431 29.4434C32.4503 29.4271 31.3192 29.8503 29.8869 31.1483L29.777 31.2785C25.59 35.5428 23.2259 34.2651 20.817 32.959L20.8089 32.9549C17.0491 30.9204 15.157 32.7474 13.1998 34.6395C11.0107 36.7594 8.74021 38.9526 3.86147 36.3078L3.84113 36.2915L3.75568 42.0736C4.22768 42.2811 4.68341 42.5293 5.13914 42.7775L5.14728 42.7816C8.91111 44.8242 10.8032 42.9932 12.7604 41.097C14.9495 38.9811 17.22 36.7839 22.0947 39.4287C22.9573 39.8966 23.8159 40.3605 24.8006 40.3768C25.7812 40.3931 26.9124 39.9699 28.3488 38.6678L28.4505 38.5498C32.6416 34.2773 35.0057 35.5591 37.4145 36.8652C41.1784 38.9038 43.0705 37.0768 45.0276 35.1807C45.4345 34.786 45.8455 34.3913 46.2687 34.0291C46.2931 33.6141 46.3053 33.195 46.3094 32.7759C46.3216 31.2866 46.2077 29.7811 45.9513 28.2552ZM45.992 36.6496L45.8943 36.7432C43.7052 38.8591 41.4347 41.0563 36.56 38.4115C35.6974 37.9435 34.8388 37.4797 33.8582 37.4634C32.8776 37.4471 31.7464 37.8703 30.31 39.1724L30.2042 39.2985C26.0172 43.5669 23.6531 42.2852 21.2484 40.9831C17.4804 38.9404 15.5884 40.7715 13.6312 42.6636C11.442 44.7795 9.17153 46.9767 4.29279 44.3319L4.28465 44.3278C4.10154 44.2261 3.91437 44.1284 3.72719 44.0308C3.70278 46.0205 3.68243 47.6034 3.68243 48.1771L43.9941 43.6442C44.9381 41.3452 45.6177 39.0177 45.992 36.6496Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_12">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
