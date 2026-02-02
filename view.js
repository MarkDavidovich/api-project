export const Renderer = () => {
  const renderUserPage = (userData) => {
    const { users, quote, pokemon, text } = userData;

    const quoteText = document.querySelector(".quote-text");
    const aboutText = document.querySelector(".about-text");

    _renderUserInfo(users);
    _renderPokemon(pokemon);
    quoteText.textContent = `"${quote}"`;
    aboutText.textContent = text;
  };

  const _renderUserInfo = (users) => {
    const friends = users.slice(1);

    const userImg = document.querySelector(".user-img");
    const userName = document.querySelector(".user-name");
    const userLocation = document.querySelector(".user-location");

    userImg.setAttribute("src", users[0].pictureUrl);
    userName.textContent = `${users[0].firstName} ${users[0].lastName}`;
    userLocation.textContent = `${users[0].city}, ${users[0].state}`;

    _renderFriends(friends);
  };

  const renderSavedUsers = (profiles) => {
    const loadMenu = document.querySelector(".load-menu");

    loadMenu.innerHTML = "";
    for (const profile of profiles) {
      const { users, id } = profile;
      const mainUser = users[0];

      const savedUserElement = _createSavedUser(mainUser.pictureUrl, mainUser.firstName, mainUser.lastName, id);

      loadMenu.appendChild(savedUserElement);
    }
  };

  const toggleLoadMenu = () => {
    const loadMenu = document.querySelector(".load-menu");

    loadMenu.classList.toggle("show");
  };

  const _createSavedUser = (pictureUrl, firstName, lastName, id) => {
    const savedUser = document.createElement("div");
    const savedImgContainer = document.createElement("div");
    const savedImg = document.createElement("img");
    const savedNameContainer = document.createElement("div");
    const savedFirstName = document.createElement("p");
    const savedLastName = document.createElement("p");

    savedImg.src = pictureUrl;
    savedImg.alt = `${firstName}'s photo`;
    savedFirstName.textContent = firstName;
    savedLastName.textContent = lastName;
    savedUser.dataset.id = id;

    savedUser.classList.add("saved-user");
    savedImgContainer.classList.add("saved-img-container");
    savedImg.classList.add("saved-img");
    savedNameContainer.classList.add("saved-name-container");

    savedImgContainer.appendChild(savedImg);
    savedNameContainer.appendChild(savedFirstName);
    savedNameContainer.appendChild(savedLastName);

    savedUser.appendChild(savedImgContainer);
    savedUser.appendChild(savedNameContainer);

    return savedUser;
  };

  const _renderFriends = (friends) => {
    const friendList = document.querySelectorAll(".friend");

    friendList.forEach((friendItem, index) => {
      const img = friendItem.querySelector(".friend-img");
      const name = friendItem.querySelector(".friend-name");

      img.src = friends[index].pictureUrl;
      name.textContent = `${friends[index].firstName} ${friends[index].lastName}`;
    });
  };

  const _renderPokemon = (pokemon) => {
    const { name, pictureUrl } = pokemon;
    const pokemonImage = document.querySelector(".pokemon-img");
    const pokemonText = document.querySelector(".pokemon-text");

    pokemonImage.src = pictureUrl;
    pokemonText.textContent = `Favorite Pokemon: ${name}`;
  };

  return { renderUserPage, renderSavedUsers, toggleLoadMenu };
};
