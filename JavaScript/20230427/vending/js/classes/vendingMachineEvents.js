class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-List");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-List");

    const myinfo = document.querySelector(".section2");
    this.myMoney = myinfo.querySelector(".section2 .bg-box strong");

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-List");
    this.txtTotal = getInfo.querySelector(".total-price");
  }
  bindEvent() {
    /**
     * 1. 입금 버튼 기능.
     * 입금 버튼을 누르면 1. 소지금 == 소지금 - 입금액
     *
     */
    this.btnPut.addEventListener("click", () => {
      //입력값
      const inputCost = parseInt(this.inputCostEl.value);
      //소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));
      //잔액
      const balanceVal = parseInt(this.balance.textContent);

      if (inputCost) {
        if (inputCost <= myMoneyVal && inputCost > 0) {
          this.myMoney.textContent = myMoneyVal - inputCost + "원";
        } else {
          alert("소지금이 부족합니다.");
        }
      }
    });
  }
}
export default VendingMachineEvents;
