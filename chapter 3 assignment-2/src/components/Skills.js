const Skills= ({data}) => {
    return(
        <>
         
        <ul>
        Skills : 
        {data.map((item,index) => (
          <li key={index}>
        {item}
          </li>
        ))}
        </ul>
        </>
    )
}

export default Skills;