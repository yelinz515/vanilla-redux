/** Vanilla JS use */
import { createStore } from "redux"; // store는 데이터 넣을 장소를 생성

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  /** 데이터를 수정하는 역할 */
  if(action.type === 'Add') {
    return count += 1
  }
  else if(action.type === 'Minus'){
    return count -= 1
  }
  else {
    return count;
  }
}
const countStore = createStore(countModifier);

number.innerText = 0;
const onChange = () => {
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange); // subscribe는 store 안에 있는 변화를 알 수 있게 한다

// dispatch를 통해 action을 보낼 수 있다.
add.addEventListener('click', () => countStore.dispatch({type: "Add"}));
minus.addEventListener('click', () => countStore.dispatch({type: "Minus"}));

// let count = 0;
// number.innerText = count; // 한 번 만 작동하기 때문에 값을 업데이트 하지 않는다.

// const updateText = () => {
//   number.innerText = count;
// }


// const handleAdd = () => {
//   count += 1;
//   updateText(); // html에게 뭔가가 바뀌었다고 알려주기 위해 함수를 쓴다는 것 자체가 리덕스가 멋진 이유 중 하나이다.
// }

// const handleMinus = () => {
//   count -= 1;
//   updateText();
// }

// add.addEventListener('click', handleAdd);
// minus.addEventListener('click', handleMinus);