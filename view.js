export const Renderer = () => {
  const renderUserPage = (userData) => {
    const { users, quote, pokemon, text } = userData;
  };

  const _renderUserInfo = (users) => {
    const userImg = document.querySelector(".user-img");
    const userName = document.querySelector(".user-name");
    const userLocation = document.querySelector(".user-location");

    userImg.setAttribute("src", users[0].pictureUrl);
    userName.textContent = `${users[0].firstName} ${users[0].lastName}`;
    userLocation.textContent = `${users[0].city}, ${users[0].state}`;
    //include friends?
  };

  return { renderUserPage };
};
