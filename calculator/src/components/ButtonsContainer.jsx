import style from './ButtonsContainer.module.css';

function ButtonsContainer({onButtonClick}){
    
    const buttonsName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.', ]

    return<>
        <div className={style.buttonsContainer} >
            {buttonsName.map(buttonName =>
                 <button className={style.button} onClick={()=> onButtonClick(buttonName) }>{buttonName}</button>
            )}
        </div>
    </>
}

export default ButtonsContainer;