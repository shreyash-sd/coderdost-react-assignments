import Experience from './components/Experience.js'
import resumeData from './data';
import Interests from './components/Interests.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Extracurriculars from './components/Extracurriculars.js';

const Resume = () => {
  return (
    <>
      {resumeData.intrests.length > 0 && <Interests data={resumeData.intrests} />}
      {resumeData.skills.length > 0 && <Skills data={resumeData.skills} /> }
      {resumeData.education.length > 0 && <Education data={resumeData.education} /> }
      {resumeData.experience.length > 0 && <Experience data={resumeData.experience} /> }
      {resumeData.extracurriculars.length > 0 && <Extracurriculars data={resumeData.extracurriculars}/> }

    </>
  )
}

export default Resume;