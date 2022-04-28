import React, {useState} from "react";
import './select-color.scss'

interface IProps {
    petColor: string | undefined
    setPetColor: (newValue:string) => void
}

export const SelectColorComponent = ({petColor, setPetColor}:IProps) => {
    const colorArray = ['black', 'brown', 'darkbrown', 'lightbrown', 'beige']

    const selectColor = (newColorValue:string) => {
        setPetColor(newColorValue)
    }

    return (
        <>
            {colorArray.map((color) =>
                <div className="custom-radios">
                    <div>
                        <input type="radio" id={color} name="color" value={color}
                            onChange={(e) => selectColor(e.target.value)}
                            checked={petColor === color}
                        />
                        <label htmlFor={color}>
                            <span>
                                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                      alt="Checked Icon"/>
                            </span>
                        </label>
                    </div>
                </div>
            )
            }
        </>
    )
}

{/*      <div>*/
}
{/*          <input type="radio" id="color-2" name="color" value="color-2"/>*/
}
{/*          <label htmlFor="color-2">*/
}
{/*<span>*/
}
{/*  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon"/>*/
}
{/*</span>*/
}
{/*          </label>*/
}
{/*      </div>*/
}

{/*      <div>*/
}
{/*          <input type="radio" id="color-3" name="color" value="color-3"/>*/
}
{/*          <label htmlFor="color-3">*/
}
{/*<span>*/
}
{/*  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon"/>*/
}
{/*</span>*/
}
{/*          </label>*/
}
{/*      </div>*/
}

{/*      <div>*/
}
{/*          <input type="radio" id="color-4" name="color" value="color-4"/>*/
}
{/*          <label htmlFor="color-4">*/
}
{/*<span>*/
}
{/*  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon"/>*/
}
{/*</span>*/
}
{/*          </label>*/
}
{/*      </div>*/
}
