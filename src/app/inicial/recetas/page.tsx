"use client"
import React from 'react'
import Card from './Card'

const page = () => {
    const recetas = ["uno", "dos", "tres"] 
  return (
    <div>
        {recetas.map(titulo =>  <Card titulo={titulo} key={titulo}></Card>)}
    </div>
  )
}

export default page