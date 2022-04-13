import { render, screen } from "@testing-library/react";
import { Navbar } from "./index";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/home",
      };
    },
  };
});

describe("Navbar components", () => {
  it("should render text as children", () => {
    const { debug } = render(<Navbar>Teste</Navbar>);
    debug();
    expect(screen.getByText("Teste")).toBeInTheDocument();
  });
});
