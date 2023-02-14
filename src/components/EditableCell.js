import { useState } from 'react';

function EditableCell({ value, onSave }) {
  const [newValue, setNewValue] = useState(value);

  const handleInputChange = (event) => {
    setNewValue(event.target.value);
    onSave(newValue)
  };



  return (
    <td>
        <input type="text" value={newValue} onChange={handleInputChange} style={{border:'none',width:'100%',textAlign:'center'}}/>    
    </td>
  );
}
export default EditableCell;