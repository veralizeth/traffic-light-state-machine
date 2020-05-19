import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  id: 'lightChange',
  initial: 'red',
  states: {
    red: {
      on: {
        changeLight: 'green',
      },
    },
    green: {
      on: {
        changeLight: 'yellow',
      },
    },
    yellow: {
      on: {
        changeLight: 'red',
      },
    },
  },
});



const service = interpret(lightMachine);

export { lightMachine, service };