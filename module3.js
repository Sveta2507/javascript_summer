"use strict";

// обЪекты - cостоят из методов и свойств

const ok = {
    key_1: "value",
    key_2: 30,
    key_3: true,
    toShowKeys() {
        console.log(this.key_1, this.key_2, this.key_3, this.key_4);
    }
};

console.log(ok);
console.log(ok.key_1);
console.log(ok.key_2);
console.log(ok.key_3);
ok.toShowKeys();
ok.key_1 = "javascript";
ok.toShowKeys();
ok.key_4 = "misery";
ok.toShowKeys();
delete ok.key_4;
ok.toShowKeys();

