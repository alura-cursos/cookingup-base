import { createContext, useState, useEffect } from 'react';
import db from './db.json';


export const IngredientesContext = createContext({
    categorias: [],
    ingredientesSelecionados: [],
    alternarIngrediente: () => null,
    ingredienteEstaSelecionado: (ingrediente) => true
});

export const IngredientesProvider = (props) => {
    const categorias = db.categorias;
    const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);

    const alternarIngrediente = (ingrediente) => {
        // Verifica se o ingrediente já foi selecionado
        if (ingredientesSelecionados.some(item => item.id === ingrediente.id)) {
            // Se sim, remove o ingrediente do array
            setIngredientesSelecionados(ingredientesSelecionados.filter(item => item.id !== ingrediente.id));
        } else {
            // Se não, adiciona o ingrediente ao array
            setIngredientesSelecionados([...ingredientesSelecionados, ingrediente]);
        }
    };

    const ingredienteEstaSelecionado = (ingrediente) => {
        // Verifica se o ingrediente está no array de ingredientes selecionados
        // return ingrediente.nome.includes('Manteiga')
        return ingredientesSelecionados.some(item => item.id === ingrediente.id);
    };

    return (
        <IngredientesContext.Provider value={{ categorias, ingredientesSelecionados, alternarIngrediente, ingredienteEstaSelecionado }}>
            {props.children}
        </IngredientesContext.Provider>
    );
};
