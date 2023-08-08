import { render } from "@testing-library/react";
import Rodape from "./index";

test("Renderiza o texto corretamente", () => {
  const { getByText } = render(<Rodape />);
  const texto = getByText(/Desenvolvido por Alura - Projeto fictício sem fins comerciais./i);
  expect(texto).toBeInTheDocument();
});