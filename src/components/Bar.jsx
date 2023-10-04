import '../styles/bar.css';

export default function Bar({ day, maxAmount, currentDay }) {
    const height = day.amount / maxAmount * (200 - 48); // 200 - height of div, 48 - height of amount label with margin
    const isCurrentDay = day.day === currentDay;

    return (
        <div className="bar">
            <div className={`bar__value ${isCurrentDay ? 'bar__value--current-day' : ''}`} style={{height: `${height}px`}}>
                <div className='bar__label'>
                    {`$${day.amount}`}
                </div>
            </div>
            <span className='bar__title'>{day.day}</span>
        </div>
    )
}