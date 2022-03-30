class SelectionSort {
  SelectionSort(array = [], ordem = "", key= "") { 
    for (var i = 0; i <= array.length -1; i++) {
        // going through each number, taking into account the value of the variable "i".
        for (var j = i; j <= array.length -1; j++) {
            // saving the values for the exchanges
            var value_i = array[i];
            var value_j = array[j];
            //making the exchange
            if (eval(`array[i].${key} ${ordem} array[j].${key}`) || eval(`array[i] ${ordem} array[j]`)) {
                array[i] = value_j;
                array[j] = value_i;
            }
        }
    }

    return array;
  }
}

module.exports = SelectionSort; 
