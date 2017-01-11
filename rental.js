/**
 * Created by oleg on 11/01/2017.
 */
class Rental {
    constructor(data){
        this._data = data;
    }
    get movieID(){
        return this._data.movieID;
    }
    get days(){
        return this._data.days;
    }
}
module.exports = Rental;