
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

generateGrid(container,document,rowsDefault,colsDefault);


//Principal grid container
function generateGrid(ContainerName, document,row,column){    
    let iMax=parseInt(row);
    let dMAx=parseInt(column);
    const gridContainer = document.createElement('gridCont');
    gridContainer.setAttribute('style',
    'display:flex;justifyContent:center;\
    flex-direction:row;flex-wrap:wrap;\
    width:100%;text-content:center;\
    color:blue;font-size:40px;\
    border-style:none;background:gray; padding-top:20px;padding-bottom:20px;');    
    gridContainer.style.justifyContent='center';    
    ContainerName.appendChild(gridContainer);
    
    let index=0;
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
            insideComp.setAttribute('id',index);            
            insideComp.addEventListener("mouseenter",function(){insideComp.style.background='green';});
            insideComp.addEventListener("mouseleave",function(){insideComp.style.background='red';});
            gridRow.appendChild(insideComp);
        }    
        gridContainer.appendChild(gridRow);
        
    }   
        
};
