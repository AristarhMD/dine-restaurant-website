import FormBook from "../reusable/FormBook";
import Rectangle from "../reusable/Rectangle";

export default function MainBook() {
  return (
    <main className="h-133.5 md:h-108.75 xl:h-80 bg-neutral-0 relative">
      <Rectangle style="invisible xl:visible absolute top-0 right-[31%] rounded-br-[100px]" />
      <FormBook />
    </main>
  );
}
