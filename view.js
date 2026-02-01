export const Renderer = () => {
  const renderUserPage = (userData) => {
    const { users, quote, pokemon, text } = userData;
  };

  const _renderUserInfo = (users) => {
    const friendList = users.slice(1);

    const userImg = document.querySelector(".user-img");
    const userName = document.querySelector(".user-name");
    const userLocation = document.querySelector(".user-location");

    userImg.setAttribute("src", users[0].pictureUrl);
    userName.textContent = `${users[0].firstName} ${users[0].lastName}`;
    userLocation.textContent = `${users[0].city}, ${users[0].state}`;

    for (let friend of friendList) {
    }
  };

  const _createFriend = (firstName, lastName, pictureUrl) => {
    const friendElement = document.createElement("li");
    const imgContainer = document.createElement("div");
    const friendImg = document.createElement("img");
    const friendName = document.createElement("p");

    friendElement.classList.add("friend");
    imgContainer.classList.add("friend-img-container");
    friendImg.classList.add("friend-img");
    friendName.classList.add("friend-name");

    friendImg.setAttribute("src", pictureUrl);
    friendImg.setAttribute("alt", `${firstName}'s picture`);

    friendName.textContent = `${firstName} ${lastName}`;

    imgContainer.appendChild(friendImg);
    friendElement.appendChild(imgContainer);
    friendElement.appendChild(friendName);

    return friendElement;
  };

  return { renderUserPage };
};
