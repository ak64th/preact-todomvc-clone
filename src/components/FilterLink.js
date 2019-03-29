import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { setVisibilityFilter, VisibilityFilters } from '../actions';

const Link = ({active, children, onClick}) => (
  <li>
    <a
      href=''
      class={active ? 'selected' : ''}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  </li>
);

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
