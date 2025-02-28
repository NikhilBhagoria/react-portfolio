import React, { useState, useEffect, useRef } from 'react'

const Scrolling = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "UI/UX Design",
            image: "/project1.png",
            description: "From wireframes to interactive prototypes, I focus on creating intuitive and user-friendly interfaces. Let's optimize your digital products for better user experience.",
            features: [
                "Wireframes And Interactive Prototypes",
                "Intuitive, User-Friendly Design",
                "Design Systems For Consistency",
                "Mobile/Web Apps",
                "UI Assets Ready For Development"
            ],
            duration: "4-12 WEEKS",
            buttonText: "Elevate Your Experience"
        },
        {
            id: 2,
            title: "2",
            image: "/project2.png",
            description: "Professional augmented reality application with cutting-edge features and seamless user experience.",
            features: [
                "Custom AR Development",
                "Interactive 3D Elements",
                "Cross-platform Compatibility",
                "Intuitive User Interface",
                "Performance Optimization"
            ],
            duration: "2-3 WEEKS"
        },
        {
            id: 3,
            title: "3",
            image: "/project1.png",
            description: "Let's create a memorable brand identity that speaks to your audience. From logos to color palettes, I design everything to reflect your brand's values and vision.",
            features: [
                "Custom Logo Design",
                "Cohesive Brand Colors And Typography",
                "Brand Guidelines For Consistency",
                "A Unique, Memorable Brand Identity",
                "Files For All Your Branding Needs"
            ],
            duration: "1-2 WEEKS"
        },
        {
            id: 4,
            title: "4",
            image: "/project2.png",
            description: "Professional augmented reality application with cutting-edge features and seamless user experience.",
            features: [
                "Custom AR Development",
                "Interactive 3D Elements",
                "Cross-platform Compatibility",
                "Intuitive User Interface",
                "Performance Optimization"
            ],
            duration: "2-3 WEEKS"
        },
        {
            id: 5,
            title: "5",
            image: "/project1.png",
            description: "Let's create a memorable brand identity that speaks to your audience. From logos to color palettes, I design everything to reflect your brand's values and vision.",
            features: [
                "Custom Logo Design",
                "Cohesive Brand Colors And Typography",
                "Brand Guidelines For Consistency",
                "A Unique, Memorable Brand Identity",
                "Files For All Your Branding Needs"
            ],
            duration: "1-2 WEEKS"
        },
        {
            id: 6,
            title: "6",
            image: "/project2.png",
            description: "Professional augmented reality application with cutting-edge features and seamless user experience.",
            features: [
                "Custom AR Development",
                "Interactive 3D Elements",
                "Cross-platform Compatibility",
                "Intuitive User Interface",
                "Performance Optimization"
            ],
            duration: "2-3 WEEKS"
        },
        {
            id: 7,
            title: "7",
            image: "/project1.png",
            description: "Let's create a memorable brand identity that speaks to your audience. From logos to color palettes, I design everything to reflect your brand's values and vision.",
            features: [
                "Custom Logo Design",
                "Cohesive Brand Colors And Typography",
                "Brand Guidelines For Consistency",
                "A Unique, Memorable Brand Identity",
                "Files For All Your Branding Needs"
            ],
            duration: "1-2 WEEKS"
        },
        {
            id: 8,
            title: "8",
            image: "/project2.png",
            description: "Professional augmented reality application with cutting-edge features and seamless user experience.",
            features: [
                "Custom AR Development",
                "Interactive 3D Elements",
                "Cross-platform Compatibility",
                "Intuitive User Interface",
                "Performance Optimization"
            ],
            duration: "2-3 WEEKS"
        },
        // Add more projects as needed
    ]

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-50% 0px',
                threshold: 0
            }
        );

        const projectElements = container.querySelectorAll('.project-section');
        projectElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative bg-[#0a0a0a]">
            {/* Main Container */}
            <div ref={containerRef} className="flex flex-col md:flex-row">
                {/* Left Side - Scrolling Projects */}
                <div className="w-full md:w-1/2">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            data-index={index}
                            className="project-section min-h-screen flex items-center p-6"
                        >
                            <div
                                className={`
                                    w-full aspect-[4/3] rounded-3xl overflow-hidden
                                    transition-all duration-700 ease-out
                                    ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}
                                `}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side - Fixed Card */}
                <div className="hidden md:block w-1/2">
                    <div className="sticky top-0 h-screen flex items-center p-6">
                        <div className="w-full bg-gradient-to-br from-teal-900 to-teal-800 rounded-[2rem] overflow-hidden">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`
                                        transition-all duration-700 ease-out
                                        ${index === activeIndex
                                            ? 'opacity-100 translate-y-0 relative'
                                            : 'opacity-0 translate-y-8 absolute inset-0'
                                        }
                                    `}
                                >
                                    {/* Header with Avatar */}
                                    <div className="px-8 py-6 flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10">
                                            <img
                                                src="/avatar.png"
                                                alt="Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h2 className="text-3xl font-semibold text-white">
                                            {project.title}
                                        </h2>
                                    </div>

                                    {/* Content */}
                                    <div className="px-8 pb-8">
                                        <p className="text-lg text-gray-100 leading-relaxed mb-8">
                                            {project.description}
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            {project.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full border-2 border-gray-300/70 flex items-center justify-center">
                                                        <span className="text-gray-300">✓</span>
                                                    </div>
                                                    <span className="text-gray-300 text-lg">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <button className="bg-[#84cc16] hover:bg-[#75b514] text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-medium transition-all duration-300 hover:scale-105">
                                                {project.buttonText || 'Learn More'}
                                                <span className="ml-2">→</span>
                                            </button>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-300">
                                                    {project.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scrolling