export default function LinesBlock({ style }) {
  return (
    <ul className={`${style ? style : ""} flex flex-col w-40 h-19 gap-2`}>
      <li className="w-full h-1.5 bg-stone-500"></li>
      <li className="w-full h-1.5 bg-stone-500"></li>
      <li className="w-full h-1.5 bg-stone-500"></li>
      <li className="w-full h-1.5 bg-stone-500"></li>
      <li className="w-full h-1.5 bg-stone-500"></li>
      <li className="w-full h-1.5 bg-stone-500"></li>
    </ul>
  );
}
