import React, { Component } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export default class App extends Component {
  store = {
    exercisesS: exercises,
  };

  render() {
    console.log(this.getExercisesByMuscles());
    return (
      <div>
        <Header />
        <Exercises />
        <Footer muscles={muscles} />
      </div>
    );
  }
}
