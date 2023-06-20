import { fireEvent, render, screen } from "@testing-library/react";
import CountryListItem from "./CountryListItem";
import { mockCountry } from "../../mocks/countryMock";
import { MemoryRouter } from "react-router-dom";
import BucketListContext from "../../contexts/BucketListContext";
import { Country } from "../../types/types";

describe("CountryListItem", () => {
  const addCountryMock = jest.fn();
  const removeCountryMock = jest.fn();
  const mockSelectedCountries: Country[] = [];

  const renderWithBucketListContext = (country: Country) => {
    return render(
      <MemoryRouter>
        <BucketListContext.Provider
          value={{
            addCountry: addCountryMock,
            removeCountry: removeCountryMock,
            selectedCountries: mockSelectedCountries,
          }}
        >
          <CountryListItem country={country} />
        </BucketListContext.Provider>
      </MemoryRouter>
    );
  };

  it("renders country name as h2", () => {
    renderWithBucketListContext(mockCountry);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: mockCountry.name.common,
    });
    expect(heading).toBeInTheDocument();
  });

  test("calls addCountry when 'Add to list' button is clicked", () => {
    renderWithBucketListContext(mockCountry);

    const addToBucketListButton = screen.getByText("Add to list");
    fireEvent.click(addToBucketListButton);

    expect(addCountryMock).toHaveBeenCalledTimes(1);
    expect(addCountryMock).toHaveBeenCalledWith(mockCountry);
  });

  test("calls removeCountry when 'Remove from list' button is clicked", () => {
    mockSelectedCountries.push(mockCountry);
    renderWithBucketListContext(mockCountry);

    const removeFromBucketListButton = screen.getByText("Remove from list");
    fireEvent.click(removeFromBucketListButton);

    expect(removeCountryMock).toHaveBeenCalledTimes(1);
    expect(removeCountryMock).toHaveBeenCalledWith(mockCountry.cca3);
  });
});
