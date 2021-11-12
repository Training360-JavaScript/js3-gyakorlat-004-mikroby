const checkMac = (MACaddress) => {  
  const pattern = /^([a-fA-F0-9]{2}(:|-)){5}[a-fA-F0-9]{2}$/;

  if (!pattern.test(MACaddress)) {
    return false;
  }

  return MACaddress.split('').filter(item => item===':' || item==='-')
    .every((item,index,array) => item===array[0]);
};

export default checkMac;

// console.log(checkMac('a1:ff:ff:ff:ff:ff'));