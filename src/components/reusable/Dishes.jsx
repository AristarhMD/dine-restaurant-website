import { Fragment } from "react";

export default function Dishes() {
  const data = [
    {
      mobileImgPath: "/images/menu/salmon-mobile.jpg",
      tabletImgPath:
        "/images/menu/salmon-desktop-tablet.jpg, /images/menu/salmon-desktop-tablet@2x.jpg",
      imgAlt: "Photo of the fish dish",
      header: "Seared Salmon Fillet",
      text: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    },
    {
      mobileImgPath: "/images/menu/beef-mobile.jpg",
      tabletImgPath:
        "/images/menu/beef-desktop-tablet.jpg, /images/menu/beef-desktop-tablet@2x.jpg",
      imgAlt: "Photo of the beef dish",
      header: "Rosemary Filet Mignon",
      text: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    },
    {
      mobileImgPath: "/images/menu/chocolate-mobile.jpg",
      tabletImgPath:
        "/images/menu/chocolate-desktop-tablet.jpg, /images/menu/chocolate-desktop-tablet@2x.jpg",
      imgAlt: "Photo of the chocolate dessert",
      header: "Summer Fruit Chocolate Mousse",
      text: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    },
  ];
  return (
    <>
      {data.map((dish, idx) => {
        if (idx < data.length - 1) {
          return (
            <Fragment key={idx}>
              <article className="flex flex-col items-center gap-10 md:gap-15.5 md:flex-row">
                <picture className="relative">
                  <source
                    media="(min-width:768px )"
                    srcSet={dish.tabletImgPath}
                  />
                  <img
                    src={dish.mobileImgPath}
                    alt={dish.imgAlt}
                    loading="lazy"
                    className="md:h-24 md:w-32 object-cover object-center"
                  />
                  <span className="invisible md:visible absolute left-full top-[19.27%] w-8 h-px bg-stone-500"></span>
                </picture>
                <div className="text-center md:text-left text-neutral-0">
                  <h3 className="preset-4-b mb-2 md:mb-1.5">{dish.header}</h3>
                  <p className="preset-6 w-[80%] md:w-[88%] xl:w-full mx-auto md:ml-0">
                    {dish.text}
                  </p>
                </div>
              </article>
              <hr className="w-full border-neutral-0/15 mt-5 mb-6 md:my-6" />
            </Fragment>
          );
        }

        return (
          <article
            className="flex flex-col items-center gap-10 md:gap-15.5 md:flex-row"
            key={idx}
          >
            <picture className="relative">
              <source media="(min-width:768px )" srcSet={dish.tabletImgPath} />
              <img
                src={dish.mobileImgPath}
                alt={dish.imgAlt}
                loading="lazy"
                className="md:h-24 md:w-32 object-cover object-center"
              />
              <span className="invisible md:visible absolute left-full top-[19.27%] w-8 h-px bg-stone-500"></span>
            </picture>
            <div className="text-center md:text-left text-neutral-0">
              <h3 className="preset-4-b mb-2 md:mb-1.5">{dish.header}</h3>
              <p className="preset-6 w-[80%] md:w-[88%] xl:w-full mx-auto md:ml-0">
                {dish.text}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
}
