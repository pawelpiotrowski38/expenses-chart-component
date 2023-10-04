import '../styles/summary.css';

export default function Summary() {
    return (
        <section className="summary">
            <div className="summary__total">
                <p className="summary__total-title">Total this month</p>
                <p className="summary__total-amount">$478.33</p>
            </div>
            <div className="summary__difference">
                <p className="summary__difference-amount">+2.4%</p>
                <p className="summary__difference-title">from last month</p>
            </div>
        </section>
    )
}