import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CuteImage from "../assets/Birthday/love.jpeg";
import User6 from "../assets/Birthday/HomeUser6.jpeg";
import User7 from "../assets/Birthday/HomeUser7.jpeg";
import BackgroundImage from "../assets/Birthday/HomeUser4.jpg";
import { FaArrowLeft } from "react-icons/fa";

const Message = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="min-h-[100vh] relative">
        <div
          className="h-[100%] w-[100%] absolute"
          style={{
            background: `url(${BackgroundImage})center/cover no-repeat`,
          }}
        ></div>
        <div className="h-[100%] relative z-10 bg-[#0000005e] text-white p-[1rem] flex flex-col items-center justify-center gap-[1rem] poppins">
          <h1 className="text-[1.5rem]">Happy Birthday, my love 🎂</h1>

          <p className="text-center text-[1rem]">
            On your special day, I wish you endless happiness 😊💕, good health
            🌷✨, success in everything you do 🏆💖, and countless beautiful
            moments that make you smile. 🌟🎁💐 May this new year of your life
            bring you peace 🕊️❤️, joy 😍🌹, laughter 😂💕, and all the blessings
            your heart desires. 🙏✨ You deserve nothing but the very best
            because you are such a wonderful and special person. 👑💝 Thank you
            for being you. ❤️🥰 Your kindness, love, and beautiful heart make
            the world a better place. 💖🌍✨ Enjoy your day to the fullest, And
            May all your dreams come true and may your heart always be filled
            with happiness.
          </p>

          <div className="flex  gap-[0.5rem] items-center h-[60vh] w-[100%]">
            <div className="h-[100%] w-[50%]">
              <img
                src={CuteImage}
                alt="user"
                className="h-[100%] w-[100%] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
            </div>
            <div className="h-[100%] w-[50%] flex flex-col gap-[0.5rem]">
              <img
                src={User7}
                alt="user"
                className="h-[49%] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <img
                src={User6}
                alt="user"
                className="h-[49%] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
            </div>
          </div>
          <p className="text-center text-[1rem]">
            Happy Birthday once again, sweetheart. ❤️ Have a fun day 💖
          </p>

          <button
            onClick={() => navigate(-1)}
            className="text-[1.4rem] capitalize text-amber-300 text-4xl font-bold drop-shadow-[0px_0px_7px_white]  flex animate-bounce mt-[0.5rem] mb-[1rem]"
          >
            <FaArrowLeft />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Message;
