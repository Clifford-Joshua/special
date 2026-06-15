import React, { useState, useEffect } from "react";
import Logo from "../assets/Birthday/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoaderImage from "../assets/Birthday/Loader.jpg";
import HomeImage from "../assets/Birthday/HomeUser.jpeg";
import HomeBackground from "../assets/Birthday/Homepage.jpg";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  return (
    <Wrapper>
      {/* ================================================================================= */}
      {/* Loader */}

      {loading ? (
        <div
          className={`w-full h-[100vh] flex items-center justify-center transition-opacity duration-700 ease-in-out ${
            !fadeOut ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={LoaderImage}
            className={`object-fill w-full h-full `}
            alt="Loader"
          />
        </div>
      ) : (
        <>
          {/* ===================================================================== */}
          {/* main content */}
          <div className="w-full h-[100vh] relative">
            {/* ======================================================================= */}
            {/* Background image container */}
            <div
              className="w-full h-[100%] bg-black absolute"
              style={{
                background: `url(${HomeBackground})center/cover no-repeat`,
              }}
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
                  <h1 className="great-vibes-regular text-[3rem] text-white text-shadow-2xs font-bold drop-shadow-[2px_2px_4px_black]">
                    To the love of my life
                  </h1>
                </div>

                <img
                  src={HomeImage}
                  alt="user image"
                  className="h-[340px] w-[95%] object-cover rounded-[20px] shadow shadow-black drop-shadow-[2px_2px_4px_black]"
                />

                <h1 className="poppins text-[1.4rem] text-center text-pink-500 text-4xl font-bold drop-shadow-[2px_2px_4px_black] capitalize">
                  😍 Happy Birthday Babe 💖 🎂🍥🍰
                </h1>

                <Link
                  to={"/video_page"}
                  className="text-[1.4rem] capitalize text-white text-4xl font-bold drop-shadow-[0px_0px_7px_black] hover:text-red-500  flex animate-bounce"
                >
                  click me 😂 🎂
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: #00000055; */
`;

export default Homepage;
