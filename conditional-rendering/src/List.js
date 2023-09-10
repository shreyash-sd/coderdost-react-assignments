

function List({ l, items }) {
    function renderList() {
        if (l == "numbered") {
            return (
                <>
            {items.map((items,key)=>
            <li key={key} type="1">{items} </li>
            )}
            <br/>
                </>
            )
        }

        else if (l == "alpha") {
            return (
                <>
 {items.map((items,key)=>
            <li key={key} type="A">{items} </li>
            )}
                </>
            )
        }

        else if (l == "bullet") {
            return (
                <>
{items.map((items,key)=>
            <ul>
<li key={key} >{items} </li>
            </ul>
            
            )}
                </>
            )
        }
        else {
            return null;
        }
    }
    return (
        <>

            {renderList()}

        </>
    )
}

export default List;