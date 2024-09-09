const btn = document.querySelector('.btn')
const inputFeild = document.querySelector('.input')
const item = document.querySelector('.item-list')

itemArr = [];

function addItem() {
  const inputValues = (inputFeild.value)
  if (inputValues) {

    itemArr.push(inputValues);// values are pushed to that empty arr i have created<>

    const newlist = document.createElement('li')
    //creates a new list 

    newlist.textContent = inputValues;
    //adds my array items to new list

    item.appendChild(newlist)


    inputFeild.value = '';

    const deltItem = document.createElement('button')
    deltItem.innerHTML = "DELETE TASK"
    newlist.append(deltItem)

    deltItem.addEventListener('click', function () {
      newlist.remove();
    })
  }
}

btn.addEventListener('click', addItem);

inputFeild.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addItem();
  }
})
