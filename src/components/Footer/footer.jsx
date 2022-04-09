import logo from '../../image/scrolekart logo.svg'

export default function Footer(){

    return(

        <div>
            <div class="footer-container">
        <div class="footer-inner">
            <div class="footer-icon">
                <img src={logo} alt="logo" />
            </div>
            <div class="footer-content">
                <ul class="footer-link">
                    <a class="footer-link" href="">Refund Policy</a>
                    <a class="footer-link" href="">Shipping Policy</a>
                    <a class="footer-link" href="">Terms and condition</a>
                </ul>
            </div>
        </div>
    </div>
        </div>
    )
}