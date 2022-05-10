import { render } from "@testing-library/react";
import { Listing } from "./index";

const dataTest = [
  {
    id: "aasd34-32-df-sdf3",
    title: "Teste",
    author: "joaozinho",
    email: "teste@teste.com",
  },
  {
    id: "aasd34-32-sddsf-sdf3",
    title: "artigo 2",
    author: "leonardo",
    email: "abc@teste.com",
  },
  {
    id: "aasd34-32-asasf-sdf3",
    title: "Artigo 3",
    author: "oliveira",
    email: "def@gmail.com",
  },
];

describe("Listing components", () => {
  it("renders correctly", () => {
    const { container } = render(<Listing data={dataTest} />);

    expect(container).toMatchSnapshot();
  });

  it("should render a table with the correct number of rows", () => {
    const { container } = render(<Listing data={dataTest} />);

    expect(container.querySelectorAll("tr").length).toBe(dataTest.length + 1);
  });

  it("should render a table with the correct number of columns", () => {
    const { container } = render(<Listing data={dataTest} />);

    expect(container.querySelectorAll("th").length).toBe(dataTest.length);
  });

  it("should not render a table if there is no data", () => {
    const { container } = render(<Listing data={[]} />);

    expect(container.querySelectorAll("tr").length).toBe(1);
  });
});
