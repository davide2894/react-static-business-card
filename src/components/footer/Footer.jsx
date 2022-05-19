export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer__icon-list">
                <li className="footer__icon footer__icon--twitter">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Twitter</span>
                    </a>
                </li>
                <li className="footer__icon footer__icon--facebook">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Facebook</span>
                    </a>
                </li>
                <li className="footer__icon footer__icon--instagram">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Instagram</span>
                    </a>
                </li>
                <li className="footer__icon footer__icon--linkedin">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Linkedin</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}