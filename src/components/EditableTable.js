import { useState,useEffect } from 'react';
import axios from 'axios';

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


  // update cell data handler----------------

  // const handleUpdate = (event) => {
  //   const updated = { data };
  //   axios.put("http://localhost:3001/data", updated);
  // };



  const handleChange = (id, key, value) => {
    const updatedData = data.map((row) => {
      if (row.id === id) {
        return { ...row, [key]: value };
      }
      return row;
    });
    setData(updatedData);
  };

  return (
    <div className='container-flued px-5 py-5'>
      <table className="table  table-bordered table-hover">
        <thead >
          <tr className='border-end'>
            <th className='text-center border-end-0' >Month 1</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange( 'name', event.target.textContent)}>{row.name}</td>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange( 'name', event.target.textContent)}>{row.name}</td>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange('name', event.target.textContent)}>{row.name}</td>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange( 'name', event.target.textContent)}>{row.name}</td>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange('name', event.target.textContent)}>{row.name}</td>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange( 'name', event.target.textContent)}>{row.name}</td>
              <td
                className='text-center'
                contentEditable
                onBlur={(event) =>
                  handleChange( 'name', event.target.textContent)}>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={handleSaveClick}>Save</button>
    </div>
  );
}
export default EditableTable;

