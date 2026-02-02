import { saveToStorage, loadFromStorage } from "./storageHelper.js";

export const DataModel = () => {
  const _MAX_POKEMON_ID = 1025;
  const _USER_DATA_KEY = "userData";
  const _SAVED_PROFILES_KEY = "savedProfiles";

  let _idCounter = 0;
  let _currentUserData = null;
  let savedProfiles = [];

  const getRandomUserData = async () => {
    try {
      const [users, quote, pokemon, text] = await Promise.all([
        fetch(`https://randomuser.me/api/?results=7&inc=name,location,picture`).then((r) => r.json()),
        fetch(`https://api.kanye.rest`).then((r) => r.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon/${_getRandomInt(1, _MAX_POKEMON_ID)}/`).then((r) => r.json()),
        fetch(`https://baconipsum.com/api/?type=meat-and-filler&sentences=3`).then((r) => r.json()),
      ]);

      _currentUserData = {
        users: _formatUserData(users),
        quote: quote.quote,
        pokemon: _formatPokemonData(pokemon),
        text: text[0],
        id: _idCounter,
      };

      _idCounter++;
      return _currentUserData;
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  const _formatUserData = (users) => {
    return users.results.map((user) => ({
      firstName: user.name.first,
      lastName: user.name.last,
      city: user.location.city,
      state: user.location.state,
      pictureUrl: user.picture.large,
    }));
  };

  const _formatPokemonData = (pokemon) => {
    return {
      name: _capitalize(pokemon.name),
      pictureUrl: pokemon.sprites.front_default,
    };
  };

  const _getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const _capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1);
  };

  const saveData = () => {
    if (_currentUserData) {
      saveToStorage(_USER_DATA_KEY, _currentUserData);
    }
  };

  const loadData = () => {
    const data = loadFromStorage(_USER_DATA_KEY);
    if (data) {
      _currentUserData = data;
    }
    return data;
  };

  const saveCurrentProfile = () => {
    let savedProfiles = loadFromStorage(_SAVED_PROFILES_KEY) || [];
    savedProfiles.push(_currentUserData);
    saveToStorage(_SAVED_PROFILES_KEY, savedProfiles);
  };

  const getSavedProfiles = () => {
    return loadFromStorage(_SAVED_PROFILES_KEY) || [];
  };

  const loadSavedProfile = (idx) => {
    let savedProfiles = loadFromStorage(_SAVED_PROFILES_KEY);
    if (!savedProfiles || savedProfiles[idx]) {
      return null;
    }

    _currentUserData = savedProfiles[idx];
    return _currentUserData;
  };

  return { getRandomUserData, saveData, loadData };
};
