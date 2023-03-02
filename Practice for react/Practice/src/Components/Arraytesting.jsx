import React,{useState} from 'react'

export default function Arraytesting() {
    const [items, setItems] = useState([]);
    const tryingSomething = [{
        id: 3,
        value: 55
    },
    {
        id: 8,
        value: 34
    }
];
    const addItem = () => {
      console.log("Retarded codes");
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1 
        }])

        console.log(items[0]);
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
      <ul>
        {
            items.map(item => (
            <li key="item.id"><input type="checkbox" key="item.id"/>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}
