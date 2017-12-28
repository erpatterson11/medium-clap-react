import React from 'react';
import Clap from '../Clap';
import renderer from 'react-test-renderer';

test('Clap increases the count when button is clicked', () => {
  const component = renderer.create(
    <Clap />,
  );
  // renders the component
  let tree = component.toJSON();
    console.log(tree);

  expect(tree).toMatchSnapshot();
  
  let increaseButton = tree.children.filter(val => val.props.name == 'increaseCount')
  // manually invoke the click method
  increaseButton.increaseCount()
  // re-render the component
  tree = component.toJson()
  expect(tree).toMachSnapshot()

});