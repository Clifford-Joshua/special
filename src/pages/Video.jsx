import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import BackgroundImage from "../assets/VideoBackground.jpg";
import Video1 from "../assets/Video1.mp4";
import Video2 from "../assets/Infinity.mp4";
import User1 from "../assets/HomeUser1.jpg";
import User2 from "../assets/HomeUser2.jpg";
import User3 from "../assets/HomeUser3.jpg";
import User4 from "../assets/HomeUser4.jpg";
import User5 from "../assets/HomeUser5.jpg";

const Video = () => {
  const [text] = useTypewriter({
    words: [
      ` I’ll love you forever babe… Like and endless loop ♾️, I love you🌹 till infinity🥰`,
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
            background: `url(${BackgroundImage})center/cover no-repeat`,
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
              My Sweet Baby Girl 💖👑,
            </h1>

            <div className="flex flex-col gap-[1.5rem]">
              <p className="playfair-display text-[0.9rem] text-white">
                I honestly don’t even know where to begin because every time I
                think of you, my heart overflows with so much emotion I can
                barely put it into words 😩❤️. You are the most beautiful part
                of my life — not just on the outside 😍, but deep within your
                soul 🌸. You carry a light 🌟 that brightens even my darkest
                days 🌧️➡️☀️, a warmth 🔥 that reaches into the coldest parts of
                me and melts every doubt, every fear, every worry 😌💗.
              </p>

              <img
                src={User1}
                alt="user"
                className="h-[250px] object-cover  rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <p className="playfair-display text-[0.9rem] text-white">
                You make me feel things I never knew I could feel 🥺💘. Like how
                just the sound of your voice 🎶 can calm every storm inside me
                🌪️. Or how your smile 😊 can turn a simple moment into magic ✨.
                And those eyes? 👀 Don’t even get me started… I could get lost
                in them forever and never want to be found 😍😮‍💨💞.
              </p>

              <img
                src={User5}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />

              <p className="playfair-display text-[0.9rem] text-white">
                I love the way you laugh 😂, the way you playfully tease me 🙈
                just to see me smile 😄. I love how you care 🥰, how your heart
                is so big 💓, so soft 💕, so full of love 💖. Sometimes I sit
                and wonder 🤔 how someone like me ended up with someone like you
                — so rare 💎, so precious 💫, so perfect in all your
                imperfections 👸. And the truth is, I still don’t have an
                answer… but I’m endlessly thankful 🙏 that I get to love you 💘.
                You’re not just my girlfriend 💏. You’re my peace 🕊️, my best
                friend 👫, my soft place to land 🛌. My comfort on bad days 😣,
                my favorite person on good ones 😄, and the one I want by my
                side for everything in between 🫂. Life with you is like a
                beautiful love song 🎵🎧 I never want to end 🥹❤️.
              </p>

              <video
                src={Video1}
                autoPlay
                loop
                muted
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              ></video>

              <p className="playfair-display text-[0.9rem] text-white">
                I want to be the reason you smile randomly during the day ☀️💫.
                I want to be the one you think of when you hear a love song
                🎶💕. I want to be your safe space 🏡, your cheerleader 📣, your
                partner 🤝, your home 🛋️. I want to be the arms you run into
                when life gets overwhelming 😔 and the voice that reminds you
                how strong 💪, beautiful 🌷, and loved 💗 you truly are 🥹❤️.
              </p>

              <img
                src={User4}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
              <p className="playfair-display text-[0.9rem] text-white">
                If I could, I’d bottle up every sweet moment with you 🍯 — your
                laughs 😂, your hugs 🤗, your sleepy eyes 😴, your kisses 😘 —
                and keep them forever 🔒. You’re the kind of love I dreamed of
                🌙 when I didn’t even know what love really was 💭💖. And now
                that I’ve found you, I promise to protect 🛡️, cherish 🌹, and
                adore you forevermore 🔐💘.
              </p>

              <img
                src={User2}
                alt="user"
                className="h-[250px] object-cover rounded-[10px]  drop-shadow-gray-500 shadow-[0px_0px_10px_black] "
              />
              <p className="playfair-display text-[0.9rem] text-white">
                So don’t ever forget this: I’m proud of you 👏. I’m proud to
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

            <Link
              to={"/new_month_wishes"}
              className="text-[1.4rem] capitalize text-amber-300 text-4xl font-bold drop-shadow-[0px_0px_7px_white]  flex animate-bounce mt-[1rem]"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Video;
