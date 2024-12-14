# useTransition

use `useTransition` to handle the pending state for you.

The async transition will immediately set the isPending state to true, make the async request(s), and switch isPending to false after any transitions. This allows you to keep the current UI responsive and interactive while the data is changing.
