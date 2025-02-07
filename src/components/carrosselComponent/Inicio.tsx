import CardInicio from "./CardInicio";
import style from "./carrossel.module.css";


function Inicio(){


    return(
        <>
        <h1 className={style.title}>O que oferecemos?</h1>
        <div className={style.carrossel}>
        <CardInicio/>
        </div>
        </>
    )
}

export default Inicio;