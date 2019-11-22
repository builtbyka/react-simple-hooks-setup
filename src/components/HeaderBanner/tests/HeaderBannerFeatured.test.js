import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderBannerFeatured from '../HeaderBannerFeatured';

describe('<HeaderBannerFeatured />', () => {
  const getProps = () => ({
    featured: {
      id: 384018,
      title: 'Feature',
    },
    home: false,
  });

  it('renders without crashing', () => {
    const container = shallow(<HeaderBannerFeatured />);
    expect(container).toBeDefined();
  });

  it('returns null if no feature', () => {
    const container = shallow(<HeaderBannerFeatured />);
    expect(container.type()).toEqual(null);
  });

  it('has a feature prop', () => {
    const prop = getProps();
    const container = mount(<HeaderBannerFeatured />);
    container.setProps({ feature: prop });
    expect('feature' in container.props()).toEqual(true);
  });
});
