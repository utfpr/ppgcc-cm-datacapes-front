import { render, screen } from "@testing-library/react";
import { SidebarContent } from ".";


jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                asPath: "/home",
            };
        },
    };
});

describe("Sidebar components", () => {
    it("should render correctly", () => {
        const { debug } = render(<SidebarContent onClose={() => { }} />);
        debug();
        expect(screen.getByText("Datacapes")).toBeInTheDocument();
    });

    it("should close sidebar when close button is clicked", () => {
        const mockOnClose = jest.fn();
        const { debug } = render(<SidebarContent onClose={mockOnClose} />);
        debug();
        const button = screen.getByTitle("close");
        expect(button).toBeInTheDocument();
        button.click();
        expect(mockOnClose).toHaveBeenCalled();
    });
}
);