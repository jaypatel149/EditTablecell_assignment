import { useState,useEffect } from 'react';
// import './EditableCell.css'
import axios from 'axios';
import EditableCell from './EditableCell';

const EditableTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((response) => {
      setData(response.data);
    });
  }, []);

// post data handler-------------

  const handleSaveClick = () => {
    axios
      .post("http://localhost:3001/data", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const handleCreate = () => {
    const newId = data.length + 1;
    const newData = [...data, { id: newId}];
    setData(newData);
    axios.post('http://localhost:3001/data', )
      .catch(error => {
        console.log(error);
      });
  };


  // update cell data handler----------------

  // const handleUpdate = (event) => {
  //   const updated = { data };
  //   axios.put("http://localhost:3001/data", updated);
  // };


  const handleEdit = (id, key, value) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [key]: value };
      } else {
        return item;
      }
    });
    setData(newData);
    axios.put(`http://localhost:3001/data/${id}`, { [key]: value })
      .catch(error => {
        console.log(error);
      });
  };




  return (
    <div className='container-flued px-5 py-5'>
      <table className="table  table-bordered">
        <thead >
          <tr className='border-end'>
            <th className='text-center border-end-0' >Month 1</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
             <EditableCell value={row.name} onSave={(value) => handleEdit(row.id, 'name', value)}/>
             <EditableCell value={row.name2} onSave={(value) => handleEdit(row.id, 'name2', value)}/>
             <EditableCell value={row.name3} onSave={(value) => handleEdit(row.id, 'name3', value)}/>
             <EditableCell value={row.name4} onSave={(value) => handleEdit(row.id, 'name4', value)}/>
             <EditableCell value={row.name5} onSave={(value) => handleEdit(row.id, 'name5', value)}/>
             <EditableCell value={row.name6} onSave={(value) => handleEdit(row.id, 'name6', value)}/>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={handleSaveClick}>Save</button>
      <button type="button" className="btn btn-primary ms-5" onClick={handleCreate}>Create</button>
    </div>
  );
}






export default EditableTable;

