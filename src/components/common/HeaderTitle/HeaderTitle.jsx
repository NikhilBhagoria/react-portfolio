import React from 'react'

const HeaderTitle = ({ title }) => {
    return (
        <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-extrabold text-[#f9f871] sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                {title}
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
                <div className="h-1.5 w-24 bg-gradient-to-r from-[#86d17b] to-[#21a084] mx-auto rounded-full"></div>
            </div>
        </div>
    )
}

export default HeaderTitle