import React from "react";

import { Button, Img, Input, Line, List, SeekBar, Text } from "components";

import { CloseSVG } from "../../assets/images";

const VideoautoplayPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-8 items-center justify-start mx-auto pb-16 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-4 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[57%] md:w-full">
                <Img
                  className="h-9"
                  src="images/img_frame34827_1.svg"
                  alt="Frame34827"
                />
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-[63%] md:w-full">
                  <Input
                    name="InputField"
                    placeholder="Placeholder Text"
                    value={inputfieldvalue}
                    onChange={(e) => setInputfieldvalue(e)}
                    className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-300 border-solid flex w-[452px] sm:w-full"
                    suffix={
                      inputfieldvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer h-5 ml-[35px] mr-3 my-2"
                          onClick={() => setInputfieldvalue("")}
                          fillColor="#bac1ce"
                          height={20}
                          width={20}
                          viewBox="0 0 20 20"
                        />
                      ) : (
                        <Img
                          className="cursor-pointer h-5 ml-[35px] mr-3 my-2"
                          src="images/img_search_bluegray_900.svg"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <Img
                    className="h-5 w-5"
                    src="images/img_microphone.svg"
                    alt="microphone"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-between w-[11%] md:w-full">
                <Img
                  className="h-9 w-9"
                  src="images/img_videocamera_36X36.svg"
                  alt="videocamera"
                />
                <Img
                  className="h-9 w-9"
                  src="images/img_notification.svg"
                  alt="notification"
                />
                <Img
                  className="h-9 md:h-auto rounded-[50%] w-9"
                  src="images/img_profileimglarg.png"
                  alt="ProfileImgLarg"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1341px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[70%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[534px] items-center justify-start w-full"
              style={{ backgroundImage: "url('images/img_group10080.png')" }}
            >
              <div className="bg-gradient1  flex flex-col gap-4 items-center justify-end p-2 w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[376px] sm:min-w-full mt-[408px] text-center text-sm"
                  shape="square"
                  color="black_900_e5"
                  size="xs"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Button>
                <div className="flex flex-col gap-2 items-center justify-start w-[99%] md:w-full">
                  <SeekBar
                    inputValue={[25.98]}
                    trackColors={["#0061ff", "#eaecf0"]}
                    thumbClassName="h-4 bg-blue-A700_01 w-4 flex justify-center items-center rounded-[50%] outline-none"
                    className="flex h-4 rounded w-full"
                    trackClassName="h-1 flex rounded w-full"
                  />{" "}
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-row gap-2 items-center justify-between w-[29%] sm:w-full">
                      <Img
                        className="h-10"
                        src="images/img_icons.svg"
                        alt="Icons"
                      />
                      <div className="flex flex-row items-center justify-evenly">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtGilroyRegular14"
                        >
                          0:01
                        </Text>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtGilroyRegular14"
                        >
                          /
                        </Text>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtGilroyRegular14"
                        >
                          8:00:43
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-10"
                      src="images/img_frame34830_blue_200.svg"
                      alt="Frame34830"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="mt-[23px] text-black-900_01 text-lg"
              size="txtGilroySemiBold18Black90001"
            >
              8 Hours of Birds Singing in the Forests Below El Capitan
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-3 w-full">
              <div className="flex md:flex-1 flex-row items-start justify-evenly md:mt-0 mt-[5px] w-[24%] md:w-full">
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  1,094,526 views
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtInterRegular14"
                >
                  •
                </Text>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  May 25, 2018
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between pr-1.5 w-[47%] md:w-full">
                <div className="flex flex-row items-center justify-evenly w-[12%] sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    567
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[17%] sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup One"
                  />
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Dislike
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[16%] sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_share.svg"
                    alt="share"
                  />
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Share
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[22%] sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_download.svg"
                    alt="download"
                  />
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    Download
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-center w-[22%] sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <Text
                    className="ml-1 text-blue-A700_01 text-sm"
                    size="txtGilroyMedium14BlueA70001"
                  >
                    Bookmark
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100 h-px mt-[22px] w-full" />
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[15px] w-full">
              <div className="flex flex-row font-gilroy gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_avatarsmall.png"
                  alt="AvatarSmall"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtGilroyMedium16Black90001"
                  >
                    Nature Soundscapes
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyRegular14Bluegray400"
                  >
                    104K subscribers
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-inter font-medium mb-3 min-w-[111px] shadow-bs3 text-center text-sm"
                size="sm"
              >
                SUBSCRIBE
              </Button>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start mt-4 pb-[3px] px-[3px] w-full">
              <Text
                className="leading-[26.00px] md:ml-[0] ml-[60px] text-base text-black-900_01 w-[68%] sm:w-full"
                size="txtGilroyRegular16"
              >
                Find your absolutely beautiful and serene place and listen to
                nature sounds, birds signing and relaxing water sounds with
                breathtaking views of Mount Shuksan. It’s 8-hour 4k video of
                discovery and peace. Download it for your personal use and
                transform your 4K TV into a source of relaxation and
                restoration.
              </Text>
              <Text
                className="md:ml-[0] ml-[60px] text-blue_gray-400 text-sm"
                size="txtGilroyMedium14"
              >
                SHOW MORE
              </Text>
            </div>
          </div>
          <List className="flex flex-col gap-3 w-[29%]" orientation="vertical">
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{ backgroundImage: "url('images/img_group10083.png')" }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_104X169.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark One"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_1.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark Two"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_2.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark Three"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_3.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark Four"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_4.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark Five"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_5.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark Six"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[104px] items-end justify-end p-2"
                style={{
                  backgroundImage: "url('images/img_group10083_6.png')",
                }}
              >
                <Text
                  className="bg-black-900 h-5 justify-center mt-[68px] px-0.5 py-[3px] rounded-sm text-white-A700 text-xs w-12"
                  size="txtGilroyMedium12"
                >
                  0:00:00
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[55%] sm:w-full">
                <Text
                  className="leading-[26.00px] text-base text-black-900_01 w-full"
                  size="txtGilroySemiBold16Black90001"
                >
                  Nature Sounds in the Forest – HD Stereo Audio
                </Text>
                <div className="flex flex-row gap-1 items-center justify-start mt-1 w-[210px]">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtGilroyMedium14"
                  >
                    ChannelName
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkmark_16X16.svg"
                    alt="checkmark Seven"
                  />
                </div>
                <div className="flex flex-row items-start justify-start mt-1 pr-1 pt-1 w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    6.3M views
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-xs"
                    size="txtInterSemiBold12"
                  >
                    •
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-sm"
                    size="txtGilroyMedium14"
                  >
                    4 years ago
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default VideoautoplayPage;
