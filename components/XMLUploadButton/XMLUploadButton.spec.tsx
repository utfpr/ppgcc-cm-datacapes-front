import { render, screen } from "@testing-library/react";
import { XMLUploadButton } from ".";

describe("XMLUploadButton components", () => {
  it("renders correctly ", () => {
    const { debug } = render(<XMLUploadButton />);
    debug();
    expect(screen.getByText("Enviar XML")).toBeInTheDocument();
  });

  it("should attach a file", () => {
    const { debug } = render(<XMLUploadButton />);
    debug();
    const fileRef = screen.getByTitle("file");
    expect(fileRef).toBeInTheDocument();
  });
  it("should open file selector when clicked", () => {
    const { debug } = render(<XMLUploadButton />);
    debug();
    const button = screen.getByTitle("upload");
    expect(button).toBeInTheDocument();
    button.click();
    expect(screen.getByTitle("file")).toBeInTheDocument();
  });
});
