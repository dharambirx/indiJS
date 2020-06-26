"use strict";
function indi(selector){
    const self={
        element: document.querySelector(selector),
        html: ()=>self.element,
        on:(event, callback)=>{
            document.addEventListener(event, callback);
        },
        hide:()=>{
            self.element.style.display="none";
        },
        show:()=>{
            self.element.style.display="block";
        },
        fadeIn:()=>{
            self.element.style.opacity=1;
        },
        fadeOut:()=>{
            self.element.style.opacity=0;
        },
        attr:(name, value)=>{
            if(value==null)
                self.element.getAttribute(name);
            else
                self.element.setAttribute(name, value);
        },
        getURL:(URL)=>{
            fetch(URL)
            .then(response => response.json())
            .then(json => console.log(json))
        }
    };
    return self;
};
