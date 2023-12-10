// Tu archivo donde defines la función formatPrice

export const formatPrice = (amount, currency) => {
  let currencyCode = "USD"; // Por defecto, el formato será en USD
  let locale = "en-US"; // Por defecto, la configuración será para USD

  // Cambiar el código de moneda y la configuración de acuerdo con la moneda deseada
  if (currency === "COP") {
    currencyCode = "COP";
    locale = "es-CO";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};

// Ejemplo de uso
const amountInUSD = 50; // Monto en dólares
const amountInCOP = 250000; // Monto en pesos colombianos

const formattedUSD = formatPrice(amountInUSD, "USD"); // Formatea a dólares
const formattedCOP = formatPrice(amountInCOP, "COP"); // Formatea a pesos colombianos

console.log(formattedUSD); // Muestra el monto formateado en dólares
console.log(formattedCOP); // Muestra el monto formateado en pesos colombianos
