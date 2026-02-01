import { Renderer } from "./view.js";
import { DataModel } from "./model.js";

const renderer = Renderer();
const dataModel = DataModel();

const generateButton = document.querySelector(".generate-btn");

const loadPage = async () => {
  const randomUserData = await dataModel.getRandomUserData();

  renderer.renderUserPage(randomUserData);
};

generateButton.addEventListener("click", loadPage);

// loadPage();
