// [jsonp.js](http://neocotic.com/jsonp.js) 1.0.0
// (c) 2011 Alasdair Mercer
// Freely distributable under the MIT license.
// For all details and documentation:
// http://neocotic.com/jsonp.js

(function (root) {

  // Private variables
  // -----------------

  
  var
    // Initially the current time but incremented by each call to `get` in order
    // to ensure unique identifiers.
    id            = (new Date()).getTime(),
    // Save the previous value of the `JSONP` variable.
    previousJSONP = root.JSONP,
    // Timeout IDs for removing callback functions where the `timeout` setting
    // has been set.
    // IDs should be removed once either the callback is called or the request
    // has timed out (as specified by the `timeout` setting).
    timers        = {};

  // Private functions
  // -----------------

  // Simplest method for appending parameters to an existing query string.
  function paramify(data) {
    var query = '';
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        query += '&' + key + '=' + data[key];
      }
    }
    return query;
  }

  // JSONP setup
  // -----------

  // Build the publicly exposed API.
  root.JSONP = {

    // Constants
    // ---------

    // Current version of `JSONP`.
    VERSION: '1.0.0',

    // Variables
    // ---------

    // Callback functions for activate JSONP requests.
    // Functions should removed once they have been called. If the `timeout`
    // setting has been set and the function has not yet been called, that
    // function will be removed.
    // This property must be public since the callback is called in global
    // context.
    __callbacks: {},

    // Settings to allow further configuration of JSONP.
    settings: {
      // Name of the callback parameter included in the query string.
      callbackName : 'callback',
      // Timeout (in milliseconds) for the request. Requests will only be timed
      // out if this is greater than zero.
      timeout      : 0
    },

    // JSONP functions
    // ---------------

    // Send the data provided to the URL and pass the callback function as a
    // parameter to be called under the specified context.
    // Only the `url` argument is required.
    get: function (url, data, callback, context) {
      // Ensure optional arguments are handled, using defaults where needed.
      if (typeof url      !== 'string'  ) return;
      if (typeof callback !== 'function') context = callback;
      if (typeof data     === 'function') callback = data;
      if (typeof data     !== 'object'  ) data = {};
      if (typeof callback !== 'function') callback = function () {};
      var
        head   = document.head || document.getElementsByTagName('head')[0] ||
                 document.documentElement,
        script = document.createElement('script');
      id++;
      JSONP.__callbacks[id] = function () {
        // Clear any timeout.
        clearTimeout(timers[id]);
        // Delete all references.
        delete timers[id];
        delete JSONP.__callbacks[id];
        // Call the callback function with arguments.
        callback.apply(context, arguments);
      };
      // Build query string.
      url += (url.indexOf('?') === -1) ? '?' : '&';
      url += JSONP.settings.callbackName + '=' +
             encodeURIComponent('JSONP.__callbacks[' + id + ']');
      url += paramify(data);
      script.src = url;
      // Add script element to head, while preventing IE6 bug.
      head.insertBefore(script, head.firstChild);
      // Create timer if `timeout` setting is set.
      if (JSONP.settings.timeout > 0) {
        timers[id] = setTimeout(function () {
          // Delete all references.
          delete JSONP.__callbacks[id];
          delete timers[id];
          // Remove the script element from head.
          if (head && script.parentNode) head.removeChild(script);
          // Dereference the script.
          script = undefined;
        }, JSONP.settings.timeout);
      }
    },

    // Utility functions
    // -----------------

    // Run jsonp.js in *noConflict* mode, returning the `JSONP` variable to its
    // previous owner.
    // Returns a reference to `JSONP`.
    noConflict: function () {
      root.JSONP = previousJSONP;
      return this;
    }

  };

}(this));