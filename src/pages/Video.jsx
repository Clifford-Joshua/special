import React from "react";
import styled from "styled-components";
import Video1 from "../assets/Videos/Video2.mp4";
import Video2 from "../assets/Videos/Beauty.mp4";
import User1 from "../assets/Birthday/HomeUser1.jpeg";
import User2 from "../assets/Birthday/HomeUser2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import User3 from "../assets/Birthday/HomeUser3.jpeg";
import User5 from "../assets/Birthday/HomeUser5.jpeg";
import User4 from "../assets/Birthday/HomeUser4.jpg";
import { useTypewriter } from "react-simple-typewriter";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import BackgroundImage from "../assets/Birthday/VideoBackground.jpg";

const Video = () => {
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [
      `Just a Friendly reminder, It's your birthday 🎂! so try and have fun. I’ll love you forever babe… Like and endless loop 🌹🥰`,
    ],
    loop: 0,
  });

  return (
    <Wrapper>
      <div className="w-full min-h-[100vh] relative">
        {/* ======================================================================= */}
        {/* Background image container */}
        <div
          className="w-full h-[100%] absolute"
          style={{
            background: `url(${BackgroundImage})`,
          }}
        ></div>

        {/* ======================================================================= */}
        {/*  container */}
        <div className="relative  bg-[#0e0e0e9c] p-[1rem]">
          <div className="w-[100%] flex flex-col gap-[1rem] items-center">
            <div className="w-[100%]  text-white  poppins text-[1.5rem] font-bold text-shadow-[1px_1px_5px_black] capitalize text-center">
              <h1>To</h1>
            </div>

            <h1 className="capitalize dancing-script text-[2rem] text-amber-300 text-shadow-[1px_1px_5px_black]">
              My Sweet Pumpkin 💖🥳,
            </h1>

            <div className="flex flex-col gap-[1.5rem]">
              <p className="playfair-display text-[0.9rem] text-white">
                Today is a very special day because it's the day someone truly
                amazing came into this world. 🎉🎈🥳🌹 I honestly don't think
                words can fully express how grateful I am for you. 🥺 You bring
                so much happiness 😊💞, warmth 🤗💕, peace 🕊️💖, and love ❤️‍🔥💘
                into my life. Every conversation 💬💕, every laugh 😂❤️, every
                moment ⏳💞 we share means more to me than you probably realize.
                🥰✨ Seeing your special day arrive fills my heart with so much
                joy 😍🎉 because it's a reminder that the world was blessed 🌍✨
                with someone as beautiful 🌹😍, kind 💕🤗, caring 💖🥺, and
                incredible ✨👑 as you. 💝❤️💞 You deserve to be celebrated
                today 🎂🎉🎈🥳 and every single day 🌞🌙💕
              </p>

              <img
                src={User1}
                alt="user"
                className="h-[250px] object-cover  rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <p className="playfair-display text-[0.9rem] text-white">
                And while today is about celebrating your birthday, I also want
                to take a moment to celebrate you. ❤️🥰✨ You are truly the most
                beautiful lady I have ever known. 😍🌹💕 Not just because of
                your gorgeous smile 😊💖, your beautiful eyes 👀✨, or the way
                you light up every room you walk into 🌟❤️, but because your
                beauty comes from your heart too. 💞🥺 You have a kind, loving,
                caring, warm, heart that make you even more beautiful every day.
                👑💝✨
              </p>

              <img
                src={User5}
                alt="user"
                className="h-[250px] object-cover  rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <p className="playfair-display text-[0.9rem] text-white">
                What I admire most about you is how hardworking and determined
                you are. 💪❤️🔥 You keep pushing forward, even when things are
                difficult. 🌷✨ You put your heart into what you do, and it
                inspires me more than you know. 🥹💕 Watching you work towards
                your goals, overcome challenges, and continue growing into an
                even more amazing woman makes me so proud of you. 🌹🏆❤️ You
                deserve every bit of happiness, success, love, and recognition
                that comes your way because you work so hard for it. 🎉🎂💖🌟 I
                hope you never forget how incredible you are and how much you
                are appreciated, admired, and loved. 🥰❤️💞✨
              </p>

              <video
                src={Video1}
                autoPlay
                loop
                muted
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              ></video>

              <p className="playfair-display text-[0.9rem] text-white">
                Today, I celebrate your beauty 😍🌹, your strength 💪❤️, your
                dedication 🔥✨, your kind heart 💖🤗, and everything that makes
                you the wonderful woman you are. 👑💕💐 Keep shining, my
                beautiful girl. ✨🌟💖 The world is brighter because you're in
                it. 🌍❤️🥰😘💋
              </p>

              <img
                src={User4}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
              <p className="playfair-display text-[0.9rem] text-white">
                My love ❤️🥰, I just want you to know how much I truly love and
                cherish you. 💖✨ You mean so much more to me than words could
                ever explain. 💕 Every day, you bring happiness, comfort, and so
                much love into my life, and I am incredibly grateful for you.
                🥺❤️ You have a special place in my heart that no one else could
                ever take. 💘🌹 Your smile brightens my days ☀️😊, your voice
                brings me peace 🎶💞, and your love makes my life so much
                better. ❤️‍🔥✨ No matter where life takes us, I hope you never
                forget how deeply you are loved, appreciated, and cherished.
                💝🥰 You are one of the greatest blessings in my life, and I
                thank God for you every day. 🙏❤️✨ I love you more than you'll
                ever know. ❤️😘💋🌹💕
              </p>

              <img
                src={User2}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
              <p className="playfair-display text-[0.9rem] text-white">
                So don’t ever forget this, I’m proud of you 👏. I’m proud to
                love you 🥰. I’m proud to be yours 💍. And no matter what life
                throws at us 🌪️, you’ll always have me — completely, hopelessly,
                madly ❤️‍🔥. Forever and always, Your person 💑💋❤️
              </p>

              <img
                src={User3}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <h2 className="great-vibes-regular text-[1.5rem] h-[100px] text-amber-300">
                {text}
              </h2>

              <video
                src={Video2}
                autoPlay
                loop
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              ></video>
            </div>

            <div className="flex flex-row gap-4">
              <button
                onClick={() => navigate(-1)}
                className="text-[1.4rem] capitalize text-amber-300 text-4xl font-bold drop-shadow-[0px_0px_7px_white]  flex animate-bounce mt-[1rem]"
              >
                <FaArrowLeft />
              </button>

              <Link
                to={"/birthday_wishes"}
                className="text-[1.4rem] capitalize text-amber-300 text-4xl font-bold drop-shadow-[0px_0px_7px_white]  flex animate-bounce mt-[1rem]"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Video;
