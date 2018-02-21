// export function a(state = 'lol', action) {
//   return state;
// }
//  
// export function b(state = 'wat', action) {
//   return state;
// }

// export function combined(state = {}, action) {
//   return {
//     a: a(state.a, action),
//     b: b(state.b, action)
//   };
// }

// export const window = ( state = window.location.hostname,action )=>state;

export const globalState = (state = "", action) => state;
