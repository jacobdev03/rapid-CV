import { useState } from 'react';
import FormGroup from './FormGroup';
import './styles/Section.css';

const Education = ({ form, handleChange, handleSubmit, educationData }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="section">
      <h1>Education information</h1>
      <div className="education-data">
        <button className="show-form-btn" onClick={handleAdd}>
          Education +
        </button>
        {showForm && (
          <form onSubmit={handleSubmit} id="education">
            <FormGroup
              value={educationData.degree}
              name={'Degree'}
              labelText={'degree'}
              type={'text'}
              placeholder={'Degree'}
              handleChange={handleChange}
            />
            <FormGroup
              value={educationData.school}
              name={'School'}
              labelText={'school'}
              type={'text'}
              placeholder={'School'}
              handleChange={handleChange}
            />
            <FormGroup
              value={educationData.city}
              name={'City'}
              labelText={'city'}
              type={'text'}
              placeholder={'City'}
              handleChange={handleChange}
            />
            <FormGroup
              value={educationData.country}
              name={'Country'}
              labelText={'country'}
              type={'text'}
              placeholder={'Country'}
              handleChange={handleChange}
            />
            <FormGroup
              value={educationData.startDate}
              name={'Start date'}
              labelText={'startDate'}
              type={'date'}
              placeholder={'Start date'}
              handleChange={handleChange}
            />
            <FormGroup
              value={educationData.endDate}
              name={'End date'}
              labelText={'endDate'}
              type={'date'}
              placeholder={'End date'}
              handleChange={handleChange}
            />

            <button>Add</button>
          </form>
        )}
        {form.map((edu) => (
          <h3 key={edu.id}>{edu.degree}</h3>
        ))}
      </div>
    </div>
  );
};

export default Education;
