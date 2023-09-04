enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const ddSeat = SeatChoice.AISLE

// enum value default starts at 0 like an array index. If you were to start at whatever number, it will autoincrement.
// If it's not a number it can be a string but then everything needs a value. There's no default.
