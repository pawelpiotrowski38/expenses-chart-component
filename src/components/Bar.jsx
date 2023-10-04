import '../styles/bar.css';

export default function Bar({ day, maxAmount }) {
    const height = day.amount/maxAmount * (200 - 48); // 200 - height of div, 48 - height of amount label with margin

    return (
        <div className="bar">
            <div className='bar__value' style={{height: `${height}px`}}></div>
            <span className='bar__label'>{day.day}</span>
        </div>
    )
}