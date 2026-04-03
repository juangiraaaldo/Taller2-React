import React from 'react'

export const Persons = ({ nombre, img, tamaño }) => {
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <img
          src={img}
          alt={nombre}
          style={{
            width: tamaño,
            height: tamaño,
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />

        <p className="mt-2">{nombre}</p>
      </div>
    </>
  )
}
