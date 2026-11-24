export default function FormBook() {
  return (
    <form
      action="#"
      className="bg-neutral-0 absolute z-0 left-1/2 xl:left-[51%] -translate-x-1/2 xl:translate-x-0 -top-34.25 md:-top-57.5 xl:-top-61.75 py-9 px-8 md:p-12 shadow-presentation w-[88%] md:w-[70.31%] max-w-135 flex flex-col gap-3 "
    >
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-full"
        />
        <span className="invisible preset-8 text-red-500">
          This field is incomplet
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900"
        />
        <span className="invisible preset-8 text-red-500">
          This field is incomplet
        </span>
      </div>

      <div className="flex flex-col mb-5 md:flex-row gap-2 w-full md:justify-between">
        <label
          htmlFor=""
          className="flex items-center gap-2 md:flex-col md:items-start md:basis-60 preset-4-r text-neutral-900"
        >
          Pick a date
          <span className="invisible preset-8 text-red-500">
            This field is incomplet
          </span>
        </label>
        <div className="flex items-center justify-between w-full gap-1">
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-[30%] md:basis-20"
          />
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-[30%] md:basis-20"
          />
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YYYY"
            className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-[40%] md:basis-24"
          />
        </div>
      </div>

      <div className="flex flex-col mb-5 md:flex-row gap-2 w-full md:justify-between">
        <label
          htmlFor=""
          className="flex items-center gap-2 md:flex-col md:items-start md:basis-60 preset-4-r text-neutral-900"
        >
          Pick a time
          <span className="invisible preset-8 text-red-500">
            This field is incomplet
          </span>
        </label>
        <div className="flex items-end justify-center w-full gap-3">
          <input
            type="number"
            name="hour"
            id="hour"
            placeholder="09"
            className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-[30%] md:basis-20"
          />
          <input
            type="number"
            name="minute"
            id="minute"
            placeholder="00"
            className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-[30%] md:basis-20"
          />
          <select
            name="partOfDay"
            id="partOfDay"
            className="pb-3 px-4 border-b border-neutral-400 preset-4-r placeholder:text-neutral-900/50 text-neutral-900 w-[40%] md:basis-24"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <div>
        <div className="w-full grid grid-cols-[min-content_1fr_min-content] gap-x-4 pb-3 border-b border-neutral-400 md:px-5">
          <button className="size-7.5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="3">
              <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z" />
            </svg>
          </button>
          <input
            type="number"
            name="persons"
            id="persons"
            placeholder="1"
            defaultValue={1}
            className="text-center w-full"
          />
          <button className="size-7.5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11">
              <path
                fill="#9E7F66"
                d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"
              />
            </svg>
          </button>
        </div>
        <span className="invisible preset-8 text-red-500">
          This field is incomplet
        </span>
      </div>
      <button className="btn-book btnTThree">make reservation</button>
    </form>
  );
}
