/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

let facebookProfile = {
  name: 'Mario',
  friends: 450,
  messages: ['hello', 'bye', 'I want to travel'],
  postMessage: function addMsg(message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage: function dltMsg(index) {
      facebookProfile.messages.splice(index, 1);
  },
  addFriend: addOneFrn => facebookProfile.friends += 1,
  removeFriend: rmvOneFrn => facebookProfile.friends -= 1
};
