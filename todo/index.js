
const fruit=document.querySelector('.fruits');
const form=document.querySelector('form');

form.addEventListener ('submit',function(event){
    event.preventDefault();
    const inputelement=document.getElementById('fruit-to-add');
    const addli=document.createElement('li');
    const namelement=document.createTextNode(inputelement.value);
    addli.appendChild(namelement);
    addli.className='fruit';
    const btn=document.createElement('button');
    const BtnText = document.createTextNode('x');
    btn.className='delete-btn';
    btn.appendChild(BtnText);
    addli.appendChild(btn);
    fruit.appendChild(addli);
});