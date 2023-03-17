
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

const blocks=16;


generateButton(container,document,blocks);
generateGrid(container,document,blocks);


//function that generate the grid area
function generateGrid(ContainerName, document,blocks){    
    let iMax=parseInt(blocks);
    
    const gridContainer = document.createElement('gridCont');
    gridContainer.setAttribute("Id","GridContainerId");
    gridContainer.setAttribute('style',
    'display:flex;justifyContent:center;\
    flex-direction:row;flex-wrap:wrap;\
    width:100%;text-content:center;\
    color:blue;font-size:40px;\
    border-style:none;background:gray; \
    padding-top:20px;padding-bottom:20px;');    
    gridContainer.style.justifyContent='center';    
    
    let index=0;
    //generating the grid
    for (let i=0;i<(blocks);i++){
        const gridRow = document.createElement('gridRow');
        gridRow.setAttribute('style',
        'display:flex;justifyContent:center;\
        flex-direction:row;flex-wrap:nowrap;\
        width:960px;text-content:center;\
        color:blue;\
        border-style:none;background:gray;');    
        gridRow.style.justifyContent='center'; 
        
        for (let d=0;d<(blocks);d++){ 
            index=i*16+blocks;
            var altt=(960/blocks)+"px";            
            console.log("alt:"+altt)
            const insideComp = document.createElement('insideComp');            
            insideComp.setAttribute('style',
            'display:flex;justifyContent:center;\
            flex-direction:column;padding:0px;\
            border-style:solid;background:gray;');    
            insideComp.style.height=altt;
            insideComp.style.width=altt;
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
function generateButton(ContainerName, document,blocks){    
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
    let blocks=prompt("Insert number of squares per side:");       
    if (blocks>100){
        blocks=100;
    }
    if(blocks==0 || blocks==null){
        blocks=16;
    }
    
    //looking for child
    var nested = document.getElementById("GridContainerId");

    //removing previus grid
    container.removeChild(nested);
    //generate new one
    generateGrid(container,document,blocks);
    
    return;
}