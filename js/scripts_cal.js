var first_num = prompt('Pick a number');
var user_num = parseInt(first_num);

var pick_symbol = prompt('Type a mathematical symbol + - * /');

var second_num = prompt('Pick another number');
var user_two_num = parseInt(second_num);

if (pick_symbol === '+') {
  var the_math = user_num + user_two_num;
  document.write(user_num + ' + ' + user_two_num + ' = ' + the_math);
}

if (pick_symbol === '-') {
  var the_math = user_num - user_two_num;
  document.write(user_num + ' - ' + user_two_num + ' = ' + the_math);
}

if (pick_symbol === '*') {
  var the_math = user_num * user_two_num;
  document.write(user_num + ' * ' + user_two_num + ' = ' + the_math);
}

if (pick_symbol === '/') {
  var the_math = user_num / user_two_num;
  document.write(user_num + ' / ' + user_two_num + ' = ' + the_math);
}
