const order = {};

// if (
//   order &&
//   order.customer &&
//   order.customer.address &&
//   !order.customer.address.city
// ) {
//   console.log("City is required");
// }

let checkCity = order?.customer?.address?.city;

if (checkCity) {
  console.log(checkCity);
} else {
  console.log("City is required");
}
