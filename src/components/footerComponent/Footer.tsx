import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import style from "./footer.module.css"

function Footer(){
    return (
        <footer className={style.container}>
            <div className={style.content}>
                <a href="https://instagram.com" >
                    <InstagramIcon  />
                </a>
                <a href="https://whatsapp.com">
                    <WhatsAppIcon />
                </a>
            </div>
            <p>© 2025 por Harmonia Musical Academy. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;