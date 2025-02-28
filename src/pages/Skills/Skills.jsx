import React from 'react'
import HeaderTitle from '../../components/common/HeaderTitle/HeaderTitle'
const Skills = () => {
  const skills = [
    {
      name: 'Frontend Development',
      skills: [
        {
          name: 'React.js',
          percentage: 90,
        },
        {
          name: 'JavaScript',
          percentage: 85,
        },
        {
          name: 'HTML5/CSS3',
          percentage: 95,
        },
      ]
    },
    {
      name: 'UI Frameworks',
      skills: [
        {
          name: 'Tailwind CSS',
          percentage: 90,
        },
        {
          name: 'Material UI',
          percentage: 80,
        },
        {
          name: 'Bootstrap',
          percentage: 82,
        },
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        {
          name: 'Redux Toolkit',
          percentage: 95,
        },
        {
          name: 'GraphQL',
          percentage: 75,
        },
        {
          name: 'Git/Github',
          percentage: 88,
        },
      ]
    },
    {
      name: 'Backend & Database',
      skills: [
        {
          name: 'PostgreSQL',
          percentage: 55,
        },
        {
          name: 'Prisma',
          percentage: 40,
        },
        {
          name: 'Docker',
          percentage: 50,
        },
      ]
    },
    {
      name: 'Form & Validation',
      skills: [
        {
          name: 'Formik',
          percentage: 85,
        },
        {
          name: 'React Hook Form',
          percentage: 80,
        },
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        {
          name: 'C++',
          percentage: 75,
        },
        {
          name: 'C',
          percentage: 70,
        },
      ]
    },
  ]
  return (
    <div>
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeaderTitle title="Technical Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
                <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                <div className="space-y-4">
                  {skill.skills.map((skillItem, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skillItem.name}</span>
                        <span className="text-blue-400">{skillItem.percentage}%</span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2">
                        <div className={`bg-blue-500 h-2 rounded-full bg-gradient-to-r from-[#86d17b] to-[#21a084] w-[${skillItem.percentage}%]`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  )
}

export default Skills
