const checkIP = (IPaddress) => {
  const pattern = /^(\d+\.){3}\d+$/;

  if (!pattern.test(IPaddress)) {
    return false;
  }

  return IPaddress.split('.').map(item => item < 256 ? true : false)
    .every(item => item);
};

export default checkIP;

// console.log(checkIP('25.255.0.251'));
