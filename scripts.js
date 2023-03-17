
const container = document.querySelector('#container');

container.setAttribute('style','display:flex;flex-direction:column;\
justifyContent:space-between;width:100%;text-content:center;padding-bottom:20px;margin-bottom:20px;')

//simple text for starting the layout

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'starting!';


content.setAttribute('style','display:flex; width:100%;justifyContent:center; flex-direction:row;color:white;font-size:40px;background:blue')
content.style.justifyContent='center';

container.appendChild(content);

const rowsDefault=16;
const colsDefault=16;

generateButton(container,document,rowsDefault,colsDefault);
generateGrid(container,document,rowsDefault,colsDefault);


//function that generate the grid area
function generateGrid(ContainerName, document,row,column){    
    let iMax=parseInt(row);
    let dMAx=parseInt(column);
    const gridContainer = document.createElement('gridCont');
    gridContainer.setAttribute("Id","GridContainerId");
    gridContainer.setAttribute('style',
    'display:flex;justifyContent:center;\
    flex-direction:row;flex-wrap:wrap;\
    width:100%;text-content:center;\
    color:blue;font-size:40px;\
    border-style:none;background:gray; padding-top:20px;padding-bottom:20px;');    
    gridContainer.style.justifyContent='center';    
    
    let index=0;
    //generating the grid
    for (let i=0;i<(iMax);i++){
        const gridRow = document.createElement('gridRow');
        gridRow.setAttribute('style',
        'display:flex;justifyContent:center;\
        flex-direction:row;flex-wrap:wrap;\
        width:1600px;text-content:center;\
        color:blue;font-size:40px;\
        border-style:none;background:gray;');    
        gridRow.style.justifyContent='center'; 
        for (let d=0;d<(dMAx);d++){ 
            index=i*16+dMAx;
            const insideComp = document.createElement('insideComp');            
            insideComp.setAttribute('style',
            'display:flex;justifyContent:center;\
            flex-direction:column;flex-wrap:no-wrap;\
            width:(100/16)px;padding:10px;\
            border-style:solid;background:gray;');    
            insideComp.setAttribute('id',index);            //for identify the point
            insideComp.addEventListener("mouseenter",function(){insideComp.style.background='green';});
            insideComp.addEventListener("mouseleave",function(){insideComp.style.background='red';});
            gridRow.appendChild(insideComp);
        }    
        gridContainer.appendChild(gridRow);
        
    }   
    ContainerName.appendChild(gridContainer);        
};

//function that ask for parameters of new grid area
function generateButton(ContainerName, document,row,column){    
    const buttonContainer = document.createElement('buttonContainer');
    buttonContainer.setAttribute("style",'display:flex;flex-direction:row;justifyContent:center;align:center;width:100%;background-color:white;');
    //centering buttom
    const buttonDiv = document.createElement('divButton');
    buttonDiv.setAttribute("style",'display:flex;flex-direction:column;justifyContent:center;align:center;width:45%;background-color:blue;');
    buttonContainer.appendChild(buttonDiv);
    const button = document.createElement('button');
    button.setAttribute("type", "button");     
    button.setAttribute("style",'display:flex;align:center;width:10%;font-weight:bold;background-color:orange;');
    button.style.justifyContent='center';
    button.innerText="Button";
    button.setAttribute('id',"buttonClick"); 
    button.addEventListener("click",actionButton);
    buttonContainer.appendChild(button);
    //centering buttom
    const buttonDiv2 = document.createElement('divButton2');
    buttonDiv2.setAttribute("style",'display:flex;flex-direction:column;justifyContent:center;align:center;width:45%;background-color:blue;');
    buttonContainer.appendChild(buttonDiv2);
    ContainerName.appendChild(buttonContainer);
    return;
}

function actionButton(){    
    console.log("action");
    let newrow=prompt("Insert number of rows:");
    console.log("rows:"+newrow);
    let newcolumn=prompt("Insert number of columns:");
    console.log("columns:"+newcolumn);

    //looking for child
    var nested = document.getElementById("GridContainerId");

    //removing previus grid
    container.removeChild(nested);
    //generate new one
    generateGrid(container,document,newrow,newcolumn);
    
    return;
}