export const CaseItem = (props) => {
    return(
        <div className="cases__element" onClick={props.handleActiveCase} >
                <div className="cases__img"><img src={`img/cases/${props.type}/${props.imgMin}`} alt={props.type}/></div>
                <div className="cases__title">{props.name}</div>
        </div>
)
}