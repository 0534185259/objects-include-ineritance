 let _id=0
function HtmlElement(type,textContext)
{
   this.id=_id
   _id+=1
   this.type=type
   this.textContext=textContext
}

HtmlElement.prototype.render=function()
{ 
    const element = document.createElement(this.type);
    element.id = "elem"+this.id; 
    element.textContent = this.textContext; 
    document.body.appendChild(element)
}


function ImageElement(src,alt)
{
   this.src=src
   HtmlElement.call(this,"img",alt)
   
}
ImageElement.prototype= Object.create(HtmlElement.prototype)
ImageElement.prototype.constructor=ImageElement
ImageElement.prototype.render=function ()
 {
    const element = document.createElement(this.type);
    element.id = "elem"+this.id; 
    element.src=this.src
    element.alt = this.textContext; 
    document.body.appendChild(element)
 }



function SelectElement(options)
{
   this.options=options
   HtmlElement.call(this,"select")
   
}
SelectElement.prototype= Object.create(HtmlElement.prototype)
SelectElement.prototype.constructor=SelectElement
SelectElement.prototype.render=function ()
 {
    const element = document.createElement(this.type);
    element.id = "elem"+this.id; 
    let arr=this.options.split(",") 
    document.body.appendChild(element)
    for (let index = 0; index < arr.length; index++)
         {
            let option=document.createElement("option")
            option.textContent=arr[index]
            element.appendChild(option)
    }
    
 }
  function create_element()
  {
    let type=document.getElementById("tpyeElement").value
    let text=document.getElementById("textElement").value
    let element=new HtmlElement("type",text)
    element.render()
  }

  function createImg()
  {
    let src=document.getElementById("url").value
    let alt=document.getElementById("alt").value
    let element=new ImageElement(src,alt)
    element.render()
    
  }

  function createSelect()
  {
    
    let list=document.getElementById("list").value
    let element=new SelectElement(list)
    element.render()
  }