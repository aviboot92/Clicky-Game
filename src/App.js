import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 7
  };
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(value => {
      value.count = 0;
    });
    alert(`Game Over Score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  

  userClick = id => {
    this.state.friends.find((obj, i) => {
      if (obj.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
      return 
    });
  }


  render(){
    return(
      <Wrapper>
      <div>
      <h1 className="title">Friends List</h1>
      <h3>Your Score :{this.state.score} </h3>
      <h3>Highest Score :{this.state.highScore} </h3>
      </div>
      <hr/>
      <br/>
      {this.state.friends.map((value)=>{
         return (<FriendCard
        userClick = {this.userClick}
        key ={value.id}
        {...value}
      />)
    })}
    </Wrapper>
    );
  }
}
export default App;
