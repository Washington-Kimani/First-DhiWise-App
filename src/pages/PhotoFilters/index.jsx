import React from "react";

import { Button, Img, List, Text } from "components";

const PhotoFiltersPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="ml-0.5 text-base text-gray-900_02"
                    size="txtGilroyMedium16Gray90002"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="text-base text-gray-900_02"
                    size="txtGilroyMedium16Gray90002"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text
                className="text-base text-gray-900_02"
                size="txtGilroyMedium16Gray90002"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900_02">
                <Text size="txtGilroyMedium16Gray90002">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                size="md"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1268px] mb-1.5 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start w-[76%] md:w-full">
            <div className="flex flex-col gap-[17px] items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32Bluegray900"
                >
                  Add a Watermark
                </Text>
                <Button className="cursor-pointer font-medium min-w-[105px] text-base text-center">
                  Save
                </Button>
              </div>
              <Img
                className="h-[746px] md:h-auto object-cover w-full"
                src="images/img_rectangle1343.png"
                alt="Rectangle1343"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-start justify-center w-[74%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-[6%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_music.svg"
                  alt="music"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12"
                >
                  Rotate
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-[5%] sm:w-full">
                <Img className="h-8 w-8" src="images/img_crop.svg" alt="crop" />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12"
                >
                  Crop
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-[5%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_circlelayerso.svg"
                  alt="circlelayerSo"
                />
                <Text
                  className="text-blue-A700_01 text-xs"
                  size="txtGilroySemiBold12BlueA70001"
                >
                  Filter
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-[6%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_dashboard.svg"
                  alt="dashboard"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12"
                >
                  Splash
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-[5%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_alarm.svg"
                  alt="alarm"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12"
                >
                  Blur
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-center justify-start w-[5%] sm:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="text-blue_gray-400 text-xs"
                  size="txtGilroySemiBold12"
                >
                  Adjust
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[33px] items-start justify-start md:mt-0 mt-1.5 w-[23%] md:w-full">
            <Text className="text-black-900 text-lg" size="txtGilroyMedium18">
              Filter
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-md shadow-bs1 w-full">
              <div className="flex flex-col gap-6 items-center justify-start mb-[13px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-40 items-end justify-start p-4 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10134.png')",
                  }}
                >
                  <Text
                    className="mt-[110px] text-base text-white-A700"
                    size="txtGilroySemiBold16"
                  >
                    Original
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-40 items-end justify-start p-4 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10136.png')",
                  }}
                >
                  <Text
                    className="mb-0.5 mt-[109px] text-base text-white-A700"
                    size="txtGilroySemiBold16"
                  >
                    BW
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-40 items-end justify-start p-4 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10138.png')",
                  }}
                >
                  <Text
                    className="mt-[111px] text-base text-white-A700"
                    size="txtGilroySemiBold16"
                  >
                    Impect{" "}
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-40 items-end justify-end p-4 w-full"
                  style={{
                    backgroundImage: "url('images/img_group10140.png')",
                  }}
                >
                  <Text
                    className="mt-[110px] text-base text-white-A700"
                    size="txtGilroySemiBold16"
                  >
                    Grey
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoFiltersPage;
