import React from "react";
import styled from "styled-components";
import CuteImage from "../assets/love.jpg";
import User6 from "../assets/HomeUser6.jpg";
import User7 from "../assets/HomeUser7.jpg";
import BackgroundImage from "../assets/HomeUser4.jpg";

const Message = () => {
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
          <h1 className="text-[1.5rem]">Happy New Month, My Love!</h1>

          <p className="text-center text-[1rem]">
            Happy New Month, My Sweet Strawberry 🍓❤️ A new month, a fresh start
            — but my love for you stays the same, deep and endless 🥰. I pray
            this month brings you peace, joy, laughter, and all the sweetness
            your heart can hold 💫💐. You’re my favorite part of every day, and
            this month, I’m loving you even louder 💋💖. Let’s make it beautiful
            — together. I love you, always 💘🍓
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
          <p className="text-center text-[1rem]">Have a fun day 💖</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

export default Message;
