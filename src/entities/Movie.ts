import Genre from "./Genre"

export default interface Movie {
_id: string,
title: string,
genre: Genre,
numberInStock: number,
dailyRentalRate: number
}