import React from "react";
import { render, screen } from "@testing-library/react";
import SingleBikeCard from "../components/SingleBikeCard";
import "@testing-library/jest-dom/extend-expect";

test("Re", () => {
  render(
    <SingleBikeCard
      bike={{
        id: 1432022,
        title: "2015 Specialized Roubaix",
        description: "",
        date_stolen: 1667080800,
        thumb:
          "https://files.bikeindex.org/uploads/Pu/652770/small_WP_20150627_16_10_19_Pro__highres.jpg",
        stolen_location: "Seattle, WA 98109, US",
      }}
    />
  );
  const titleElement = screen.getByRole("bike-title");
  expect(titleElement).toHaveTextContent("2015 Specialized Roubaix");

  const dateElement = screen.getByRole("bike-stolen-date");
  expect(dateElement).toHaveTextContent(
    new Date(1667080800 * 1000).toLocaleDateString()
  );

  const locationElement = screen.getByRole("bike-stole-loc");
  expect(locationElement).toHaveTextContent("Seattle, WA 98109, US");

  const imageElement = screen.getByRole("bike-image");
  expect(imageElement).toBeInTheDocument();
});
