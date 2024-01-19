
const textInputField=document.querySelector('#text-input-field');
const addButton=document.querySelector('#add-button');
const todosContainer=document.querySelector('.todos-container');

// console.log(textInputField);
// console.log(addButton);
// console.log(todosContainer);
addButton.addEventListener('click',()=>
{
    if (textInputField.value.trim().length=='') 
        return;
        // console.log(textInputField.value);

        // create div and add class todo-item-container
    const todoItemContainer=document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    // document.write(todoItemContainer.innerHTML);

    todosContainer.appendChild(todoItemContainer);

    // create p element and id=todo-text
    const todoText=document.createElement('p');
    todoText.id='todo-text';
    todoText.innerHTML=textInputField.value;
    // console.log(todoText.innerHTML);
    todoItemContainer.appendChild(todoText);
    todosContainer.appendChild(todoItemContainer);
    // add doubleclick event to todoText
    todoText.addEventListener('dblclick',()=>{
        todoText.classList.add('line-through');
        editButton.setAttribute("disabled","disabled");
    })

    
    // create button add id=edit-button
    const editButton=document.createElement('button');
    editButton.id="edit-button";
    const editImage=document.createElement('img');
    editImage.src='edit.svg';
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);
    // add click event to edit button
    editButton.addEventListener('click',()=>
    {
        textInputField.value=todoText.innerText;
        const parent=editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });



    // create button add id=delete-button
   const deleteButton= document.createElement('button');
   deleteButton.id="delete-button";
    const deleteImage=document.createElement('img');
    deleteImage.src='delete.svg';
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);
    // Click event listner for delete button
    deleteButton.addEventListener('click',()=>{
        const parent=deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    })
    // to empty text-input-field empty
    textInputField.value="";
});