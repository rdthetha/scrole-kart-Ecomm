import logo from '../../image/scrolekart logo.svg'

export default function Footer(){

    return(

        <div>
            <div className="footer-container">
        <div className="footer-inner">
            <div className="footer-icon">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-content">
                <ul className="footer-link">
                    <a className="footer-link">Refund Policy</a>
                    <a className="footer-link">Shipping Policy</a>
                    <a className="footer-link">Terms and condition</a>
                </ul>
            </div>
        </div>
    </div>
        </div>
    )
}