import '../styles/balance.css';

export default function Balance() {
    return (
        <section className="balance">
            <div className="balance__info">
                <h2 className="balance__info-title">My balance</h2>
                <p className="balance__info-amount">$921.48</p>
            </div>
            <div className="balance__logo">
                <img className="balance__logo-image" src="/images/logo.svg" alt="logo" />
            </div>
        </section>
    )
}