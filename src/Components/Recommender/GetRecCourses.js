import RatingsAndInterests from './RatingsAndInterests';

let courses = {}

class GetRecCourses {
    
    generateCourses(allCourses, prevCourses) {
        let RaI = new RatingsAndInterests();
        let allInterests = RaI.getInterests();
        let prevRatings = RaI.getRatings();
        let interests = {};
        let courseRatings = {};
        courses = {};

        // give every course a base rating of 0
        for(const course of Object.entries(allCourses)) {
            courseRatings[course[0]] = 0;
        }

        // only consider interests marked as true
        for(const inter of Object.entries(allInterests)) {
            if(inter[1] === true) {
                interests[inter[0]] = true;
            }
        }

        // assign ratings to courses based off user ratings and interests
        for(const course of Object.entries(allCourses)) {
            for(var i = 0; i < course[1].keywords.length; i++) {
                for(const r of Object.entries(prevRatings)) {
                    for(var j = 0; j < allCourses[r[0]].keywords.length; j++) {
                        if(allCourses[r[0]].keywords[j] === course[1].keywords[i]) {
                            if(r[1] == 1) {
                                courseRatings[course[0]] -= 1;
                            }
                            if(r[1] == 2) {
                                courseRatings[course[0]] -= 0.5;
                            }
                            if(r[1] == 3) {
                                courseRatings[course[0]] += 0;
                            }
                            if(r[1] == 4) {
                                courseRatings[course[0]] += 0.5;
                            }
                            if(r[1] == 5) {
                                courseRatings[course[0]] += 1;
                            }
                        }
                    }
                }
                for(const interest of Object.entries(interests)) {
                    if(interest[0].toLowerCase() === course[1].keywords[i]) {
                        courseRatings[course[0]] += 1;
                    }
                }
            }
        }

        this.findTopCourses(courseRatings);
    }

    findTopCourses(ratings) {
        let first = -100;
        let second = -100;
        let third = -100;
        let fourth = -100;
        let firstK, secondK, thirdK, fourthK;
        for(const course of Object.entries(ratings)) {
            if(course[1] > first) {
                fourth = third;
                fourthK = thirdK;
                third = second;
                thirdK = secondK;
                second = first;
                secondK = firstK;
                first = course[1]
                firstK = course[0];
            }
            else if(course[1] > second) {
                fourth = third;
                fourthK = thirdK;
                third = second;
                thirdK = secondK;
                second = course[1];
                secondK = course[0];
            }
            else if(course[1] > third) {
                fourth = third;
                fourthK = thirdK;
                third = course[1];
                thirdK = course[0];
            }
            else if(course[1] > fourth) {
                fourth = course[1];
                fourthK = course[0];
            }
        }

        if(first !== 0 && second !== 0 && third !== 0 && fourth !== 0) {
            courses = {firstK, secondK, thirdK, fourthK};
        }
        console.log(first + " " + second + " " + third + " " + fourth);
    }

    getCourses() {
        return courses;
    }
}

export default GetRecCourses;