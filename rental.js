/**
 * Created by oleg on 11/01/2017.
 */
class Rental {
    constructor(data, movies) {
        this._data = data;
        this._movies = movies;
    }

    get movieID() {
        return this._data.movieID;
    }

    get days() {
        return this._data.days;
    }

    get movie() {
        return this._movies[this.movieID];
    }

    get frequentRenterPoints() {

        return (this.movie.code === "new" && rental.days > 2) ? 2 : 1;

    }
}
module.exports = Rental;