     __                                    __           
    /\_\    ____   ___    ___   _____     /\_\    ____  
    \/\ \  /',__\ / __`\/' _ `\/\ '__`\   \/\ \  /',__\ 
     \ \ \/\__, `\\ \L\ \\ \/\ \ \ \L\ \__ \ \ \/\__, `\
     _\ \ \/\____/ \____/ \_\ \_\ \ ,__/\_\_\ \ \/\____/
    /\ \_\ \/___/ \/___/ \/_/\/_/\ \ \/\/_/\ \_\ \/___/ 
    \ \____/                      \ \_\   \ \____/      
     \/___/                        \/_/    \/___/       


[jsonp.js][] is a library that provides simple [JSONP][] support for JavaScript.

## Get

``` javascript
JSONP.get(url[, data][, callback][, context])
```

## Configuration

``` javascript
JSONP.settings.callbackName = "callback"
JSONP.settings.timeout      = 0
```

## Miscellaneous

``` javascript
JSONP.noConflict()
JSONP.VERSION
```

## TODO

* Create and maintain unit tests.

## Bugs

If you have any problems with this library or would like to see the changes
currently in development you can do so here;

https://github.com/neocotic/jsonp.js/issues

Developers should run all tests and ensure they pass before submitting a pull
request.

## Questions?

Take a look at the documentation to get a better understanding of what the code
is doing.

If that doesn't help, feel free to follow me on Twitter, [@neocotic][].

However, if you want more information or examples of using this library please
visit the project's homepage;

http://neocotic.com/jsonp.js

[@neocotic]: https://twitter.com/#!/neocotic
[jsonp.js]: http://neocotic.com/jsonp.js
[jsonp]: http://en.wikipedia.org/wiki/JSONP