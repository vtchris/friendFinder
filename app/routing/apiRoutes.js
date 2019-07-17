let friends = require('../data/friends')

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {

    })
    app.post('/api/friends', function (req, res) {

        let friend = req.body;

        if (friends.length < 1) {
            friends.push(friend);
            res.json(false);
        } else {
            
            var bestMatch = null;
            var bestScore = 0;

            for (let i = 0; i < friends.length; i++) {

                var matchScore = 0;

                for (let j = 0; j < friends[i].responses.length; j++) {
                    matchScore += Math.abs(friends[i].responses[j] - friend.responses[j]);
                }

                //First time through, set 
                if (bestMatch === null || matchScore < bestScore) {
                    bestScore = matchScore;
                    bestMatch = friends[i];
                    // }else if (matchScore < bestScore){
                    //     bestScore = matchScore;
                    //     bestMatch = friends[i];
                }

                // console.log(matchScore)
                // console.log(friends[i].name)
                // console.log("---- Next is current -----")
                // console.log(bestScore)
                // console.log(bestMatch)
                // console.log("--------------------------")

            }

            console.log("score: " + bestScore)
            console.log("friend " + bestMatch.name)
            friends.push(friend);

           
        }
        // // console.log(req.body)
        // // console.log(friends)
        // console.log("hi")
        // console.log(true)
        res.json(bestMatch);
    })


}