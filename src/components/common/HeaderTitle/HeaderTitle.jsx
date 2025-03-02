import React from 'react'

const HeaderTitle = ({ title }) => {
    return (
        <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-extrabold text-[var(--color-dark)] sm:text-4xl">
                {title}
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
                <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-dark)] mx-auto rounded-full"></div>
            </div>
        </div>
    )
}

export default HeaderTitle