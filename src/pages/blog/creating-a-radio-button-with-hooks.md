---
path: ''
date: '2019-05-31'
title: "Creating a radio button component with react-hooks"
public: true
language: ""
tags: ["react", "hooks", "radio-button"]
---

I love create my own components to know how they works, sometimes I install third party libraries, but when about to learn I simple start from scratch.

## Radio Button Component
Lets create a function component that we will called `Button`, It will accept two props `value` and `children`.
In the function body we will validate if the radio button is checked by comparing the value prop and the current value selected (not defined yet).

```javascript
function Button({ value, children }){
  const checked = value === `current value selected`;
  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checked}/>
      { children }
    </>
  )
}
```

We intent to use our component like this

```javascript
<Button value={'option-1'}>Option 1</Button>
```

Now we need to take care of the state, how do we know the radio button is checked?
Probabily we'll handle the state in a parent component and add two new props to the Button component: checked (boolean), onChange(function).

```javascript
function Radio(){
  const [selected, setSelected] = React.useState("")
  function onChange({ target }){
    setSelected(target.value);
  }
  return (
    <div>
      <Button
        value={'option-1'}
        checked={'option-1' === selected}
        onChange={onChange}>
        Option 1
      </Button>
      <Button
        value={'option-2'}
        checked={'option-2' === selected}
        onChange={onChange}>
        Option 2
      </Button>
    </div>
  )
}
```

This would work, but our component it is not that intuitive. (yes, this is an opinion :))

## Use React Context.

React has a wonderful api called `context` that allow use to share and provide states and functionality across components.

1. Firts lets create a context: RadioContext,
2. Then change our Radio component to handle the state and will recieve as a prop: `children` and `onChange`.
3. finally in the return statement we will use `RadioContext.Provider` to allow other components to subscribe to the context changes.

```javascript
const RadioContext = React.createContext();

function Radio({ children, onChange }){
  const [state, setState] = React.useState("");
  return (
    <RadioContext.Provider value={{ state, setState, onChange }}>
      <div
        role="radiogroup"
      >
       {children}
      </div>
    </RadioContext.Provider>
  )
}
```

## Consuming state changes
Our components need a way to get the values provide by our context so lets create a function `useRadioContext`

1. useContext() to create a context and access to the the provide values.
2. validate if context is valid
3. create a function onChange that will update the state on every change.
4. return necesary data

```javascript
function useRadioContext(){
  const context = React.useContext(RadioContext);
  if (!context) {
    throw new Error(
      `Radio compound components cannot be rendered outside the Radio component`
    );
  }
  const { state, setState, onChange: notifyParent } = context;
  function onChange({ target }){
    const { value } = target;
    setState(value);
    notifyParent(value)
  }

  return {
    state, onChange
  }
}

```

## Susbcribe to change
Now we just need to subscribe to changes in our Button component

```javascript
function Button({ value, children }){
  const { state, onChange } = useRadioContext();
  const checked = value === state;
  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checked}/>
      { children }
    </>
  )
}
```

So every time the state change the Button component will re render by using `useRadioContext()`