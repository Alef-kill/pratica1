const SelectionSort = require('./selectionSort');
const ConvertCsv = require('./ConvertCsv');

class Main { 
    wordsRepeatRemove(array = [], sls) {
        let a = array.map(item => item.category);
        return  sls.SelectionSort([...new Set(a)], ">", null);
    }

    main() { 
        (async () => {
            const csv = new ConvertCsv();
            const sls = new SelectionSort();
            // 1º step: read csv
            const gamesList = await csv.readFileLineByLine("jogosDesordenados.csv");
            
            // 2º step: order by category
            const orderCategory = sls.SelectionSort(gamesList, '>', 'category');
        
            // 3º step: order by games and avaliations
            var categoryList = this.wordsRepeatRemove(gamesList, sls);  // remove and sorting categories
            const listGameGrouped = categoryList.map(a => { 
                let result = gamesList.filter(item => item.category === a); // Grouping objects by category
                // Sorting by game
                return sls.SelectionSort(result, ">", "game");
            });
            
            // 4º step: save sorted by selectionSort
            csv.convertCsv([].concat(...listGameGrouped), true, "orderGame");
        
        })();
    }
}

new Main().main();