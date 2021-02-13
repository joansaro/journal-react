import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://media.redadn.es/imagenes/the-legend-of-zelda-breath-of-the-wild-nintendo-switch_329851.jpg)'
                }}
            ></div>

            <div
                className="journal__entry-body"
            >
                    <p className="journal__entry-title">
                        Un nuevo dia
                    </p>
                    <p className="journal__entry-content">
                        lorem10dasñfhasóifnhaoisfnhcovne iéwnv eoqwvlhgyuguy
                        oyufyuguyogyu
                    </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
