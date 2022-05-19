import profilePicture from '../../profile-picture.png';
import './Info.scss';

export default function Info() {
    return (
        <div className="info businessCard__child">
            <img className="info__img" src={profilePicture} alt="profile picture" />
            <h1 className='info__name'>Laura Smith</h1>
            <h2 className='info__title'> Software engineer</h2>
            <p className="info__website">laurasmith.website</p>
            <div className="info__buttons">
                <button className="info__button info__button--email">
                    <span className="info__icon info__icon--email" aria-hidden="true"></span>
                    <span className="info__text">Email</span>
                </button>
                <button className="info__button info__button--email">
                    <span className="info__icon info__icon--linkedin" aria-hidden="true"></span>
                    <span className="info__text">Linkedin</span>
                </button>
            </div>
        </div>
    )
}