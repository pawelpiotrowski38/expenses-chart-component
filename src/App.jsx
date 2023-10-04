import data from '../data.json';
import './styles.css';

export default function App() {
  console.log(data);
  return (
    <main className="main">
      <div className="balance-container">
        <div className="balance">
          <p className="balance-title">My balance</p>
          <p className="balance-amount">$921.48</p>
        </div>
        <div className="logo-container">
          <img className="logo" src="/images/logo.svg" alt="logo" />
        </div>
      </div>
      <div className="chart-container">
        <h1 className="chart-title">Spending - Last 7 days</h1>
        <div className="chart">
          {data.map((day) => (
            <div key={day.day} className='chart-element'>
              <div className='chart-element-bar' style={{height: `${day.amount}px`}}></div>
              <span className='chart-element-label'>{day.day}</span>
            </div>
          ))}
        </div>
        <span className="chart-divider"></span>
        <div className="total-container">
          <div className="total">
            <p className="total-title">Total this month</p>
            <p className="total-amount">$478.33</p>
          </div>
          <div className="difference">
            <p className="difference-amount">+2.4%</p>
            <p className="difference-title">from last month</p>
          </div>
        </div>
      </div>
    </main>
  )
}
