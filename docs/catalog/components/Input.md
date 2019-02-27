A basic Input component that maintains copies of a *real* and a *display* value (for cases in which masks are needed), and also maintains its own error state, which it reports upward to a parent **<Form/>** component.

```hint|directive
Inputs are made to be composable. Currently, additional functionality (such as validation, typeaheads, or masking) can be added by wrapping the component in the desired HOC.
```

# Props
```table
span: 6
rows:
  - Prop: activeLabel
    Required: no
    Type: string (hex/rgba/rgb)
    Description: The label displayed above the input field when active
  - Prop: activeLabelColor
    Required: no
    Type: string
    Description: The color of the activeLabel
  - Prop: bgColor
    Required: no
    Type: string (hex/rgba/rgb)
    Description: Background color of the input
  - Prop: borderless
    Required: no
    Type: boolean
    Description: If false, the input will have no border. If true, it will.
  - Prop: borderColor
    Required: no
    Type: string (hex/rgba/rgb)
    Description: Border color of the input in its default (non-errored) state
  - Prop: inputID
    Required: '**yes**'
    Type: string
    Description: A unique ID submitted by the form to identify the input's value
  - Prop: labelColor
    Required: no
    Type: string
    Description: The color of the inactive/blurred label of an empty input field
  - Prop: required
    Required: no
    Type: boolean
    Description: Whether the input contains a required field. Form will not submit with empty required fields.
```

# HOCs
