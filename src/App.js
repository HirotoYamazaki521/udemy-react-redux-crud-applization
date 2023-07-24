import React from "react";

const App = () => {
  const profiles = [
      {name: "Taro", age: 10},
      {name: "Hanako", age: 6},
      {name: "NoName"}
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        // DOMの変更点をReactが検知してくれる
        // DOMにキーをつけることで、Reactが変更点を検知しやすくなる
        // map で受け取るindexを利用して、keyにindexを指定することもできる
        return <User name={profile.name} age={profile.age} key ={index}/>
    })
  }
  </div>
  )
}

// ユーザーコンポーネント
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

// デフォルト値を設定することができる
User.defaultProps = {
  age: 1
}

export default App;
