import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex h-[1080px] md:h-[742px] sm:h-[978px] justify-end p-6 md:px-5 relative w-full"
          style={{ backgroundImage: "url('images/defaultNoData.png')" }}
        >
          <Button
            className="cursor-pointer font-medium mb-[88px] min-w-[581px] sm:min-w-full mt-auto mx-auto sm:text-[17.77px] md:text-[19.77px] text-[21.77px] text-center"
            shape="square"
            color="black_900_e5"
            size="sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Button>
          <div className="absolute flex flex-col md:gap-10 gap-[390px] h-max inset-[0] items-center justify-center m-auto w-[97%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="common-pointer h-[37px] w-[37px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <Img
                className="h-[31px] md:ml-[0] ml-[1170px] w-[5%]"
                src="images/img_switch.svg"
                alt="switch"
              />
              <Img
                className="h-[37px] ml-6 md:ml-[0] w-[37px]"
                src="images/img_computer.svg"
                alt="computer"
              />
              <Img
                className="h-[37px] ml-6 md:ml-[0] w-[37px]"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center rotate-[90deg] w-[44%] md:w-full">
              <div className="flex flex-row gap-[13px] items-center justify-between rotate-[-90deg] w-[15%] md:w-full">
                <Img
                  className="h-[49px] w-[49px]"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
                <Text
                  className="sm:text-[17.77px] md:text-[19.77px] text-[21.77px] text-white-A700"
                  size="txtGilroyBold2177"
                >
                  10
                </Text>
              </div>
              <Img
                className="h-[124px] md:ml-[0] ml-[155px] w-[124px]"
                src="images/img_group3_white_A700.svg"
                alt="GroupThree"
              />
              <div className="flex flex-row gap-3 items-center justify-between md:ml-[0] ml-[155px] rotate-[-90deg] w-[15%] md:w-full">
                <Text
                  className="sm:text-[17.77px] md:text-[19.77px] text-[21.77px] text-white-A700"
                  size="txtGilroyBold2177"
                >
                  10
                </Text>
                <Img
                  className="h-[49px] w-[49px]"
                  src="images/img_forward.svg"
                  alt="forward"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between rotate-[90deg] w-full">
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between rotate-[-90deg] w-[96%] md:w-full">
                <Text
                  className="sm:text-[17.77px] md:text-[19.77px] text-[21.77px] text-white-A700"
                  size="txtGilroyMedium2177"
                >
                  09:54
                </Text>
                <Img
                  className="h-[15px] md:mt-0 mt-1"
                  src="images/img_playdurationb.svg"
                  alt="Playdurationb"
                />
                <Text
                  className="sm:text-[17.77px] md:text-[19.77px] text-[21.77px] text-white-A700"
                  size="txtGilroyMedium2177"
                >
                  -04:24
                </Text>
              </div>
              <Img
                className="h-[37px] w-[37px]"
                src="images/img_minimize_37X37.svg"
                alt="minimize"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
