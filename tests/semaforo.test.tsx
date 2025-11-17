import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SemaforoProvider } from "../src/context/SemaforoContext";
import App from "../src/App";

describe("Semaforo integrado", () => {
  it("cambia a verde cuando se pulsa el botón Verde", () => {
    const { getByText, getByTestId } = render(
      <SemaforoProvider>
        <App />
      </SemaforoProvider>
    );

    const botonVerde = getByText("Verde");
    fireEvent.click(botonVerde);

    const luzVerde = getByTestId("luz-verde");

    expect(luzVerde.parentElement?.style.opacity).toBe("1");
  });
});

