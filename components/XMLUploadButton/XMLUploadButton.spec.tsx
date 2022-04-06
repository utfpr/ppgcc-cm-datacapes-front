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
    const fileRef = screen.getByTitle("upload");
    expect(fileRef).toBeInTheDocument();
  });
});
