var friends = [];

//Seed person constructor
function Person(name,image,responses){
    this.name = name;
    this.image = image;
    this.responses = responses;
}

//Seed friends with Office Characters
friends.push(new Person('Michael Scott','/userimages/michael.jpg',[5,3,4,3,1,3,4,5,5,5]));
friends.push(new Person('Dwight Schrute','/userimages/dwight.jpg',[4,4,4,5,4,3,3,4,2,4]));
friends.push(new Person('Jim Halpert','/userimages/jim.jpg',[3,3,3,1,2,3,4,4,5,5]));
friends.push(new Person('Pam Beasley','/userimages/pam.jpg',[3,3,3,3,3,3,4,4,4,5]));
friends.push(new Person('Andy Bernard','/userimages/andy.jpg',[5,3,4,3,3,3,5,5,3,5]));
friends.push(new Person('Angela Martin','/userimages/angela.jpg',[1,1,3,5,5,4,3,4,3,1]));
friends.push(new Person('Phyllis Vance','/userimages/phyllis.jpg',[3,1,5,2,3,1,3,5,1,2]));
friends.push(new Person('Meredith Palmer','/userimages/meredith.jpg',[5,4,2,1,3,3,4,2,1,3]));

module.exports = friends;
