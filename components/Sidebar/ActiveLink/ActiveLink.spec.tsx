import { render, screen } from "@testing-library/react";
import { ActiveLink } from "./ActiveLink";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/home",
      };
    },
  };
});

describe("ActiveLink components", () => {
  it("renders correctly", () => {
    render(
      <ActiveLink href="/home">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link is as currently active", () => {
    render(
      <ActiveLink href="/home">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toHaveStyle({
      color: "yellow.orange",
    });
  });
  it("should have asPath as href if no href is provided", () => {
    render(
      <ActiveLink href="/home">
        <a>Home</a>
      </ActiveLink>
    );

    expect(screen.getByText("Home")).toHaveAttribute("href", "/home");
  });
});
