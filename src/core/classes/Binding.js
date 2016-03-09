/**
 * @file Binding.js
 */

import state from './../state.js';

/**
 * Responsible for creating a binding between an element and a gesture.
 * @class Binding
 */
class Binding {
  /**
   * Constructor function for the Binding class.
   * @param {Element} element - The element to associate the gesture to.
   * @param {Gesture} gesture - A instance of the Gesture type.
   * @param {Function} handler - The function handler to execute when a gesture is recognized on the associated element.
   * @param {Boolean} [capture=false] - A boolean signifying if the event is to be emitted during the capture or bubble phase.
   */
  constructor(element, gesture, handler, capture) {
    /**
     * The element to associate the gesture to.
     * @type {Element}
     */
    this.element = element;
    /**
     * A instance of the Gesture type.
     * @type {Gesture}
     */
    this.gesture = gesture;
    /**
     *  The function handler to execute when a gesture is recognized on the associated element.
     * @type {Function}
     */
    this.handler = handler;

    //noinspection JSUnusedGlobalSymbols
    /**
     *  A boolean signifying if the event is to be emitted during the capture or bubble phase.
     * @type {Boolean}
     */
    this.capture = (capture) ? capture : false;
  }
  /*constructor*/
}

export default Binding;