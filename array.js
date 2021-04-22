const games = [
    {
        id : 1,
        name : 'SCS:GO',
        coin : 100,
        category : 'ban sung'
    },
    {
        id : 2,
        name : 'GtaV',
        coin : 400,
        category : 'nhap vai'
    },
    {
        id : 3,
        name : 'Half line',
        coin : 0,
        category : 'ban sung'
    },
    {
        id : 4,
        name : 'League of legends',
        coin : 200,
        category : 'hanh dong'
    },
    {
        id : 5,
        name : 'Pes',
        coin : 1000,
        category : 'hanh dong'
    },
    {
        id : 6,
        name : 'Candy crush',
        coin : 0,
        category : 'nhap vai'
    },
]

/* array.map */
// const newGame = games.map((game, index) => {
//     if(game.coin !== 0){
//         game.coinText = `Gia ${game.coin}`
//     }else{
//         game.coinText = 'Free'
//     }
//     return {
//         id : game.id,
//         name : game.name,
//         coin : game.coin,
//         coinText : game.coinText
//     }
// })
// console.log(newGame)

/* array.sort */
// const coinSort = games.sort((a, b) => a.coin - b.coin);
// console.log(coinSort);

// const mapped = games.map((game, index) => {
//     return {
//         index : index,
//         name : game.name.toLowerCase()
//     }
// })
// mapped.sort((a, b) => {
//     if(a.name > b.name){
//         return 1
//     }else if(a.name < b.name){
//         return -1
//     }else{
//         return 0
//     }
//     //return a.name.localeCompare(b.name);
// })
// const result = mapped.map((game) => {
//     return games[game.index]
// })
// console.log(result)

/* array.reduce */
const totalCoin = games.reduce((total, game) => total + game.coin, 0);
console.log(totalCoin)

const groupBy = (objArray, property) => {
    return objArray.reduce((categoryGame, element) => {
        const key = element[property];
        if(!categoryGame[key]){
            categoryGame[key] = [];
        }
        categoryGame[key].push(element)
        return categoryGame;
    }, {});
};
console.log(groupBy(games, 'category'))

/* array.filter */
// const freeGames = (games) => {
//     return games.filter(game => game.coin === 0)
// };

// console.log(freeGames(games))

/* array.find */
// const freeGame = (games) => {
//     return games.find(game => game.coin === 0)
// };

// console.log(freeGame(games))


// function combineArrays() {
//     let result = [];
//     for(let i in arguments){
//         //console.log(arguments[i])
//         arguments[i].forEach(element => {
//             if(result.indexOf(element) === -1){
//                 result.push(element)
//             }               
//         });
//     }
//     console.log(result)
// }
// combineArrays([1, 2], [2, 3], [3, 3, 2, 4])


// function smallValue() {
//     let result = Number.MAX_VALUE;
//     let myArr = []
//     for(let i in arguments){
//         arguments[i].forEach(element => {
//             myArr.push(element);
//         });       
//     }
//     result = myArr.reduce((acc, value) => {
//         if(value < acc){
//             return value;
//         }else{
//             return acc;
//         }
//     }, result)
//     console.log(result) ;
// }
// smallValue([1, 2], [1, 3, 4], [232, 23])
