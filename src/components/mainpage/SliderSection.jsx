import { useState } from "react";
import Button from "../reusable/Button.jsx";
import LinesBlock from "../reusable/LinesBlock.jsx";
import Rectangle from "../reusable/Rectangle.jsx";

export default function SliderSection() {
  const [activeSlide, setActiveSlid] = useState(0);
  const data = [
    {
      mobImg: "/images/slider/family-gathering-mobile.jpg",
      tabImg:
        "/images/slider/family-gathering-tablet.jpg , /images/slider/family-gathering-tablet@2x.jpg ",
      deskImg:
        "/images/slider/family-gathering-desktop.jpg , /images/slider/family-gathering-desktop@2x.jpg",
      altText:
        "Photo of the table with food and an group of firends that eat together.",
      header: "Family Gathering",
      content:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    },
    {
      mobImg: "/images/slider/special-events-mobile.jpg",
      tabImg:
        "/images/slider/special-events-tablet.jpg , /images/slider/special-events-tablet@2x.jpg ",
      deskImg:
        "/images/slider/special-events-desktop.jpg , /images/slider/special-events-desktop@2x.jpg",
      altText: "Photo of the friends reniunion around the table.",
      header: "Special Events",
      content:
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    },
    {
      mobImg: "/images/slider/social-events-mobile.jpg",
      tabImg:
        "/images/slider/social-events-tablet.jpg , /images/slider/social-events-tablet@2x.jpg ",
      deskImg:
        "/images/slider/social-events-desktop.jpg , /images/slider/social-events-desktop@2x.jpg",
      altText:
        "Photo of the table with food and an group of firends that eat together.",
      header: "Social Events",
      content:
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    },
  ];

  const handleChangeSlide = (id) => {
    if (activeSlide === id) return;
    setActiveSlid(id);
  };
  return (
    <section className="pt-20 pb-24 md:py-30 xl:py-40 relative">
      <Rectangle style="invisible md:visible rounded-tr-[100px] absolute -z-1 top-0 right-[50.78%] xl:right-[62.15%]" />
      <div className="mx-auto w-[87.2%] md:w-[89.71%] xl:w-[77.08%] grid grid-cols-1 xl:grid-cols-[540px_445px] xl:grid-rows-[min-content_min-content] xl:gap-x-31.25 relative">
        <LinesBlock style="invisible md:visible absolute z-1 -top-9.5 right-[76.6%] xl:right-auto xl:-left-[4%]" />
        <div className="mb-12 md:mb-14 xl:mb-0 xl:col-start-1 xl:row-start-1 xl:row-span-2 overflow-hidden">
          <div
            className="flex "
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {data.map((slide, idx) => (
              <div className="w-full shrink-0 relative" key={idx}>
                <picture>
                  <source media="(min-width: 1280px)" srcSet={slide.deskImg} />
                  <source media="(min-width: 768px)" srcSet={slide.tabImg} />
                  <img
                    src={slide.mobImg}
                    alt={slide.altText}
                    className="shadow-presentation mx-auto"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col md:items-center md:justify-around xl:justify-start xl:items-start gap-6 md:gap-2.5 xl:gap-8 preset-5 mb-10 md:mb-17.25 xl:mb-0 xl:row-start-2">
          <button
            className={`cursor-pointer opacity-50 ${activeSlide === 0 ? "active-slide" : ""}`}
            onClick={() => handleChangeSlide(0)}
          >
            FAMILY GATHERING
          </button>
          <button
            className={`cursor-pointer opacity-50 ${activeSlide === 1 ? "active-slide" : ""}`}
            onClick={() => handleChangeSlide(1)}
          >
            SPECIAL EVENTS
          </button>
          <button
            className={`cursor-pointer opacity-50 ${activeSlide === 2 ? "active-slide" : ""}`}
            onClick={() => handleChangeSlide(2)}
          >
            SOCIAL EVENTS
          </button>
        </div>

        <div className="md:w-[66.32%] xl:w-full md:mx-auto xl:ml-0 flex flex-col items-center xl:items-start xl:row-start-1 xl:pt-18.25 overflow-hidden">
          <div
            className="flex items-center shrink-0 "
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {data.map((slide, idx) => (
              <div
                key={idx}
                className=" basis-full text-slate-800 text-center xl:text-left shrink-0"
              >
                <div className="flex flex-col gap-3 md:gap-5 ">
                  <h3 className="secType">{slide.header}</h3>
                  <p className="firstType">{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
          <Button type="btnTThree mt-7.5 md:mt-14" />
        </div>
      </div>
    </section>
  );
}
