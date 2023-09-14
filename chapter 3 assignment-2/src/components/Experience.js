
const Experience= ({data}) => {
    return(
        <>
         <ul>
            Experience : 
        {data.map((item, index) => (
          <li key={index}>
            Year: {item.year}, Company: {item.company}, Role: {item.role} 
            
          </li>
        ))}
      </ul>
        </>
    )
}

export default Experience;