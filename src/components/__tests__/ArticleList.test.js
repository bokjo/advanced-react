import React       from 'react';
import ArticleList from '../ArticleList';

// import renderer    from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a', title: 'title a', date: 'date', body: 'body' },
      b: { id: 'b', title: 'title b', date: 'date', body: 'body' },
    },
  };

  it('List component renders correctly...', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    console.log(wrapper.node.props.children);

    // expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });

});
