## Provide
So basically just like in React, we have the concept of passing props from one component to another. Now this can create an issue that is know as prop drilling where to pass a prop to a deep child it must go through multiple other components. So instead what we use is called Provide. A component can simply use Provide and Inject it into the child component.

## Dynamic class binding 
In vue to bind the class dynamically we can use v-bind:class={} the short hand for this is :class

//If else case case 
:class="hasError ? 'red-border' : 'green-border'"
//If case
:class="red-border:hasError"