import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../data/Men/men_kurta";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white shadow-slate-500"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            area-aria-label="next"
          >
            <KeyboardArrowLeftIcon
              onClick={slideNext}
              sx={{ transform: "rotate(90deg)", color: "Black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white shadow-slate-500"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-4rem",
              transform: "translateX(50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            area-aria-label="next"
          >
            <KeyboardArrowLeftIcon
              onClick={slidePrev}
              sx={{ transform: "rotate(90deg)", color: "Black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
