import React, { useRef } from 'react'
import './Crud.css'

const Add = ({setItems}) => {
  const nameRef = useRef()
  const priceRef = useRef()
    const handleSubmit=(e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const price = e.target.elements.price.value;
        const newItem ={
            id:4,
            name,
            price
        }
        setItems((prevItme)=>{
            return prevItme.concat(newItem);
        })
        nameRef.current.value =""
        priceRef.current.value =""
    }
  return (
    <div>
      <form className='addForm' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='enter name' ref={nameRef}></input>
        <input type='text' name='price' placeholder='enter price' ref={priceRef}></input>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Add
