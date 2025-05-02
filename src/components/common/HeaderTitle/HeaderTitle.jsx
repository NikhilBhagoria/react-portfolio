import React from 'react'
import ScrollReveal from '../../ScrollReveal'

const HeaderTitle = ({ title,children,style='' }) => {
    return (
        <ScrollReveal>
        <div className={`text-center mb-16 animate__animated animate__fadeIn ${style}`}>
            <h2 className="text-3xl font-extrabold text-[var(--color-title-text)] sm:text-4xl">
                {title}
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
                <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] mx-auto rounded-full"></div>
            </div>
            {children}
        </div>
        </ScrollReveal>
    )
}

export default HeaderTitle