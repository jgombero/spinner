const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let delay = 0; delay < spinner.length; delay++) {
  
  setTimeout(() => {
    process.stdout.write(`\r${spinner[delay]}   `);
  }, (delay * 200 + 100));
}