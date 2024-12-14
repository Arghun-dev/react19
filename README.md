# useTransition

use `useTransition` to handle the pending state for you.

The async transition will immediately set the isPending state to true, make the async request(s), and switch isPending to false after any transitions. This allows you to keep the current UI responsive and interactive while the data is changing.

# useActionState

useActionState accepts a function (the “Action”), and returns a wrapped Action to call. This works because Actions compose. When the wrapped Action is called, useActionState will return the last result of the Action as data, and the pending state of the Action as pending.
