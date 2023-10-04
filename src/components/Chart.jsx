import Bar from './Bar';
import Summary from './Summary';
import '../styles/chart.css';

export default function Chart({ data }) {
    const maxAmount = data.reduce((max, item) => (item.amount > max ? item.amount : max), 0);

    return (
        <section className="chart">
            <h1 className="chart__title">Spending - Last 7 days</h1>
            <div className="chart__bars">
                {data.map((item) => (
                    <Bar key={item.day} day={item} maxAmount={maxAmount} />
                ))}
            </div>
            <span className="chart__divider"></span>
            <Summary />
        </section>
    )
}