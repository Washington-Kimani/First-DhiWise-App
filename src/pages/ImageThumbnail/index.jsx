import React from "react";

import { Button, Img, List, Text } from "components";

const ImageThumbnailPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_2.svg"
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
        <div className="flex flex-col gap-[50px] items-center justify-end md:px-5 w-[59%] md:w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
              <Text
                className="mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32Bluegray900"
              >
                Image Thumbnail
              </Text>
              <Button className="cursor-pointer font-medium min-w-[105px] text-base text-center">
                Save
              </Button>
            </div>
            <Img
              className="h-[641px] md:h-auto object-cover w-full"
              src="images/img_rectangle1343.png"
              alt="Rectangle1343"
            />
          </div>
          <div className="flex flex-col items-center justify-end w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[130px] items-center justify-start w-[130px]"
                  style={{
                    backgroundImage: "url('images/img_rectangle12.png')",
                  }}
                >
                  <div className="bg-black-900_4c md:h-10 h-[130px] p-[45px] md:px-10 sm:px-5 relative w-[130px]">
                    <Img
                      className="absolute h-10 inset-[0] justify-center m-auto w-10"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </div>
                </div>
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle21.png"
                  alt="Rectangle1234"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_group2450.png"
                  alt="RectangleSeventeen"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_group2450.png"
                  alt="Rectangle1235"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_group2450.png"
                  alt="Rectangle1236"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_group2450.png"
                  alt="Rectangle1237"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[3px] w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle19.png"
                  alt="RectangleNineteen"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle18.png"
                  alt="RectangleEighteen"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle20.png"
                  alt="RectangleTwenty"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle20.png"
                  alt="RectangleTwentyOne"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle20.png"
                  alt="RectangleTwentyTwo"
                />
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_rectangle20.png"
                  alt="RectangleTwentyThree"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageThumbnailPage;
