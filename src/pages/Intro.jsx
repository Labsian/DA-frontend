import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../components/StyledBtn";
import { StyledSlideshow } from "../components/SwiperStyled";

export const Intro = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      path: "assets/girl1.svg",
      title: "Algorithm",
      text: "Users going through a vetting process to ensure you never match with bots.",
    },
    {
      path: "assets/girl2.svg",
      title: "Matches",
      text: "We match you with people that have a large array of similar interests.",
    },
    {
      path: "assets/girl3.svg",
      title: "Premium",
      text: "Sign up today and enjoy the first month of premium benefits on us.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 h-screen overflow-hidden md:h-full">
      <StyledSlideshow
        slides={slides}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        activeIndex={activeIndex}
      />

      <div className="flex flex-col items-center px-9">
        <h2 style={{ color: "#E94057" }}>{slides[activeIndex].title}</h2>
        <p className="mt-4 text-[14px] text-xl font-semibold text-black text-center">
          {slides[activeIndex].text}
        </p>
      </div>
      <StyledBtn
        primary={true}
        styles={"w-[100%]"}
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        Create an account{" "}
      </StyledBtn>
      <p className="cursor-pointer">
        Already have an account?{" "}
        <span className="text-[#E94057] font-semibold">Sign In</span>
      </p>
    </div>
  );
};
