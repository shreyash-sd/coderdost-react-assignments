import Experience from './components/Experience.js'
import resumeData from './data';
import Interests from './components/Interests.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Extracurriculars from './components/Extracurriculars.js';

const Resume = () => {
  return (
    <>
      <Interests data={resumeData.intrests} />
      <Skills data={resumeData.skills}></Skills>
      <Education data={resumeData.education}></Education>
      <Experience data={resumeData.experience} />
      <Extracurriculars data={resumeData.extracurriculars}/>

    </>
  )
}

export default Resume;