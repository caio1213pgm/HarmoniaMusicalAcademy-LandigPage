import style from "./iframe.module.css"

function Iframe() {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5100255057496!2d-34.89196622517863!3d-8.049341991977975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18eea0fde521%3A0x95ae1cb013c367f6!2sConservatorio%20Pernambucano%20De%20Musica!5e0!3m2!1spt-BR!2sbr!4v1738695582467!5m2!1spt-BR!2sbr"  loading="eager" className={style.iframe} ></iframe>
        </div>
    )
}

export default Iframe;