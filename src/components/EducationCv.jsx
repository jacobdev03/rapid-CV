const EducationCv = ({ formData, handleDelete }) => {
  const eduaction = formData.map((edu) => (
    <div key={edu.id} id={edu.id}>
      <h3>{edu.degree}</h3>
      <p>{edu.school}</p>
      <p>{edu.city}</p>
      <p>{edu.startDate}</p>
      <p>{edu.endDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ));
  if (eduaction.length > 0) {
    return (
      <div className="cv-section">
        <h2 className="section-heading">Education</h2>
        {eduaction}
      </div>
    );
  } else {
    return;
  }
};

export default EducationCv;
