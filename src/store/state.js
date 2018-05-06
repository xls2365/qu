let defaulCity = '上海'
try {
  if (localStorage.city) {
    defaulCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaulCity
}
