let interests = {};
let ratings = {};

class RatingsAndInterests {
    addInterest(name, value) {
        interests[name] = value;
    }

    getInterests() {
        return interests;
    }

    addRating(name, value) {
        ratings[name] = value;
    }

    getRatings() {
        return ratings;
    }
}

export default RatingsAndInterests;