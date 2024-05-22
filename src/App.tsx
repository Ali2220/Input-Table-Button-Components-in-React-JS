import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';

// App ek functional component hai jo React.FC (React Functional Component) type use karta hai.
const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  // tableData aur setTableData state banata hai jo table mein dikhaye jane wale data ko manage karega. Initial value ek empty array hai jisme objects honge.
  const [tableData, setTableData] = useState<Array<{ name: string }>>([]);

  // Ye function tab call hota hai jab button pe click kiya jata hai.
  const AddClick = () => {
    // Agar inputValue khali nahi hai (trim karke check karte hain):
    if (inputValue.trim() !== '') {
      // setTableData ko update karke naya object ({ name: inputValue }) add karte hain existing tableData array mein.
      setTableData([...tableData, { name: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <>
    <h1 className='text-2xl text-center mb-10 bg-slate-900 p-5 text-white'>By clicking on Add button, You can add the different names and show on Document</h1>
    <div>
      
      <Input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a name" 
      />
      <Button 
        onClick= {AddClick} 
        label="Add" 
      />
      <Table 
        data={tableData} 
      />
    </div>
    </>
  );
};

export default App;
