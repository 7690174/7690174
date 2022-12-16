import {Component} from 'react';

class Person extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: this.props.name,
            phone: this.props.phone,
            careel: this.props.careel,
            email: this.props.email,
            meeting: this.props.meeting
        }
    }

    onChangeValue = (e) => {
        this.setState({
            meeting: e.target.value
        })
        this.props.onValueChange(this.props.id, e.target.value)
    }

    render(){
        const {name, phone, careel, email, meeting} = this.state
        const clazz = 'active'
    return (
        <tr className={meeting.length > 0 ? clazz : null}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{careel}</td>
            <td>{email}</td>
            <td><input type='text' value={meeting.length > 0 ? meeting : 'No meeting'} onChange={e => this.onChangeValue(e)} /></td>
        </tr>
        );
    }
}

export default Person;
