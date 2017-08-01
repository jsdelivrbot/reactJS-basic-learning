import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//use describe to group together similar tests
describe('App Component', () => {

  //use it to test a single attribute of a target
  //it('shows the correct text', () => {

  //create an instance of app
  //const component = renderComponent(App);

  //make a assertion about a target
  //expect(component).to.contain('React simple starter');
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('Shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});








