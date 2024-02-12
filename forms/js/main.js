// let form = document.forms.registration
// let email = form.elements[1]
//
// console.log(form.elements[0].value)
// console.log(form.elements[2].value)
//
// console.log(form.elements[5].checked)
//
//
// console.log(form.elements[3])
//
// console.log(form.elements[3].checked = true);
//
//
// email.onblur = () => {
//     if (!email.value.includes('@')){
//         let error = document.querySelector('.error')
//         error.innerHTML = 'Email error'
//     }
// }
//
// email.onfocus = () => {
//     let error = document.querySelector('.error');
//     error.innerHTML = ''
// }
//
// form.addEventListener('focus', () => console.log('focus'));
// form.addEventListener('blur', () => console.log('blur'));
// form.addEventListener('focusin', () => console.log('focusin'));
// form.addEventListener('focusout', () => console.log('focusout'));
//
// email.addEventListener('input', () => console.log(email.value))
//
// function subm(event){
//     event.preventDefault();
//     console.llog('dkasdfg')
// }
//
// let input = document.getElementById('input');
//
// input.oncut = input.oncopy = input.onpaste = function(event) {
//     alert(event.type + ' - '+ event.clipboardData.getData('text/plain'));
//     return false;
// };
//
//
/// Добавьте пункт к выпадающему списку
//let genres = document.getElementById('genres');
//
//genres.querySelector('option[value="classic"]').selected = true;
//
/// Редактируемый div
//let edit = document.getElementById('view');
//
//edit.addEventListener('click', function(event) {
//    let textarea = document.createElement('textarea');
//   textarea.id = 'view';
//    textarea.className = 'view';
//    textarea.value = this.innerHTML;
//    this.parentNode.replaceChild(textarea, this);
//    textarea.focus();
//    textarea.addEventListener('keypress', function(event) {
//        if (event.key === 'Enter') {
//          textarea.blur();
//        }
//  });
//});
//
//document.addEventListener('blur', function(event) {
//    let target = event.target;
//    if (target && target.matches('.view')) {
//        let div = document.createElement('div');
//        div.id = 'view';
//        div.className = 'view';
//       div.innerHTML = target.value.trim();
//        target.parentNode.replaceChild(div, target);
//    }
//}, true);
//
// Редактирование TD по клику
//
//let table = document.getElementById('bagua-table');
//
//let editingTd;
//
//table.onclick = function(event) {
//
//  let target = event.target.closest('.edit-cancel,.edit-ok,td');
//
// if (!table.contains(target)) return;
//  if (target.className == 'edit-cancel') {
//    edited(editingTd.elem, false);
//  } else if (target.className == 'edit-ok') {
//    edited(editingTd.elem, true);
//  } else if (target.nodeName == 'TD') {
//    if (editingTd) return; 
//
//    make_editable(target);
//  }
//
//};
//
//function make_editable(td) {
//  editingTd = {
//    elem: td,
//    data: td.innerHTML
//  };
//
//  td.classList.add('edit-td'); 
//
//  let textArea = document.createElement('textarea');
//  textArea.style.width = td.clientWidth + 'px';
//  textArea.style.height = td.clientHeight + 'px';
//  textArea.className = 'edit-area';
//
//  textArea.value = td.innerHTML;
//  td.innerHTML = '';
//  td.appendChild(textArea);
//  textArea.focus();
//
//  td.insertAdjacentHTML("beforeEnd",
//    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
//  );
//}
//
//function edited(td, isOk) {
//  if (isOk) {
//    td.innerHTML = td.firstChild.value;
//  } else {
//    td.innerHTML = editingTd.data;
//  }
//  td.classList.remove('edit-td');
//  editingTd = null;
//}
//
// let elem = document.querySelector('.wrap')
// let token = 'dfsfgdgfd'
//
// let new_post
//
// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authentication' : 'test'
// }
//     });
//     if (data.ok){
//         let todos = await data.json();
//         todos.forEach(todo => {
//             return elem.insertAdjacentHTML('beforeend', 
//             `<h2> ${todo.title}</h2>`)            
//         });
//     }
// }
//
// getData()
//
// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(data => data.json())
//     .them(data => printInfo(data))
// }
//
// function printInfo(todos) {
//     todos.forEach(todo => {
//         return elem.insertAdjacentHTML('beforeend', 
//         `<h2> ${todo.title}</h2>`)
//     })
// }
//
// printInfo()
//
//
//let form = document.forms.calculator;
//
//form.money.oninput = calculate;
//form.interest.onchange = calculate;
//form.months.onchange = calculate;
//
//function calculate(){
//  let money = form.money.value
//  let interest = form.interest.value * 0.01
//  let years = form.months.value / 12
//  let result = Math.round(money * (1 + interest) ** years);
//
//  let display_result = result / money * 100 + 'px';
//  document.getElementById('height-after').style.height = display_result;
//  document.getElementById('money-before').innerHTML = form.money.value;
//  document.getElementById('money-after').innerHTML = result;
//}
//
//console.log(result)





