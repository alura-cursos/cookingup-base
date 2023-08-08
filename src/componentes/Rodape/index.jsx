import { styled } from "styled-components"

const RodapeContainer = styled.footer`
    background: var(--verde-escuro, #263A29);
    padding: 24px 120px;
    color: var(--creme, #FFFAF3);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`


const Rodape = () => {
    return (<RodapeContainer>
        Desenvolvido por Alura - Projeto fictício sem fins comerciais.
    </RodapeContainer>)
}

export default Rodape