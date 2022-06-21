import React from 'react'
import styles from './buildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import controls from './controls'


function BuildControls(props){



    return(
        <div className={styles.BuildControls}>
            <p>Current Price: </p>
            {controls.map(ctrl => (
                <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                removed={() => props.ingredientRemoved(ctrl.type)}
                added={() => props.ingredientAdded(ctrl.type)}
                />
            ))}
            <button 
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW
            </button>


        </div>
    )
}


export default BuildControls