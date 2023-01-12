export const LayoutUpload = (props) => {
    
    const layout = props.layout[props.index]


    return(
        <label className="polygraphy-order__content polygraphy-order__maquette"
        style={props.handleBorder(layout)}>
        <input type="file" onChange={(e) => props.handleOnLayoutAdd(e, props.index)}/>
            <div className="polygraphy-order__text">{props.index + 1} сторона</div>
            {!layout && <img src="../icons/poligraphy_icons/add.svg" style= {{width: '25px'}} alt="add" className="polygraphy-order__add" />}
            {!layout && <p>нажмите, чтобы добавить файл</p>}
            {layout && 
            <>
                <p>{Math.round((layout[0].size/1024)/1024)} MB</p>
                <div className="polygraphy-order__file"><img src="../icons/poligraphy_icons/confirm_file.svg" style= {{width: '29px', height: '24px'}} alt="file" className="polygraphy-order__add" />{props.layout[props.index][0].name}</div>
                <p>нажмите, чтобы выбрать другой файл</p>
            </>}
        </label>
    )
}