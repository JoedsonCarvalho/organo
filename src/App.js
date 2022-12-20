import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js'
import Form from './componentes/Form'
import Teams from './componentes/Teams'

function App() {

  const times = [
    {
      name:'Programação',
      primaryColor: '#D9F7E9',
      secondaryColor: '#57C278'
    },
    {
      name:'Front-End',
      primaryColor: '#E8F8FF',
      secondaryColor: '#82CFFA'
    },
    {
      name:'Data Science',
      primaryColor: '#F0F8E2',
      secondaryColor: '#A6D157'
    },
    {
      name:'Devops',
      primaryColor: '#FDE7E8',
      secondaryColor: '#E06B69'
    },
    {
      name:'UX e Design',
      primaryColor: '#FAE9F5',
      secondaryColor: '#DB6EBF'
    },
    { 
      name:'Mobile',
      primaryColor: '#FFF5D9',
      secondaryColor: '#FFBA05'
    },
    {
      name:'Inovação e Gestão',
      primaryColor: '#FFEEDF',
      secondaryColor: '#FF8A29'
    }
  ]

  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />

      <Form times={times.map(times => times.name)} whenRegisteredEmployee={employee => addEmployee(employee)} />     

      {times.map(time => <Teams  
      key={time.name} 
      name={time.name} 
      primaryColor={time.primaryColor} 
      secondaryColor={time.secondaryColor} 
      colaboradores={employees.filter(colaborador => colaborador.squad === time.name)}
      />)}
   
      
    </div>
  );
}

export default App;
