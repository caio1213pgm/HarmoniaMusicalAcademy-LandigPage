import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer(){
    return (
        <footer className="Footer">
            <div className="FooterIcons">
                <a href="https://instagram.com" className="txt">
                    <InstagramIcon sx={{width:"60px", height:"60px", cursor:"pointer"}} />
                </a>
                <a href="https://whatsapp.com" className="txt">
                    <WhatsAppIcon sx={{width:"60px", height:"60px", cursor:"pointer"}}/>
                </a>
            </div>
            <p>© 2025 por Harmonia Musical Academy. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;