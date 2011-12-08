     __                                    __           
    /\_\    ____   ___    ___   _____     /\_\    ____  
    \/\ \  /',__\ / __`\/' _ `\/\ '__`\   \/\ \  /',__\ 
     \ \ \/\__, `\\ \L\ \\ \/\ \ \ \L\ \__ \ \ \/\__, `\
     _\ \ \/\____/ \____/ \_\ \_\ \ ,__/\_\_\ \ \/\____/
    /\ \_\ \/___/ \/___/ \/_/\/_/\ \ \/\/_/\ \_\ \/___/ 
    \ \____/                      \ \_\   \ \____/      
     \/___/                        \/_/    \/___/       


[jsonp.js][] is a library that provides simple [JSONP][] support for JavaScript.

## Standard Usage

```
JSONP.get(url[, data][, callback][, context])
```

## Configuration

```
JSONP.settings.callbackName = "callback"
JSONP.settings.timeout      = 0
```

## Miscellaneous

```
JSONP.noConflict()
```

```
JSONP.VERSION
```

## TODO

* Create and maintain unit tests.

## Further Information

If you want more information or examples of using this library please visit the
project's homepage;

http://neocotic.com/jsonp.js

[jsonp.js]: http://neocotic.com/jsonp.js
[jsonp]: http://en.wikipedia.org/wiki/JSONP