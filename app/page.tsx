import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl italic underline decoration-red-200">Title</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base">Regular paragraph</p>
      <p className="text-sm">A descrition paragraph</p>
      <p className="note text-xs">A little note</p>
    </div>
  );
}
