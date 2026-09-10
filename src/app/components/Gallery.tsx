"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/images/backdrop.png",
    title: "عرض الباك دروب",
    width: 4323,
    height: 2647,
    aspect: "landscape",
  },
  {
    src: "/images/promotion-table.png",
    title: "عرض البروموشن تيبل",
    width: 4268,
    height: 7911,
    aspect: "portrait",
  },
  {
    src: "/images/rollup.png",
    title: "عرض الرول اب",
    width: 4268,
    height: 7793,
    aspect: "portrait",
  },
  {
    src: "/images/cork-stand.png",
    title: "عرض طاولة الكوركيتد استاند",
    width: 4268,
    height: 7965,
    aspect: "portrait",
  },
];

const slides = images.map((img) => ({ src: img.src }));

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function openLightbox(i: number) {
    setIndex(i);
    setOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openLightbox(i)}
            className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] text-right ${
              img.aspect === "landscape" ? "col-span-2 md:col-span-2" : ""
            }`}
            aria-label={`فتح ${img.title}`}
          >
            <div
              className={`relative w-full ${
                img.aspect === "landscape" ? "aspect-[16/9]" : "aspect-[9/16]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                sizes={
                  img.aspect === "landscape"
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
                priority={i === 0}
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-white/90 truncate">{img.title}</p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  );
}
