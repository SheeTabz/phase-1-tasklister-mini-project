

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
      
    const val = document.querySelector('input#new-task-description').value
    console.log(val)
    handleTask(val)
      form.reset()
  })
  
  function handleTask(items){
      const li=document.createElement('li');
      li.innerText=`${items}  `;
      const item=document.querySelector('#tasks')
      item.appendChild(li)
      const btn=document.createElement('button');
      btn.setAttribute('id','#btn')
      btn.innerHTML='X'
      li.appendChild(btn)
      btn.addEventListener('click',(e)=>{e.target.parentNode.remove()})
  }
  

});
