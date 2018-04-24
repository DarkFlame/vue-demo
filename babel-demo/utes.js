(function () {
    "use strict";
    console.log(this)
    var global = (function () { return this || (1,eval)("this"); })();
})();
"use strict";
// console.log((1,eval)("this"))
