const myself = {
  name: "Trung",
  friends: [
    {
      name: "Duc beo u",
      friends: [
        { name: "Minh nghien", friends: [{ name: "A" }, { name: "B" }] },
      ],
    },
    { name: "Anh" },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
