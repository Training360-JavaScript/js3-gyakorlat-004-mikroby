const checkVisa = (cardNumber) =>{
  const pattern=/^4\d{15}$/;
  // const pattern=/^(\d{4} ){3}\d{4}$/;

  return pattern.test(cardNumber);
};

export default checkVisa;
