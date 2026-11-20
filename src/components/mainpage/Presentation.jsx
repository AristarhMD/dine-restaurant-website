import Separator from "../reusable/Separator.jsx";
import Rectangle from "../reusable/Rectangle.jsx";
import LinesBlock from "../reusable/LinesBlock.jsx";

import enjoyMob from "../../assets/images/homepage/enjoyable-place-mobile.jpg";
import enjoyTab from "../../assets/images/homepage/enjoyable-place-tablet.jpg";
import enjoyTabx2 from "../../assets/images/homepage/enjoyable-place-tablet@2x.jpg";
import enjoyDesk from "../../assets/images/homepage/enjoyable-place-desktop.jpg";
import enjoyDeskx2 from "../../assets/images/homepage/enjoyable-place-desktop@2x.jpg";

import locallyMob from "../../assets/images/homepage/locally-sourced-mobile.jpg";
import locallyTab from "../../assets/images/homepage/locally-sourced-tablet.jpg";
import locallyTabx2 from "../../assets/images/homepage/locally-sourced-tablet@2x.jpg";
import locallyDesk from "../../assets/images/homepage/locally-sourced-desktop.jpg";
import locallyDeskx2 from "../../assets/images/homepage/locally-sourced-desktop@2x.jpg";

export default function Presentation() {
  return (
    <section className="relative pb-30 xl:pb-0 overflow-x-clip">
      {/* Background components */}
      <Rectangle style="hidden md:block md:absolute top-49 xl:top-80 -ml-[50%] xl:-ml-[37.84%] -z-1 rounded-tr-[100px]" />
      <Rectangle style="hidden md:block md:absolute bottom-0 md:bottom-20 ml-[50%] xl:ml-[37.84%] -z-1 rounded-tl-[100px]" />

      {/* Main content */}
      <div className="mx-auto w-[87.2%] md:w-[74.60%] xl:w-[77.08%] -mt-18 md:-mt-24 xl:-mt-17.5 flex flex-col gap-26.5 md:gap-30">
        {/* First article */}
        <article className="flex flex-col items-center gap-12 md:gap-14 xl:flex-row xl:gap-0">
          <picture>
            <source
              media="(min-width:1280px )"
              srcSet={`${enjoyDesk}, ${enjoyDeskx2}`}
            />
            <source
              media="(min-width:768px )"
              srcSet={`${enjoyTab}, ${enjoyTabx2}`}
            />
            <img
              src={enjoyMob}
              alt="Photo of mountains with river and sheeps"
              loading="lazy"
              className="shadow-presentation object-cover object-center xl:h-180 xl:basis-135 relative"
            />
          </picture>

          <div className="mx-auto flex flex-col items-center justify-center gap-8 md:gap-10 md:w-[79.75%] md:max-w-115 xl:gap-12 xl:justify-start xl:max-w-111.25 xl:mr-0">
            <Separator style="xl:self-start" />
            <div className="text-center xl:text-left">
              <h2 className="secType text-slate-800 mb-3 md:mb-6">
                Enjoyable place
                <br />
                for all the family
              </h2>
              <p className="firtType text-slate-800">
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </div>
          </div>
        </article>

        {/* Second article */}
        <article className="flex flex-col items-center gap-12 md:gap-14 xl:flex-row-reverse xl:gap-0">
          <picture className="relative">
            <source
              media="(min-width:1280px )"
              srcSet={`${locallyDesk}, ${locallyDeskx2}`}
            />
            <source
              media="(min-width:768px )"
              srcSet={`${locallyTab}, ${locallyTabx2}`}
            />
            <img
              src={locallyMob}
              alt="Photo of mountains with river and sheeps"
              loading="lazy"
              className="shadow-presentation object-cover object-center xl:h-180 xl:basis-135 relative xl:z-2"
            />
            <LinesBlock style="absolute z-2 bottom-14 -right-14.5 xl:bottom-90.5 xl:-right-28.5" />
          </picture>

          <div className="mx-auto flex flex-col items-center justify-center gap-8 md:gap-10 md:w-[79.75%] md:max-w-115 xl:gap-12 xl:justify-start xl:max-w-111.25 xl:ml-0">
            <Separator style="xl:self-start" />
            <div className="text-center xl:text-left">
              <h2 className="secType text-slate-800 mb-3 md:mb-6">
                The most locally
                <br />
                sourced food
              </h2>
              <p className="firtType text-slate-800">
                All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
