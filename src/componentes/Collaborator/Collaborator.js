import './Collaborator.css'

export const CardCollaborator = ({name, role, image, secondaryColor}) => {
    return(
        <div className='colaborador' style={{backgroundColor: secondaryColor}}>
            <div>
                <img src={image} alt='foto do colaborador.' />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}