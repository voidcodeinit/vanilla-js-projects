// // NEED DEBUG FOR KNOWING and has Error
// // ****** select items **********
const form = document.querySelector('.grocery-form');
// const alert = document.querySelector(".alert");
const alert = form.children[0];
const grocery = document.getElementById('grocery');
// const submitBtn = document.querySelector(".submit-btn");
const submitBtn = grocery.nextElementSibling;
// const container = document.querySelector(".grocery-container");
const container = form.nextElementSibling;
// const list = document.querySelector(".grocery-list");
// const clearBtn = document.querySelector(".clear-btn");
const list = container.children[0];
const clearBtn = container.children[1];
// const clearBtn = list.nextElementSibling;
// edit option
let editElement;
let editFlag = false;
let editID = '';
// ****** event listeners **********
// submit form
form.addEventListener('submit', addItem);
// clear list
clearBtn.addEventListener('click', clearItems);
// display items onload
window.addEventListener('DOMContentLoaded', setupItems);

// ****** functions **********
// add item
/** Handles add item. */
function addItem(event) {
  event.preventDefault();
  //get input value
  const value = grocery.value;
  const id = new Date().getTime().toString();
  //console.log(id);
  //chk for not empty & not in edit state
  if (value !== '' && !editFlag) {
    const element = document.createElement('article');
    // The setAttribute() method replaces attribute values.
    // The setAttributeNode() method replaces Attribute objects.
    // You must create an Attr object and set the Attr value before
    //  adding the attribute to an element.
    // let attr=document.createAttribute("data-id");
    // attr.value=id;
    // element.setAttributeNode(attr);
    // better way than node
    //element.setAttribute("data-id",id);
    //shorter way
    element.dataset.id = id;
    //console.log(element);
    element.classList.add('grocery-item');
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
    const editBtn = element.querySelector('.edit-btn');
    //const editBtn = deleteBtn.previousElementSibling;
    editBtn.addEventListener('click', editItem);
    // append child
    list.appendChild(element);
    // display alert
    displayAlert('item added to the list', 'success');
    // show container
    container.classList.add('show-container');
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== '' && editFlag) {
    //to know see func edit item
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert('please enter value', 'danger');
  }
}
// display alert
/** Handles display alert. */
function displayAlert(text, classAction) {
  alert.textContent = text;
  alert.classList.add(`alert-${classAction}`);
  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${classAction}`);
  }, 1000);
}
/** Handles delete item. */
function deleteItem(event) {
  const el = event.currentTarget.parentElement.parentElement;
  const id = el.dataset.id;
  list.removeChild(el);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// set backt to defaults
/** Handles set back to default. */
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}
/** Handles remove from local storage. */
function removeFromLocalStorage(id) {
  // get obj from storage
  let items = getLocalStorage();
  // return new set obj
  items=items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  // replace new obj in localstorage also i think to convert obj to JSON(the thinking is correct!)
  localStorage.setItem("list", JSON.stringify(items));
}
/** Handles get local storage. */
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
/** Handles edit item. */
function editItem(event) {
  const el = event.currentTarget.parentElement.parentElement;
  // set edit item(tag p init our value)
  editElement = event.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  //
  editID = el.dataset.id;
  //
  submitBtn.textContent = 'edit';
}
// add to local storage
/** Handles add to local storage. */
function addToLocalStorage(id, value) {
  //create obj
  const groceryItem = { id, value };
  let items = getLocalStorage();
  items.push(groceryItem);
  //convert obj to jason and also set local storage
  localStorage.setItem("list", JSON.stringify(items));
}
// Edit to local storage
/** Handles edit local storage. */
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
// clear items
/** Handles clear items. */
function clearItems() {
  const items = document.querySelector('.grocery-item');
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
}
// ****** setup items **********

/** Handles setup items. */
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add('show-container');
  } 
}
/** Handles create list item. */
function createListItem(id, value) {
  const el = document.createElement('article');
  //craete data-id and set assigne value
  //el.setAttribute("data-id", value);
  //other way:
  el.dataset.id = id;
  el.classList.add('grocery-item');
  el.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
          // add event listeners to both buttons;
  const deleteBtn = el.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = el.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  // append child
  list.appendChild(el);
}
//________________________________________Correct Code________________________________________________
// ****** select items **********

// const form = document.querySelector(".grocery-form");
// const alert = document.querySelector(".alert");
// const grocery = document.getElementById("grocery");
// const submitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector(".grocery-container");
// const list = document.querySelector(".grocery-list");
// const clearBtn = document.querySelector(".clear-btn");
// // edit option
// let editElement;
// let editFlag = false;
// let editID = "";
// // ****** event listeners **********

// // submit form
// form.addEventListener("submit", addItem);
// // clear list
// clearBtn.addEventListener("click", clearItems);
// // display items onload
// window.addEventListener("DOMContentLoaded", setupItems);

// // ****** functions **********

// // add item
// function addItem(e) {
//   e.preventDefault();
//   const value = grocery.value;
//   const id = new Date().getTime().toString();

//   if (value !== "" && !editFlag) {
//     const element = document.createElement("article");
//     let attr = document.createAttribute("data-id");
//     attr.value = id;
//     element.setAttributeNode(attr);
//     element.classList.add("grocery-item");
//     element.innerHTML = `<p class="title">${value}</p>
//             <div class="btn-container">
//               <!-- edit btn -->
//               <button type="button" class="edit-btn">
//                 <i class="fas fa-edit"></i>
//               </button>
//               <!-- delete btn -->
//               <button type="button" class="delete-btn">
//                 <i class="fas fa-trash"></i>
//               </button>
//             </div>
//           `;
//     // add event listeners to both buttons;
//     const deleteBtn = element.querySelector(".delete-btn");
//     deleteBtn.addEventListener("click", deleteItem);
//     const editBtn = element.querySelector(".edit-btn");
//     editBtn.addEventListener("click", editItem);

//     // append child
//     list.appendChild(element);
//     // display alert
//     displayAlert("item added to the list", "success");
//     // show container
//     container.classList.add("show-container");
//     // set local storage
//     addToLocalStorage(id, value);
//     // set back to default
//     setBackToDefault();
//   } else if (value !== "" && editFlag) {
//     editElement.innerHTML = value;
//     displayAlert("value changed", "success");

//     // edit  local storage
//     editLocalStorage(editID, value);
//     setBackToDefault();
//   } else {
//     displayAlert("please enter value", "danger");
//   }
// }
// // display alert
// function displayAlert(text, action) {
//   alert.textContent = text;
//   alert.classList.add(`alert-${action}`);
//   // remove alert
//   setTimeout(function () {
//     alert.textContent = "";
//     alert.classList.remove(`alert-${action}`);
//   }, 1000);
// }

// // clear items
// function clearItems() {
//   const items = document.querySelectorAll(".grocery-item");
//   if (items.length > 0) {
//     items.forEach(function (item) {
//       list.removeChild(item);
//     });
//   }
//   container.classList.remove("show-container");
//   displayAlert("empty list", "danger");
//   setBackToDefault();
//   localStorage.removeItem("list");
// }

// // delete item

// function deleteItem(e) {
//   const element = e.currentTarget.parentElement.parentElement;
//   const id = element.dataset.id;

//   list.removeChild(element);

//   if (list.children.length === 0) {
//     container.classList.remove("show-container");
//   }
//   displayAlert("item removed", "danger");

//   setBackToDefault();
//   // remove from local storage
//   removeFromLocalStorage(id);
// }
// // edit item
// function editItem(e) {
//   const element = e.currentTarget.parentElement.parentElement;
//   // set edit item
//   editElement = e.currentTarget.parentElement.previousElementSibling;
//   // set form value
//   grocery.value = editElement.innerHTML;
//   editFlag = true;
//   editID = element.dataset.id;
//   //
//   submitBtn.textContent = "edit";
// }
// // set backt to defaults
// function setBackToDefault() {
//   grocery.value = "";
//   editFlag = false;
//   editID = "";
//   submitBtn.textContent = "submit";
// }

// // ****** local storage **********

// // add to local storage
// function addToLocalStorage(id, value) {
//   const grocery = { id, value };
//   let items = getLocalStorage();
//   items.push(grocery);
//   localStorage.setItem("list", JSON.stringify(items));
// }

// function getLocalStorage() {
//   return localStorage.getItem("list")
//     ? JSON.parse(localStorage.getItem("list"))
//     : [];
// }

// function removeFromLocalStorage(id) {
//   let items = getLocalStorage();

//   items = items.filter(function (item) {
//     if (item.id !== id) {
//       return item;
//     }
//   });

//   localStorage.setItem("list", JSON.stringify(items));
// }
// function editLocalStorage(id, value) {
//   let items = getLocalStorage();

//   items = items.map(function (item) {
//     if (item.id === id) {
//       item.value = value;
//     }
//     return item;
//   });
//   localStorage.setItem("list", JSON.stringify(items));
// }

// // SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// // ****** setup items **********

// function setupItems() {
//   let items = getLocalStorage();

//   if (items.length > 0) {
//     items.forEach(function (item) {
//       createListItem(item.id, item.value);
//     });
//     container.classList.add("show-container");
//   }
// }

// function createListItem(id, value) {
//   const element = document.createElement("article");
//   let attr = document.createAttribute("data-id");
//   attr.value = id;
//   element.setAttributeNode(attr);
//   element.classList.add("grocery-item");
//   element.innerHTML = `<p class="title">${value}</p>
//             <div class="btn-container">
//               <!-- edit btn -->
//               <button type="button" class="edit-btn">
//                 <i class="fas fa-edit"></i>
//               </button>
//               <!-- delete btn -->
//               <button type="button" class="delete-btn">
//                 <i class="fas fa-trash"></i>
//               </button>
//             </div>
//           `;
//   // add event listeners to both buttons;
//   const deleteBtn = element.querySelector(".delete-btn");
//   deleteBtn.addEventListener("click", deleteItem);
//   const editBtn = element.querySelector(".edit-btn");
//   editBtn.addEventListener("click", editItem);

//   // append child
//   list.appendChild(element);
// }

