import React, { useContext } from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { IngredientesContext, IngredientesProvider } from './index';

test('alternarIngrediente adiciona e remove ingredientes corretamente', () => {
    const TestComponent = () => {
        const { ingredientesSelecionados, alternarIngrediente } = useContext(IngredientesContext);

        const handleClick = () => {
            const ingrediente = { id: 1, nome: 'Tomate' };
            alternarIngrediente(ingrediente);
        };

        return (
            <>
                <button onClick={handleClick}>Adicionar/Remover Ingrediente</button>
                <div data-testid="ingredientesSelecionados">{ingredientesSelecionados.length}</div>
            </>
        );
    };

    const { getByText, getByTestId } = render(
        <IngredientesProvider>
            <TestComponent />
        </IngredientesProvider>
    );

    const button = getByText('Adicionar/Remover Ingrediente');
    const ingredientesSelecionados = getByTestId('ingredientesSelecionados');

    expect(ingredientesSelecionados.textContent).toBe('0');

    fireEvent.click(button);
    expect(ingredientesSelecionados.textContent).toBe('1');

    fireEvent.click(button);
    expect(ingredientesSelecionados.textContent).toBe('0');
});

test('ingredienteEstaSelecionado retorna false se o ingrediente não está selecionado', () => {
    const TestComponent = () => {
        const { ingredienteEstaSelecionado } = useContext(IngredientesContext);

        const ingrediente = { id: 1, nome: 'Tomate' };
        const estaSelecionado = ingredienteEstaSelecionado(ingrediente);

        return (
            <div data-testid="estaSelecionado">{estaSelecionado.toString()}</div>
        );
    };

    const { getByTestId } = render(
        <IngredientesProvider>
            <TestComponent />
        </IngredientesProvider>
    );

    const estaSelecionado = getByTestId('estaSelecionado');

    expect(estaSelecionado.textContent).toBe('false');
});

test('se o ingrediente esta selecionado', () => {
    const TestComponent = () => {
        const { alternarIngrediente, ingredienteEstaSelecionado } = useContext(IngredientesContext);

        const ingrediente = { id: 1, nome: 'Tomate' };
        const handleClick = () => {
            alternarIngrediente(ingrediente);
        };

        const estaSelecionado = ingredienteEstaSelecionado(ingrediente)

        return (
            <>
                <button onClick={handleClick}>Adicionar/Remover Ingrediente</button>
                <div data-testid="estaSelecionado">{estaSelecionado.toString()}</div>
            </>
        );

        
    };

    const { getByTestId, getByText } = render(
        <IngredientesProvider>
            <TestComponent />
        </IngredientesProvider>
    );
    const estaSelecionado = getByTestId('estaSelecionado');
    expect(estaSelecionado.textContent).toBe('false');
    const button = getByText('Adicionar/Remover Ingrediente');
    fireEvent.click(button);
    expect(estaSelecionado.textContent).toBe('true');

})