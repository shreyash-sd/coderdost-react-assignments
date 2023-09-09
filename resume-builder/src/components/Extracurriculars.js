const Extracurriculars= ({data}) => {
    return(
        <>
         
        <ul>
        Extracurriculars : 
        {data.map((item,index) => (
          <li key={index}>
        {item}
          </li>
        ))}
        </ul>
        </>
    )
}

export default Extracurriculars;