// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AISLE) {

// }

//better way
// default start is 0, but can customize
// can also assign strings to enums
enum SeatChoice {
  AISLE = 10,
  MIDDLE1, //this = 11
  MIDDLE2 = 22, // can assign any values
  WINDOW // this = 23
}

const dsSeat = SeatChoice.AISLE