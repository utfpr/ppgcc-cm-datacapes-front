import { render } from "@testing-library/react";
import { Pagination } from "./index";

describe("Pagination components", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Pagination
        onPageChange={() => {}}
        totalCountOfRegisters={100}
        currentPage={1}
        registersPerPage={10}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render 3 pagination items when current page is 1", () => {
    const { container } = render(
      <Pagination
        onPageChange={() => {}}
        totalCountOfRegisters={100}
        currentPage={1}
        registersPerPage={10}
      />
    );

    expect(container.querySelectorAll("button").length).toBe(3);
  });
  it("should render 5 pagination items when current page is 5", () => {
    const { container } = render(
      <Pagination
        onPageChange={() => {}}
        totalCountOfRegisters={100}
        currentPage={5}
        registersPerPage={10}
      />
    );

    expect(container.querySelectorAll("button").length).toBe(5);
  });
});
