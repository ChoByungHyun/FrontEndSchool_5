class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list");
  }
  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (response.ok) {
        return response.json();
      } else throw new Error(response.status);
    } catch (e) {
      console.log(e);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();

    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
       <button 
       class="btn-cola" 
       type="button"
       data-item="${el.name}"
        data-price="${el.cost}"
         data-img="${el.img}"
          data-count="${el.count}">
              <img class="cola-img" " src="./img/${el.img}" alt="" />
              <span class="cola-name">${el.name}</span>
              <strong class="cola-price">${el.cost}</strong>
       </button>
      `;
      item.innerHTML = itemTemplate;
      docFrag.appendChild(item);
    });
    this.itemList.appendChild(docFrag);
  }
}
export default ColaGenerator;
