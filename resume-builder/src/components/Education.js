const Education= ({data}) => {
    return(
        <>
         
        <ul>
        Education : 
        {data.map((item,index) => (
          <li key={index}>
        {item}
          </li>
        ))}
        </ul>
        </>
    )
}

export default Education;