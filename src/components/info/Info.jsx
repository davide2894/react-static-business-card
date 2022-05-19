export default function Info() {
    return (
        <div className="info">
            <img src="" alt="profile picture"></img>
            <h1>Laura Smith</h1>
            <h2> Software engigneer</h2>
            <p className="info__website">laurasmith.website</p>
            <div className="info__buttons">
                <button className="info__button--email">
                    <span className="info__button--text">Email</span>
                    <span className="info__button--icon"></span>
                </button>
                <button className="info__button--email">
                    <span className="info__button--text">Linkedin</span>
                    <span className="info__button--icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}