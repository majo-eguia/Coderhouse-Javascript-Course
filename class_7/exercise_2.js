/*
Si no existe un valor con la clave “comidas” en el localStorage,
 crear un array vacío y cargarlo de forma dinámica, solicitando
  al usuario nombres de comida de forma consecutiva,  hasta cinco (5) veces. 
  Luego almacenarlo con dicha clave. Si existe, recorrer el array, e informar 
  por alerta el menú cargado.

Al almacenar un array en storage con setItem, se guarda como cadena.
 Por ende, es necesario usar split(“,”) al hacer getItem,
  para obtener lo almacenado en formato  array.
  
*/
