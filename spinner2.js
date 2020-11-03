var i = 0;
const line = ['\r|   ', '\r|   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   '];
const spinner = (arr) => {
  setTimeout(()=> {
    process.stdout.write(arr[i]);
    i ++;
    if (i < arr.length) spinner(arr);
  }, 100 + i * 200)
}

spinner(line);