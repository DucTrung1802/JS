const myself = {
  name: "Trung",
  friends: [
    {
      name: "Duc beo u",
      friends: [{ name: "Minh nghien" }],
    },
    { name: "Anh" },
  ],
};

function printFriendNames(person) {
  const collectedNames = [];

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
  }
}

console.log(printFriendNames(myself));
