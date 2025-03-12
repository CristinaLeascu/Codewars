function descendingOrder(numbers){
  return Number([...String(numbers)].sort().reverse().join(''));
}