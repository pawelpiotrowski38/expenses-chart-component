import data from '../../data.json';
import Chart from './Chart';
import Balance from './Balance';
import '../styles/app.css';

export default function App() {
    return (
        <main className="main">
            <Balance />
            <Chart data={data} />
        </main>
    )
}
