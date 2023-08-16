/* eslint-disable react/display-name */
import React, { Children } from "react";

// import "./Button.css";
export const Button: FC<{className?: string | string[];}> = ({children}) => {
 
  
return (
<button
  style={{color:'red'}}
>
 {children}
</button>
)
}