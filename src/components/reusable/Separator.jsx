export default function Separator({ style }) {
  return (
    <div
      className={`${style ? style : "mx-auto"} w-18 flex items-center justify-between`}
    >
      <span className="size-2 rounded-full border border-stone-500"></span>
      <span className="h-px w-14 bg-stone-500 "></span>
    </div>
  );
}
