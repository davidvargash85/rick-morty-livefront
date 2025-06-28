import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../utils/test-utils";
import CharacterCard from "@/components/molecules/CharacterCard";
import { mockCharacters } from "../../__mocks__/api-data";

describe("CharacterCard", () => {
  const mockCharacter = mockCharacters[0]; // Rick Sanchez

  test("renders character information correctly", () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(
      screen.getByRole("heading", { name: "Rick Sanchez" })
    ).toBeInTheDocument();

    expect(screen.getByText(/Status:/)).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();

    expect(screen.getByText(/Species:/)).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();

    expect(screen.getByText(/Location:/)).toBeInTheDocument();
    expect(screen.getByText("Citadel of Ricks")).toBeInTheDocument();

    // Check image
    expect(screen.getByAltText("Rick Sanchez")).toBeInTheDocument();
  });

  test("renders different character statuses correctly", () => {
    const deadCharacter = {
      ...mockCharacter,
      name: "Dead Character",
      status: "Dead" as const,
    };

    render(<CharacterCard character={deadCharacter} />);

    expect(screen.getByText("Dead")).toBeInTheDocument();
  });

  test("renders female character correctly", () => {
    const femaleCharacter = mockCharacters[2]; // Summer Smith

    render(<CharacterCard character={femaleCharacter} />);

    expect(screen.getByText("Summer Smith")).toBeInTheDocument();
  });

  test("has proper accessibility attributes", () => {
    render(<CharacterCard character={mockCharacter} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "aria-label",
      "View details for Rick Sanchez, Alive Human"
    );
    expect(link).toHaveAttribute("href", "/1");
  });

  test("has keyboard navigation support", async () => {
    const user = userEvent.setup();
    render(<CharacterCard character={mockCharacter} />);

    const link = screen.getByRole("link");

    // Test keyboard navigation
    await user.tab();
    expect(link).toHaveFocus();

    // Test enter key navigation (we can't test actual navigation in unit tests)
    expect(link).toHaveAttribute("href", "/1");
  });

  test("renders status indicator with proper styling", () => {
    render(<CharacterCard character={mockCharacter} />);

    // The status indicator dot should be present but hidden from screen readers
    const statusIndicator = screen
      .getByRole("link")
      .querySelector('[aria-hidden="true"]');
    expect(statusIndicator).toBeInTheDocument();
  });

  test("handles long character names gracefully", () => {
    const longNameCharacter = {
      ...mockCharacter,
      name: "This is a very long character name that should be truncated properly",
    };

    render(<CharacterCard character={longNameCharacter} />);

    expect(
      screen.getByText(
        "This is a very long character name that should be truncated properly"
      )
    ).toBeInTheDocument();
  });

  test("renders unknown status correctly", () => {
    const unknownCharacter = {
      ...mockCharacter,
      status: "unknown" as const,
      name: "Unknown Character",
    };

    render(<CharacterCard character={unknownCharacter} />);

    expect(screen.getByText("Unknown Character")).toBeInTheDocument();
    expect(screen.getByText("unknown")).toBeInTheDocument();
  });
});
