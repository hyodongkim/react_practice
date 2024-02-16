import React, {useState, useRef, useReducer, useEffect, useId} from 'react';

export default (innerHTML, classList = "", id = "modal-window")=>{
    let unique = useId().replaceAll(":","");
    let leaveFunction = (e)=>{
        let div = document.querySelector(`[modal-window-unique-id-${unique}]`);
        div.remove();
        // div.removeEventListener("mouseleave", leaveFunction);
    };
    return {
        onMouseEnter:(e)=>{
            let div = document.createElement("div");
            div.classList = classList;
            div.id = id;
            div.innerHTML = innerHTML;
            
            div.style.backgroundColor = "rgba(255,0,0,0.5)";
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.display = "inline-block";
            div.style.position = "absolute";
            document.body.appendChild(div);

            let rect = e.currentTarget.getBoundingClientRect();
            let [width, height, x, y] = [
                rect.right - rect.left,
                rect.bottom - rect.top,
                rect.x, rect.y
            ]
            
            let divrect = div.getBoundingClientRect();
            let [divwidth, divheight, divx, divy] = [
                divrect.right - divrect.left,
                divrect.bottom - divrect.top,
                divrect.x, divrect.y
            ]
            div.style.left = `${x + width / 2 - divwidth / 2}px`;
            div.style.top = `${y}px`;

            div.innerText = e.currentTarget.dataset.set;

            // div.addEventListener("mouseleave", leaveFunction);
            div.setAttribute(`modal-window-unique-id-${unique}`,"");
        },
        onMouseLeave: leaveFunction
    };
}