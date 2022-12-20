import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {
 
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [squad, setSquad] = useState('');

    const whenSaving = (e) => {
        e.preventDefault();
        console.log('Form was send => ',name,role,image,squad);
        props.whenRegisteredEmployee({name,role,image,squad})
        setName('');
        setRole('');
        setImage('');
        setSquad('');
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    value={name}
                    whenChanging={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo" 
                    value={role}
                    whenChanging={value => setRole(value)}
                />

                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da Imagem" 
                    value={image}
                    whenChanging={value => setImage(value)}
                />

                <DropdownList
                    required={true}
                    label="Time"
                    itens={props.times} 
                    value={squad}
                    whenChanging={value => setSquad(value)}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;