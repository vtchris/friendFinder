let friends = require('../data/friends')

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })
    app.post('/api/friends', function (req, res) {

        //console.log(req.body)

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

                //First time through, or lower score sets new bestMatch 
                if (bestMatch === null || matchScore < bestScore) {
                    bestScore = matchScore;
                    bestMatch = friends[i];
                }

            }

            console.log("score: " + bestScore);
            console.log("friend " + bestMatch.name);

            //Add current user to friends list
            friends.push(friend);

        }
        
        //Return best match
        res.json(bestMatch);
    })


}