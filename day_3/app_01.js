const buf1 = new Buffer.from('abcdef!');
console.log("buf1_ascii: ", buf1);
console.log("buf1_str: ", buf1.toString());

const buf2 = new Buffer.from('8b76fde713ce', 'base64');
console.log("\n buf2_binary: ",buf2);

const buf4 = new Buffer.from("AC cooled");
console.log("array buffer: ",  buf4[0], buf4);  // accessing the 1st position of buf
console.log("buf4: ",  typeof buf4);

console.log("\n\nutf8 supported: ", Buffer.isEncoding('utf8'));
console.log("base64 encoding supported: ", Buffer.isEncoding("base64"));
