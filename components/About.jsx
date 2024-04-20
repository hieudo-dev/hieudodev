import { useRef } from "react";
import Image from "next/image";
import Underline from "@/components/Underline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const image = useRef();
  const about = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!image.current || !about.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.to(image.current, {
      objectPosition: `center calc(100%)`,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={about}
      className="container mx-auto flex h-screen gap-32 bg-purple-50 py-20"
    >
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="mb-6 rounded-full border border-purple-400 bg-purple-100 px-3 py-1 font-nunito text-sm font-normal tracking-widest text-purple-500 shadow-lg">
            ABOUT
          </p>
          <h2 className="mb-12 font-merriweather text-6xl font-bold text-gray-700">
            My name is
            <span className="relative ml-4 inline-flex">
              Hieu
              <Underline
                id="line"
                className="absolute -bottom-3 left-0 right-0 scale-y-[200%] text-purple-400"
              />
            </span>
          </h2>
          <p className="text-center font-nunito text-2xl font-normal leading-8 text-gray-500">
            I'm a software engineer from Vietnam, driven by a strong passion for
            learning and programming. My playground is web development, where I
            specialize in bridging the gap between frontend development and
            crafting exceptional user experiences.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center">
        <div className="relative">
          <div className="overflow-hidden">
            <Image
              ref={image}
              src="/me.png"
              alt="Hieu"
              width={500}
              height={500}
              className="relative z-10 aspect-square w-full object-cover"
            />
          </div>
          <div className="h-full w-full after:absolute after:left-10 after:top-10 after:block after:h-full after:w-full after:bg-indigo-400 after:content-['']"></div>
        </div>
      </div>
    </section>
  );
}
