---
path: ''
date: '2019-05-31'
title: "Creating a radio button component with react-hooks"
public: true
language: ""
tags: ["react", "hooks", "radio-button"]
---

I love create my own components to know how they works, sometimes I install third party libraries, but when about to learn I simple start from scratch.

## Not classes just hooks...

First of all lets create a hook component called `Radio`

```javascript
import React from "react";

function Radio(){
  return (
    <div>
      // our code goes here
    </div>
  )
}

The `Radio` component will be our container for our `radio buttons` and it is gonna handle the state.
A way to do this is to create another function maybe called `RadioButton` and it will return the jsx element `<input type="radio"/>`
then import the two components individualy like `import { Radio, RadioButton } from "../file"`. but... I dont want to do that, I am gonna use `react context` for this purple.