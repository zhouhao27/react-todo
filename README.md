## Video tutorial

https://egghead.io/series/getting-started-with-redux

### TODO

1. Add test case

2. Add Redux devtools

- redux-devtools-log-monitor
- redux-devtools-dock-monitor
- redux-devtools

3. If it's possible to put stateless functional component in different files:

```
export default FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a href='#' onClick={ e => {
      e.preventDefault()
    }}>
    {children}
    </a>
  )
}
```

### References

https://github.com/gaearon/redux-devtools
