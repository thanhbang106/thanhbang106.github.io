import React from "react";

export default function SecondPage() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "1830px",
        height: "600px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div>
        <h1 style={{ color: "#FFFFFF", fontSize: "48px", textAlign: "center" }}>
          Enjoy your on TV.
        </h1>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <img
          style={{
            width: "600px",
            height: "500px",
            gridColumn: "1/1",
            gridRow: "1/1",
          }}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />

        <video
          //controls
          autoPlay
          loop
          style={{
            width: "432px",
            height: "350px",
            gridColumn: "1/2",
            gridRow: "1/2",
            // objectFit: "contain",
          }}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        />
      </div>
    </div>
  );
}
