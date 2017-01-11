/**
 * Created by oleg on 11/01/2017.
 */
var Rental = require('./rental');
class Customer{
    constructor(data, movies){
        this._data = data;
        this._movies = movies;
    }
    get name(){
        return this._data.name;
    }
    get rentals(){
        return this._data.rentals
            .map(rental => new Rental(rental, this._movies));
    }
    get totalFrequentRenterPoints(){
        let totalFrequentRenterPoints = 0;
        for (let rental of this.rentals) {
            totalFrequentRenterPoints += rental.frequentRenterPoints;
        }

        return totalFrequentRenterPoints;
    }
}

module.exports = Customer;