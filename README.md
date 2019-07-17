# Angular Weather

## Review the Weather


- Barra de accesos rápidos con cuatro (04) ciudades.
- Buscador on validaciones, ejecuta la llamada al api a medida que el usuario va escribiendo.
- Botón de búsqueda.
- Sección con el clima de la ubicación seleccionada. En un principio se muestra el clima de la ubicación según la IP del usuario.
- Si la ubicación seleccionada es diferente de las ciudades en la barra de accesos rápidos, se muestra un botón para añadirla.
- Se puede elegir visualizar las temperaturas en Grados Celsius o Grados Farenheit.
- Se puede visualizar el detalle del pronóstico para los siguientes días.
- Barra inferior con la hora actulizandose segundo a segundo.
- Loader para mejorar la experiencia del usuario.
- Manejo de errores.


## known issue
El api retorna 400 si no encuentra una ubicación, aunque esto es manejado a nivel visual, el switchMap del input se crashea y no ejecuta las siguientes llamadas si el usuario continua escribiendo. En este caso es necesario presionar Enter o el botón de búsqueda.


URL: https://angular-weather-mc.herokuapp.com/
