const sequence = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for(let i = 0; i < sequence.length; i++) {
  setTimeout(()=>{
    process.stdout.write(`\r${sequence[i]}   `);
  },(i + 1) * 100);
}