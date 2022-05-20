import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer__icon-list">
                <li className="footer__icon footer__icon--twitter">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon icon--twitter" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Twitter</span>
                    </a>
                </li>
                <li className="footer__icon footer__icon--facebook">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon icon--facebook" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Facebook</span>
                    </a>
                </li>
                <li className="footer__icon footer__icon--instagram">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon icon--instagram" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Instagram</span>
                    </a>
                </li>
                <li className="footer__icon footer__icon--github">
                    <a className="footer__icon-anchor" href="#" target="_blank">
                        <span className="icon icon--github" aria-hidden="true"></span>
                        <span className="text visuallyHidden">Github</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}