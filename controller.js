import { Renderer } from "./view.js";
import { DataModel } from "./model.js";

const renderer = Renderer();
const dataModel = DataModel();

const generateButton = document.querySelector(".generate-btn");
const saveButton = document.querySelector(".save-btn");
const loadButton = document.querySelector(".load-btn");

const loadAndRenderData = async () => {
  const randomUserData = await dataModel.getRandomUserData();
  renderer.renderUserPage(randomUserData);
};

generateButton.addEventListener("click", loadAndRenderData);

saveButton.addEventListener("click", () => {
  dataModel.saveData();
});

loadButton.addEventListener("click", () => {
  const data = dataModel.loadData();
  renderer.renderUserPage(data);
});

loadAndRenderData();
