import Bar from './Bar';
import Summary from './Summary';
import '../styles/chart.css';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export default function Chart({ data }) {
    const maxAmount = data.reduce((max, item) => (item.amount > max ? item.amount : max), 0);
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];

    return (
        <section className="chart">
            <h1 className="chart__title">Spending - Last 7 days</h1>
            <div className="chart__bars">
                {data.map((item) => (
                    <Bar
                        key={item.day}
                        day={item}
                        maxAmount={maxAmount}
                        currentDay={currentDay}
                    />
                ))}
            </div>
            <span className="chart__divider"></span>
            <Summary />
        </section>
    )
}