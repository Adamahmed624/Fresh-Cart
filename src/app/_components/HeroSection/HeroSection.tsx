"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImage from "@/assets/home-slider-1.png";
import Link from "next/link";

const slides = [
  {
    image: heroImage.src,
    title: "Fresh Products Delivered to your Door",
    text: "Get 20% off your first order",
    buttons: [
      { label: "Shop Now", href: "/products", primary: true },
      { label: "View Deals", href: "/deals", primary: false },
    ],
  },
  {
    image: heroImage.src,
    title: "Premium Quality Guaranteed",
    text: "Fresh from farm to your table",
    buttons: [
      { label: "Shop Now", href: "/products", primary: true },
      { label: "Learn More", href: "/about", primary: false },
    ],
  },
  {
    image: heroImage.src,
    title: "Fast & Free Delivery",
    text: "Same day delivery available",
    buttons: [
      { label: "Order Now", href: "/products", primary: true },
      { label: "Delivery Info", href: "/delivery", primary: false },
    ],
  },
];

const features = [
  {
    bg: "bg-blue-50",
    color: "text-blue-500",
    title: "Free Shipping",
    text: "On orders over 500 EGP",
    path: "M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
    viewBox: "0 0 576 512",
  },
  {
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    title: "Secure Payment",
    text: "100% secure transactions",
    path: "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z",
    viewBox: "0 0 512 512",
  },
  {
    bg: "bg-orange-50",
    color: "text-orange-500",
    title: "Easy Returns",
    text: "14-day return policy",
    path: "M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z",
    viewBox: "0 0 512 512",
  },
  {
    bg: "bg-purple-50",
    color: "text-purple-500",
    title: "24/7 Support",
    text: "Dedicated support team",
    path: "M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z",
    viewBox: "0 0 448 512",
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperElRef = useRef<HTMLDivElement>(null);
  const prevElRef = useRef<HTMLDivElement>(null);
  const nextElRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<SwiperType | null>(null);

  const featuresRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!swiperElRef.current || !sectionRef.current) return;

    const resetSlide = (slideEl: Element) => {
      const title = slideEl.querySelector(".slide-title");
      const text = slideEl.querySelector(".slide-text");
      const cta = slideEl.querySelector(".slide-cta");
      gsap.set(title, { opacity: 0, y: 20 });
      gsap.set(text, { opacity: 0, y: 20 });
      gsap.set(cta, { opacity: 0, y: 30 });
    };

    const animateSlide = (slideEl: Element) => {
      const title = slideEl.querySelector(".slide-title");
      const text = slideEl.querySelector(".slide-text");
      const cta = slideEl.querySelector(".slide-cta");

      gsap
        .timeline({ defaults: { overwrite: true } })
        .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(
          text,
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .to(
          cta,
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
    };

    const replayActiveSlide = () => {
      const sw = swiperInstanceRef.current;
      if (!sw) return;
      const activeSlide = sw.slides[sw.activeIndex];
      resetSlide(activeSlide);
      animateSlide(activeSlide);
    };

    const swiper = new Swiper(swiperElRef.current, {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} w-2.5! h-2.5! bg-white/60! opacity-100! [&.swiper-pagination-bullet-active]:w-7! [&.swiper-pagination-bullet-active]:bg-white! [&.swiper-pagination-bullet-active]:rounded-full! transition-all duration-300"></span>`;
        },
      },
      navigation: { prevEl: prevElRef.current, nextEl: nextElRef.current },
      on: {
        init(sw: SwiperType) {
          sw.slides.forEach((slideEl) => resetSlide(slideEl));
          animateSlide(sw.slides[sw.activeIndex]);
        },
        slideChangeTransitionStart(sw: SwiperType) {
          resetSlide(sw.slides[sw.activeIndex]);
        },
        slideChangeTransitionEnd(sw: SwiperType) {
          animateSlide(sw.slides[sw.activeIndex]);
        },
      },
    });

    swiperInstanceRef.current = swiper;

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            replayActiveSlide();
          }
        });
      },
      { threshold: 0.4 },
    );

    heroObserver.observe(sectionRef.current);

    const resetCards = () => {
      gsap.set(cardRefs.current, { opacity: 0, y: 20 });
    };

    const animateCards = () => {
      gsap.timeline({ defaults: { overwrite: true } }).to(cardRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });
    };

    resetCards();

    const featuresObserver = featuresRef.current
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCards();
                featuresObserver?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 },
        )
      : null;

    if (featuresRef.current && featuresObserver) {
      featuresObserver.observe(featuresRef.current);
    }

    return () => {
      heroObserver.disconnect();
      featuresObserver?.disconnect();
      swiper.destroy(true, true);
      swiperInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      <div className="relative" ref={sectionRef}>
        <div className="swiper mySwiper" ref={swiperElRef}>
          <div className="swiper-wrapper">
            {slides.map((slide, i) => (
              <div className="swiper-slide" key={i}>
                <div
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-100 flex items-center justify-center"
                >
                  <div className="py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50 flex items-center">
                    <div className="container mx-auto px-5">
                      <h2 className="slide-title text-white text-3xl font-bold mb-4 max-w-96">
                        {slide.title}
                      </h2>
                      <p className="slide-text">{slide.text}</p>
                      <div className="slide-cta mt-4">
                        {slide.buttons.map((btn, j) => (
                          <Link
                            key={j}
                            className={
                              btn.primary
                                ? "bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                                : "bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                            }
                            href={btn.href}
                          >
                            {btn.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <div
          ref={prevElRef}
          className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="text-lg" width="1em" height="1em" viewBox="0 0 320 512" aria-hidden="true">
            <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
          </svg>
        </div>

        <div
          ref={nextElRef}
          className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="text-lg" width="1em" height="1em" viewBox="0 0 320 512" aria-hidden="true">
            <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
          </svg>
        </div>
      </div>

      <section className="py-8 bg-gray-50" ref={featuresRef}>
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`${feature.bg} ${feature.color} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
                >
                  <svg
                    className="size-5"
                    role="img"
                    viewBox={feature.viewBox}
                    aria-hidden="true"
                  >
                    <path fill="currentColor" d={feature.path}></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}