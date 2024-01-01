import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Line, Text } from "components";

const PhotoLibraryModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[46%]"
      overlayClassName="bg-gray-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[30px] justify-center p-6 md:px-5 rounded-[12px] shadow-bs2 w-full">
          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[232px] mt-3.5 w-[62%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
              size="txtGilroySemiBold24Black90001"
            >
              Photo Library
            </Text>
            <Img
              className="common-pointer h-6 w-6"
              src="images/img_close_24X24.svg"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col gap-[22px] items-center justify-start mb-[49px] w-[97%] md:w-full">
            <Img
              className="h-[279px] md:h-auto object-cover w-full"
              src="images/img_rectangle1325.png"
              alt="Rectangle1325"
            />
            <div className="flex flex-col gap-[19px] items-center justify-start pt-0.5 w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-[3px] text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Make Cover Photo
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
              <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                <Text
                  className="mt-[5px] text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Edit Caption
                </Text>
                <Img
                  className="h-6 mb-[3px] w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright One"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-[3px] text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Delete Photo
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright Two"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="mt-[3px] text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18"
                >
                  Share
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright Three"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default PhotoLibraryModal;
