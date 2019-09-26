// components/my-style/my-style.js
Component({
  options: {
    // 控制组件间相互影响
    // isolated:相互不影响
    // apply-shared:父组件可以影响引入的子组件
    // shared:相互都可以影响
    styleIsolation: "shared"
  }
})
