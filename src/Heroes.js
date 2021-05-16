import { useState } from "react";

function Heroes(props) {

    const [names, setNames] = useState([
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
      ]);

      const newNam = names.map((item, index) => {
        return <li onClick={ () => handleDelete(index)} key={index}>
            {item}
        </li>
      })

      const handleDelete = (i) => {
        const filter = newNam.filter((item, index) => {
          if(i === index){
            return false
          } return true
        })
        setNames(filter)
      }


    return (
        <div>
            <ul>
                {newNam}
            </ul>
        </div>
    )
};

export default Heroes;