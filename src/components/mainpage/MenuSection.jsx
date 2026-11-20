import Separator from "../reusable/Separator";
import Dishes from "../reusable/Dishes";

export default function MenuSection() {
  return (
    <section className="bg-neutral-900 w-full py-21.75 md:py-24.25 xl:pb-30 xl:pt-50 xl:-mt-20">
      <div className="mx-auto w-[87.2%] md:w-[74.60%] xl:w-[77.08%] flex flex-col items-center gap-20 md:gap-12 xl:gap-31.25 xl:flex-row xl:justify-between  ">
        {/* Header of the section */}
        <header className="text-neutral-0 text-center xl:text-left xl:self-start  xl:basis-115 xl:shrink-0">
          <Separator style="mb-10 xl:mb-12 mx-auto xl:ml-0" />
          <h2 className="secType mb-3 md:mb-7.5 xl:mb-6">
            A few highlights from
            <br /> our menu
          </h2>
          <p className="firstType">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </header>

        {/* Content */}
        <aside className="flex flex-col xl:pt-14 ">
          <Dishes />
        </aside>
      </div>
    </section>
  );
}
