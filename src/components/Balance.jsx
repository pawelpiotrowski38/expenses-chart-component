import '../styles/balance.css';

export default function Balance() {
    return (
        <section className="balance">
            <div className="balance__info">
                <p className="balance__info-title">My balance</p>
                <p className="balance__info-amount">$921.48</p>
            </div>
            <div className="balance__logo">
                <img className="balance__logo-image" src="/images/logo.svg" alt="logo" />
            </div>
        </section>
    )
}