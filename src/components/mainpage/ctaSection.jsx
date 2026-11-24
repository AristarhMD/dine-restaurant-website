import Button from "../reusable/Button";

export default function CTASection() {
  return (
    <section className="relative h-82 overflow-hidden flex items-center">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet="/images/booking/hero-bg-desktop.jpg, /images/booking/hero-bg-desktop@2x.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/images/booking/hero-bg-tablet.jpg, /images/booking/hero-bg-tablet@2x.jpg"
        />
        <img
          src="/images/booking/hero-bg-mobile.jpg"
          alt="Photo of the dishes"
          className="absolute top-0 right-0 object-cover -z-1"
        />
      </picture>
      <div className="mx-auto w-[87.2%] md:w-[89.71%] xl:w-[77.08%] flex flex-col items-center text-center gap-5 md:gap-6 xl:justify-between xl:flex-row">
        <h3 className="secType text-neutral-0">Ready to make a reservation?</h3>
        <Button type="btnTOne" />
      </div>
    </section>
  );
}
