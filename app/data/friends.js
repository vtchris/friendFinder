var friends = [];

//Seed person constructor
function Person(name,image,responses){
    this.name = name;
    this.image = image;
    this.responses = responses;
}

//Seed friends with Office Characters
friends.push(new Person('Michael Scott','../data/images/userImages/michael.jpg',[5,3,4,3,1,3,4,5,5,5]));
friends.push(new Person('Dwight Schrute','b.jpg',[4,4,4,5,5,3,3,4,2,4]));
friends.push(new Person('Jim Halpert','c.jpg',[3,3,3,1,2,3,4,4,5,5]));
friends.push(new Person('Pam Beasley','c.jpg',[3,3,3,3,3,3,4,4,4,5]));
friends.push(new Person('Andy Bernard','d.jpg',[5,3,4,3,3,3,5,5,3,5]));
friends.push(new Person('Angela Martin','f.jpg',[1,1,3,5,5,4,3,4,3,1]));
friends.push(new Person('Phyllis Vance','g.jpg',[3,1,5,2,3,1,3,5,1,2]));

module.exports = friends;
