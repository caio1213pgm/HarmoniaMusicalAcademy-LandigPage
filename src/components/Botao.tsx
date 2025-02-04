type ButtonProps = {
    funcao: () => void;
    texto: string;
    classe: string
}
function Botao({funcao, texto, classe}: ButtonProps) {
    return (
        <button onClick={funcao} className={classe} type="button" >{texto}</button>
    )
}


export default Botao;