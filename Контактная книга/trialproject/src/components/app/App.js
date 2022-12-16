import './App.css';
import {Component} from 'react';
import Person from '../person/person';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id: 123, name: 'Alvin', phone: '4536342', careel: 'IT', email: '513421@gmail.com', meeting: '20.12 - 12:00'},
        {id: 1235, name: 'Mark', phone: '4536782', careel: 'Banking', email: '513981@gmail.com', meeting: '25.12 - 14:00'},
        {id: 1236, name: 'Dave', phone: '4966342', careel: 'HR', email: '976421@gmail.com', meeting: ''},
        {id: 1237, name: 'Daniel', phone: '4567642', careel: 'Real Estate', email: '946741@gmail.com', meeting: ''}
      ]
    }
  }

  onValueChange = (id, value) => {
    this.setState(({data}) => {
      const item = data.find(item => item.id === id)
      const newItem = {...item, meeting: value}
      const index = data.indexOf(item)
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
      return {
        data: newData
      }
    })
  }
  render(){
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id,value) => this.onValueChange(id,value)} />
    })
    return (
      <table className='responsive-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Careel</th>
            <th>Email</th>
            <th>Meeting</th>
          </tr>
        </thead>
        <tbody>
          {personList}
        </tbody>
      </table>
    );
  }
}

export default App;
