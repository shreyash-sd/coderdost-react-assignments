const Interests= ({data}) => {
    return(
        <>
         
        <ul>
        Interests : 
        {data.map((item,index) => (
          <li key={index}>
        {item}
          </li>
        ))}
        </ul>
        </>
    )
}

export default Interests;