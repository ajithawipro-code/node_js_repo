import boxen from "boxen";

const message1="I am using my first extrenal module!";
const title="Hurray!!!";
const message2="unicorns love rainbows";

console.log(boxen(message1, {title:title, backgroundColor:"yellow",borderColor:"greenBright"}));

console.log(boxen(message1, {title:title, borderStyle:"singleDouble",backgroundColor:"blue",borderColor:"magentaBright"}));

console.log(boxen(message2, {title:title, borderStyle:"round", backgroundColor:"green",borderColor:"yellow"}));



