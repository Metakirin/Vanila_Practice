// // Замыкание - свой bind ----------------------------------------------
// const divNode = document.querySelector('div')

// const cars1 = {
//   name: 'mazda',
//   year: '2020',
//   useage: 3,
// }

// const cars2 = {
//   name: 'porsche',
//   year: '2011',
//   useage: 1,
// }

// function showCarInfo(item) {
//   const info = document.createElement('p')
//   info.innerHTML = `Info about ${this.name}: year-${this.year}, useage:${this.useage}`
//   divNode.append(info)
//   console.log(item)
// }

// function bind(context, func) {
//   return (...args) => {
//     console.log(args)
//     func.apply(context, args)
//   }
// }

// bind(cars1, showCarInfo)('hi dude')
// bind(cars2, showCarInfo)('hi again')

// function shareMeal(souce, dishes) {
//   return `if needed u can use ${souce}, and ${dishes} as well!)`
// }

// function diet(food, drink, ...rest) {
//   return (...args) => {
//     console.log(
//       `1: ${food}. 2: ${drink}, 3: ${shareMeal(...[...rest, ...args])}`
//     )
//   }
// }

// diet('chicken', 'water', 'souce')('a few plates')

// Promises - асинхронность через промисы ------------------------------
// const text = (ms) =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       const someData = {
//         text1: "text1",
//         text2: "text2",
//         text3: "text3",
//       };

//       res(someData);
//     }, ms);
//   });

// text(2000)
//   .then((data) => {
//     let typograph = document.createElement("p");
//     for (let key in data) {
//       typograph = data[key];
//       divNode.append(typograph);
//     }
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// //Proxy--------------------------------------------------------------
// const withDefaultValue = (target, defaultValue = 0) =>
//   new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
//   })

// const position = withDefaultValue(
//   {
//     x: 24,
//     y: 42,
//   },
//   10
// )
// console.log(position)

//Prototype
