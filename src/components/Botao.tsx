type ButtonProps = {
    funcao: () => void;
    texto: React.ReactNode;
    classe: string
}
function Botao({funcao, texto, classe}: ButtonProps) {
    return (
        <button onClick={funcao} className={classe} type="button" >{texto}</button>
    )
}


export default Botao;