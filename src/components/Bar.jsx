import { useState } from 'react';
import '../styles/bar.css';

export default function Bar({ day, maxAmount, currentDay }) {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const height = day.amount / maxAmount * (200 - 50); // 200 - height of div, 50 - height of amount label with margin
    const isCurrentDay = day.day === currentDay;

    const handleMouseEnter = function() {
        setIsMouseEnter(true);
    }

    const handleMouseLeave = function() {
        setIsMouseEnter(false);
    }

    return (
        <div className="bar">
            <div className={`bar__label ${isMouseEnter ? 'bar__label--visible' : ''}`}>
                {`$${day.amount}`}
            </div>
            <div
                className={`bar__value ${isCurrentDay ? 'bar__value--current-day' : ''}`}
                style={{height: `${height}px`}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            </div>
            <span className='bar__title'>{day.day}</span>
        </div>
    )
}