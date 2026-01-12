"use client";

import Image from "next/image";

export default function FullScreenImage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* صورة الخلفية */}
      <Image
        src="https://marketplace.canva.com/d_EXY/MAEF_td_EXY/1/s2/canva-%D8%AF%D9%88%D9%86-%D8%B9%D9%86%D9%88%D8%A7%D9%86-MAEF_td_EXY.jpg"
        alt="دون عنوان"
        fill
        className="object-cover object-center"
        priority
      />

      {/* محتوى فوق الصورة (اختياري) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          مرحبًا بك في مطعم الأحلام
        </h1>
        <p className="text-lg md:text-2xl text-center max-w-xl">
          استمتع بأفضل الأطعمة الطازجة واللذيذة، محضرة بحب ومكونات عالية الجودة.
        </p>
      </div>
    </div>
  );
}
