import { render, fireEvent } from "@testing-library/react";
import TagIngrediente from "./index";

test("Renderiza o nome do ingrediente corretamente", () => {
    const ingrediente = { nome: "Tomate" };
    const { getByText } = render(<TagIngrediente ingrediente={ingrediente} />);
    const nomeIngrediente = getByText(/Tomate/i);
    expect(nomeIngrediente).toBeInTheDocument();
});

test("Chama a função onClick quando o botão é clicado", () => {
    const onClick = vi.fn();
    const { getByText } = render(
        <TagIngrediente ingrediente={{ nome: "Cebola" }} onClick={onClick} />
    );
    const botao = getByText(/Cebola/i);
    fireEvent.click(botao);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test('Teste de snapshot para o botão ativo da TagIngrediente', () => {
    const { container } = render(
        <TagIngrediente ingrediente={{ nome: 'Ingrediente 1' }} onClick={() => { }} ativo={true} />
    );
    expect(container).toMatchSnapshot();
});

test('Teste de snapshot para o botão inativo da TagIngrediente', () => {
    const { container } = render(
        <TagIngrediente ingrediente={{ nome: 'Ingrediente 1' }} onClick={() => { }} ativo={false} />
    );
    expect(container).toMatchSnapshot();
});