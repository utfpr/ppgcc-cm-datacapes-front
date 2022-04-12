import { render, screen } from "@testing-library/react";
import { MobileNav } from ".";

describe("MobileNav components", () => {
  it("should render correctly", () => {
    const { container } = render(<MobileNav onOpen={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it("should render a menu button", () => {
    const { container } = render(<MobileNav onOpen={() => {}} />);

    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("should render a logo", () => {
    const { container } = render(<MobileNav onOpen={() => {}} />);

    expect(container.querySelector("img")).toBeInTheDocument();
  });
});
