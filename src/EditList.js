import React from 'react'

const EditList = ({item,items,setItems}) => {

    const handleInputname = (event) => {
       const value = event.target.value;
       const newlist = items.map((it)=>(
            it.id === item.id? { ...it, name:value}:it
        ))
        setItems(newlist)
    }
    
    const handleInputprice = (event) => {
        const value = event.target.value;
        const newlist = items.map((it)=>(
            it.id === item.id? { ...it, price:value}:it
        ))
        setItems(newlist)
    }
  return (
    <div>
      <tr>
        <td><input type='text' onChange={handleInputname} name='name' value={item.name}></input></td>
        <td><input type='text' onChange={handleInputprice} name='price' value={item.price}></input></td>
        <td><button type='submit'>Update</button></td>
      </tr>
    </div>
  )
}

export default EditList
