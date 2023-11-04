import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralCv from './components/GeneralCv';
import EducationCv from './components/EducationCv';
import ExperienceCv from './components/ExperienceCv';
import './App.css';

function App() {
  const [form, setForm] = useState([
    {
      id: uuidv4(),
      fullName: 'Jacob R',
      email: 'jacob@gmail.com',
      phone: '440-348-1413',
      city: 'Warsaw',
    },
  ]);
  const [inputData, setInputData] = useState({ fullName: '', email: '', phone: '', city: '' });
  const [eduactionForm, setEduactionForm] = useState([
    {
      id: uuidv4(),
      degree: 'Bachelor of Computer Science',
      school: 'Massachusetts Institute of Technology',
      city: 'Cambridge',
      country: 'USA',
      startDate: '2019-09-04',
      endDate: '2024-04-28',
    },
  ]);
  const [educationData, setEducationData] = useState({
    degree: '',
    school: '',
    city: '',
    country: '',
    startDate: '',
    endDate: '',
  });
  const [experienceForm, setExperienceForm] = useState([]);

  const [experienceData, setExperienceData] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleSubmit = (e) => {
    const section = e.target.id;
    e.preventDefault();
    switch (section) {
      case 'general':
        inputData['id'] = uuidv4();
        setForm([inputData]);
        setInputData({ fullName: '', email: '', phone: '', city: '' });
        break;
      case 'experience':
        experienceData['id'] = uuidv4();
        setExperienceForm([...experienceForm, experienceData]);
        setExperienceData({
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          description: '',
        });
        break;
      case 'education':
        educationData['id'] = uuidv4();
        setEduactionForm([...eduactionForm, educationData]);
        setEducationData({
          degree: '',
          school: '',
          city: '',
          country: '',
          startDate: '',
          endDate: '',
        });
        break;
    }
  };

  const handleChange = (e) => {
    const section = e.target.form.id;
    const val = e.target.value;

    switch (section) {
      case 'general':
        setInputData({ ...inputData, [e.target.id]: val });
        break;
      case 'experience':
        setExperienceData({ ...experienceData, [e.target.id]: val });
        break;
      case 'education':
        setEducationData({ ...educationData, [e.target.id]: val });
        break;
    }
  };

  const handleDeleteGeneral = (e) => {
    const newData = experienceForm.filter((general) => general.id !== e.target.parentNode.id);
    setForm(newData);
  };

  const handleDeleteExperience = (e) => {
    const newData = experienceForm.filter((exp) => exp.id !== e.target.parentNode.id);
    setExperienceForm(newData);
  };

  const handleDeleteEducation = (e) => {
    const newData = eduactionForm.filter((edu) => edu.id !== e.target.parentNode.id);
    setEduactionForm(newData);
  };

  return (
    <div className="app">
      <div className="infoContainer">
        <General form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        <Education
          form={eduactionForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          educationData={educationData}
        />
        <Experience
          form={experienceForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          experienceData={experienceData}
        />
      </div>
      <div className="cv-placeholder">
        <GeneralCv formData={form} handleDelete={handleDeleteGeneral} />
        <EducationCv formData={eduactionForm} handleDelete={handleDeleteEducation} />
        <ExperienceCv formData={experienceForm} handleDelete={handleDeleteExperience} />
      </div>
    </div>
  );
}

export default App;
