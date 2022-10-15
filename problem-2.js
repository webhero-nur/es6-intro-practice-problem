/* Write an arrow function where it will do the following:
    a. It will take an array where the array elemets will be the name of your friends.
    b. Check if the length of each element is even. push elements with even length to a new array and return the result.
Print the result.
*/

const evenFriends = (friends) => {
    const evenLengthFriends = [];
    for (let friend of friends) {
        if (friend.length % 2 === 0) {
            evenLengthFriends.push(friend);
        }
    }
    return evenLengthFriends;
};

const friendsList = ['Abir', 'Asif', 'Arif', 'Nahid', 'Maruf', 'Asad', 'Shanto', 'Ratul'];
const evenLengthFriendsList = evenFriends(friendsList);
console.log(evenLengthFriendsList);
