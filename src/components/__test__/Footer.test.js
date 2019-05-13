import React from 'react';
import Footer from '../Footer';
import renderer from 'react-test-renderer';

describe('Footer', () => {

  it("Footer - render correctly component", () => {
    const FooterComponent = renderer.create(<Footer/>).toJSON();
    expect(FooterComponent).toMatchSnapshot();
  });

});