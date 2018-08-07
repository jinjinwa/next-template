import { observable, action } from "mobx";
/**
 * store 示例
 * 操作observable定义的变量的方法,统一加上 @actioin 装饰器
 * 其他方法直接写
 * 每个方法写上基本功能描述
 * @class AppStore
 */

class TestStore {
  @observable timer = 100;

  @action
  resetTimer = () => {
    this.timer = 0;
  };

  @action
  increase = () => {
    this.timer += 1;
  };

  test = () => {
    console.log("test");
  };
}

const testStore = new TestStore();

export default testStore;
