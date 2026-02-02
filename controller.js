import { Renderer } from "./view.js";
import { DataModel } from "./model.js";

const renderer = Renderer();
const dataModel = DataModel();

const generateButton = document.querySelector(".generate-btn");
const saveButton = document.querySelector(".save-btn");
const loadButton = document.querySelector(".load-btn");
const loadMenu = document.querySelector(".load-menu");

const loadAndRenderData = async () => {
  const randomUserData = await dataModel.getRandomUserData();
  renderer.renderUserPage(randomUserData);
};

const loadAndRenderSavedUsers = () => {
  renderer.renderSavedUsers(dataModel.getSavedProfiles());
};

generateButton.addEventListener("click", loadAndRenderData);

saveButton.addEventListener("click", () => {
  dataModel.saveCurrentProfile();
  loadAndRenderSavedUsers();
});

loadButton.addEventListener("click", () => {
  renderer.toggleLoadMenu();
  loadAndRenderSavedUsers();
});

loadMenu.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("saved-user")) {
    const id = +ev.target.dataset.id;

    const userPage = dataModel.loadSavedProfile(id);
    renderer.renderUserPage(userPage);
  }
});

loadAndRenderData();
