import React from 'react'
import { Persons } from '../components/Persons'

export const Props = () => {

  const personas =[
    { id: 1, nombre: 'Katsuko Saruhashi', img: '/images/Katsuko.png', tamaño: '150px' },
    { id: 2, nombre: 'Aklilu Lemma', img:' /images/Aklilu.png', tamaño: '120px' },
    { id: 3, nombre: 'Lin Lanying', img:' /images/Lin.png', tamaño: '100px' },
  ]

  return (
    <>
      <div className='container mt-4'>
        <h1 style={{ textAlign: 'center' }}>Props React</h1>
<br />
        <p>React Props are like function arguments in JavaScript and attributes in HTML.In React, you can send the content between the opening and closing tags of a component,
          to another component. This can be accessed in the other component using the props.children property.</p>

        <div className='d-flex gap-5 p-4 justify-content-center align-items-center'>
          {personas.map((persona)=>(
            <Persons
              key={persona.id}
              nombre={persona.nombre}
              img={persona.img}
              tamaño={persona.tamaño}
            />
          ))}
        </div>
      </div>
    </>
  )
}
