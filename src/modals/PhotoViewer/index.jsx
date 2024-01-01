import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const PhotoViewerModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[59%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-6 md:px-5 rounded-md w-full">
          <Img
            className="common-pointer h-6 w-6"
            src="images/img_close.svg"
            alt="close"
            onClick={props.onRequestClose}
          />
          <div className="md:h-[563px] h-[592px] mb-[49px] mt-0.5 pb-1.5 relative w-[65%] sm:w-full">
            <Img
              className="absolute h-[512px] inset-x-[0] mx-auto object-cover rounded top-[0] w-[512px]"
              src="images/img_rectangle163.png"
              alt="Rectangle163"
            />
            <div className="absolute bottom-[1%] flex flex-col gap-[13px] inset-x-[0] items-center justify-start mx-auto w-[82%]">
              <Img
                className="h-[163px] sm:h-auto object-cover w-full"
                src="images/img_group23.png"
                alt="GroupTwentyThree"
              />
              <Text
                className="text-base text-gray-900_01"
                size="txtGilroyMedium16"
              >
                360°
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default PhotoViewerModal;
