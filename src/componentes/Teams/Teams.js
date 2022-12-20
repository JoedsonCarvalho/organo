import './Teams.css'
import CardCollaborator from '../Collaborator'

export const Teams = (props) => {
    return(
        (props.colaboradores.length > 0) && <section className='Team' style={{background: props.primaryColor}}>
            <h3 style={{borderColor: props.secondaryColor}}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <CardCollaborator secondaryColor={props.secondaryColor} name={colaborador.name} role={colaborador.role} image={colaborador.image} key={colaborador.name}/>)}
            </div>
        </section>
        : ''
    )
}