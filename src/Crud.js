import React, { useState } from 'react'
import './Crud.css'
import Add from './Add.js'
import EditList from './EditList'

const Crud = () => {
    const data = [
        {
           id:1,
           name:"HP",
           price:"34562"
        },
        {
            id:2,
            name:"Lenova",
            price:"56000"
        },
        {
            id:3,
            name:"Dell",
            price:"500000"
        },
        {
            id:4,    
            name:"Acer",
            price:"45000"
        }
      ]

const [items,setItems] = useState(data)
const [update,setUpdate] = useState(-1)

const handleEdit = (id) => {
    setUpdate(id)
}

const handleSubmit=(e)=>{
e.preventDefault();
const name = e.target.elements.name.value;
const price = e.target.elements.price.value;
const newlist = items.map((it)=>(
    it.id === update? { ...it, name:name,price:price}:it
))
setItems(newlist)
setUpdate(-1)
}

const handleDelete = (id) => {
    const newItem = items.filter((it)=>(
        it.id !== id 
    ))
    setItems(newItem)
}

  return (
    <div className='crud'>
      <div>
        <Add setItems={setItems}/>
           <form onSubmit={handleSubmit}>
              <table>
                   {
                    items.map((item)=>(
                      update === item.id ? <EditList item={item} items={items} setItems={setItems}/> :
                    <tr>
                       <td>{item.name}</td>
                       <td>{item.price}</td>
                       <td><button className='edit' onClick={()=>handleEdit(item.id)} type='button'>Edit</button></td>
                       <td><button className='delete' type='button' onClick={()=>handleDelete(item.id)}>Delete</button></td>
                    </tr>
                      ))
                    }
                </table>
            </form>
        </div>
    </div>
  )
}

export default Crud
