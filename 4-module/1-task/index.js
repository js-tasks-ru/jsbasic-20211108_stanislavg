function makeFriendsList(friends) {

  let friendsList = document.createElement("ul");

  let changedFriends = friends.map(friend => `${friend.firstName} ${friend.lastName}`);

  changedFriends.forEach(element => {
    let friendItem = document.createElement("li");
    friendItem.textContent = element;

    friendsList.appendChild(friendItem);
  });

  return friendsList;
}
