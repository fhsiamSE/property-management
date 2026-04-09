"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ dynamic import (fix SSR issue)
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function Reviews() {
  // ✅ mount check (prevents crash)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // ✅ renamed to avoid confusion (component vs array)
  const reviewsData = [
    {
      name: "Jenny Wilson",
      image: "/images/jenny.png",
      comment: "Lorem ipsum dolor sit amet...",
      stars: 4,
    },
    {
      name: "Esther Howard",
      image: "/images/Esther.png",
      comment: "Lorem ipsum dolor sit amet...",
      stars: 4,
    },
    {
      name: "Robert Fox",
      image: "/images/Robert.png",
      comment: "Lorem ipsum dolor sit amet...",
      stars: 4,
    },
    {
      name: "Esther Howard",
      image: "/images/Esther.png",
      comment: "Lorem ipsum dolor sit amet...",
      stars: 4,
    },
    {
      name: "Robert Fox",
      image: "/images/Robert.png",
      comment: "Lorem ipsum dolor sit amet...",
      stars: 4,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true, // optional
    autoplaySpeed: 5000, // optional
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section>
      {/* Title */}
      <div style={{ textAlign: "center", marginTop: "2250px" }}>
        <span style={{ fontSize: "32px", fontWeight: "700" }}>
          Check Our Clients{" "}
        </span>
        <span
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#ED3C6A",
          }}
        >
          Review
        </span>
      </div>

      {/* Description */}
      <p style={{ 
         width: '738px',
          height: '54px',
          left: '320px',
          position: 'relative',
          opacity: 1,
        textAlign: "center", 
         fontFamily: 'DM Sans',
          padding: '50px',
          fontWeight: '500',
          fontStyle: 'Medium',
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 1)'
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Slider */}
      <div style={{ padding: "40x", marginTop: "20px"  }}>
        <Slider {...settings}>
          {reviewsData.map((review, index) => (
            <div key={index}>
              <div
                style={{
                  margin: "0 10px",
                  padding: "20px",
                  border: "2px solid #FDEBF0",
                  borderRadius: "11px",
                  background: "#fff",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  minHeight: "150px",
                }}
              >
                {/* Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <div>
                  <h4 style={{ margin: 0 }}>{review.name}</h4>
                  <p style={{ fontSize: "14px", margin: "8px 0" }}>
                    {review.comment}
                  </p>

                  {/* Stars */}
                  <div>
                    {[...Array(review.stars)].map((_, i) => (
                      <span key={i} style={{ color: "#FF9D00" }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}