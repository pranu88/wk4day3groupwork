// ======================
// II: JavaScript Reps
// ======================
// Write a for loop that will log the numbers 1 through 20.
// for(let i=1;i <=20 ;i++){
//     console.log(i)
// }
// Write a for loop that will log only the even numbers in 0 through 200.
// for(let i =0; i <= 200; i += 2){
//     console.log(i)
// }


/*Fizz Buzz
This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/

// for(let i = 1;i <= 100;i++){
//     if(i % 3 === 0 && i % 5 ===0) console.log('FizzBuzz')
//     else if (i % 3 === 0) console.log("Fizz")
//     else if (i % 5 === 0) console.log("Buzz")
//     else console.log(i)
// }

// =====================
//    WILD WILD LIFE
// =====================
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // 1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001
// console.log(plantee)
// // 2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// // wolfy[3] = "Gotham city"
// wolfy.splice(3,1,"Gotham city")
// console.log(wolfy)
// // 3.Give D'Art a second hometown by adding "Hawkins"
// dart.push('hawkins')
// console.log(dart)
// // 4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.splice(0,1,'Gameboy')
// console.log(wolfy)

// ================================
/* Yell at the Ninja Turtles
// ================================
Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!
*/
// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// for(let turtle of ninjaTurtles){
// console.log(turtle.toUpperCase())
// }

// =====================
// Methods, Revisited
// =====================
// Console log: the index of Titanic
 const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
// console.log(favMovies.indexOf('Titanic'))
// 
// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies.sort()) //array is permanently changed.
// Use the method pop
// favMovies.pop()
// console.log(favMovies)
// push"Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)
// Reverse the array
// favMovies.reverse()
// console.log(favMovies)

// Use the shiftmethod
// favMovies.shift()
// console.log(favMovies)

// unshift- what does it return?
// favMovies.unshift("Rat Race")
// console.log(favMovies)

// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

// let getIndex = favMovies.indexOf('Django Unchained')
// console.log(favMovies.splice(getIndex,1,"Avatar"))
// console.log(favMovies)

/*slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
*/

// let getHalf = Math.floor(favMovies.lenght) / 2
// // console.log(favMovies.slice(getHalf, favMovies.length - 1))


// // 9. 
// const halfMovies = favMovies.slice(getHalf)
// console.log(halfMovies)

// console.log(halfMovies.indexOf('Fast and Furious'))

// ========================
// Where is Waldo
// ========================

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// 1.Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1,1)     //removed eggbert here indexs changed now onwords
// // console.log(whereIsWaldo)
// // 2.Change "Neff" to "No One"
// whereIsWaldo[1].splice(2,1,"No One")
// console.log(whereIsWaldo)
// // 3.Access and console.log "Waldo"
// console.log(whereIsWaldo[2][1][1])

// =========================
//   Excited Kitten
// =========================
// 1.Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// for(let i =0;i < 20;i++){
// console.log("Love me, pet me! HSSSSSS!")
// }
// // 2.For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// let messages = ["...human...why you taking pictures of me?...", "the catnip made me do it...", "...why does the red dot always get away..."]
// for(let i =0;i < 20;i++){
//     if(i % 2 === 0){
//     console.log(messages[Math.floor(Math.random() * messages.length)])
//     }
//     else console.log("Love me, pet me! HSSSSSS!")
// }

// =======================
// Find the Median
// =======================

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]

// // Find the median number in the following numsarray, then console.log that number.
// nums.sort() 
// let median = Math.floor(nums.length / 2)
// console.log(nums[median])

// ============================
//     Return of the Closets
// ============================
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.shift()
// console.log(kristynsShoe)
thomsCloset[2].splice(3,0,kristynsShoe)
console.log(thomsCloset)

// Modify your code to put together 3 separate outfits for Kristyn and
//  Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
console.log(`Kristyn is wearing ${kristynsCloset[0]}, ${kristynsCloset[2]}, and ${kristynsCloset[3]}.`)
console.log(`Tom is wearing ${thomsCloset[0][2]}, ${thomsCloset[1][0]},${thomsCloset[2][2]}`)

// Dirty Laundry
    // Continue looking at the closet arrays:

    // Time to do laundry - loop through Kristyn's closet and log the sentence
    // "WHIRR: Now washing (item)" for each item in the array.

    // for (let laundry of kristynsCloset) {
    //     console.log(`WHIRR: Now washing ${laundry}`)
    // }

    // console.log(thomsCloset[0])
    // console.log(thomsCloset[1])
    // console.log(thomsCloset[2])
