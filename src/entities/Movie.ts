import Genre from "./genre"

export default interface Movie {
title: string,
genre: Genre,
numberInStock: number,
dailyRentalRate: number
}