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
    const friendList = document.querySelector(".friends-list");

    userImg.setAttribute("src", users[0].pictureUrl);
    userName.textContent = `${users[0].firstName} ${users[0].lastName}`;
    userLocation.textContent = `${users[0].city}, ${users[0].state}`;

    _renderFriends(friends);
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

  //

  return { renderUserPage };
};
