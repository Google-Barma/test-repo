import './styles.css';
import { hello } from './js/test';

hello();

const user = {
  name: 'John',
};

function sayHello() {
  console.log(this.name);
}

sayHello.call(user);

const obj
