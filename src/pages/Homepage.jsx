import React from "react";
import Logo from "../assets/logo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeImage from "../assets/HomeUser.jpg";
import HomeBackground from "../assets/Homepage.jpg";

const Homepage = () => {
  return (
    <Wrapper>
      <div className="w-full h-[100vh] relative">
        {/* ======================================================================= */}
        {/* Background image container */}
        <div
          className="w-full h-[100%] bg-black absolute"
          style={{ background: `url(${HomeBackground})center/cover no-repeat` }}
        ></div>

        {/* ======================================================================= */}
        {/*  container */}
        <div className="w-full h-[100%] bg-[#00000052] relative flex items-center justify-center">
          <div className="w-[90%] flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <img
                src={Logo}
                alt="logo"
                className="w-[150px] h-[70px] object-cover rounded-[10px] shadow shadow-black drop-shadow-[2px_2px_4px_black]"
              />
              <h1 className="great-vibes-regular text-[3rem] text-white">
                To the love of my life
              </h1>
            </div>

            <img
              src={HomeImage}
              alt="user image"
              className="h-[400px] w-[95%] object-cover rounded-[20px] shadow shadow-black drop-shadow-[2px_2px_4px_black]"
            />

            <h1 className="poppins text-[1.4rem] text-pink-500 text-4xl font-bold drop-shadow-[2px_2px_4px_black] capitalize">
              😍 Happy girlfriend's day 💖
            </h1>

            <Link
              to={"/video_page"}
              className="text-[1.4rem] capitalize text-white text-4xl font-bold drop-shadow-[0px_0px_7px_white] hover:text-pink-500  flex animate-bounce"
            >
              Click! 🙃
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: #00000055; */
`;

export default Homepage;
