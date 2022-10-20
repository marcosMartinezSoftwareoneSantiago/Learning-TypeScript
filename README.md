# Learning-TypeScript
A TypeScript folder for all the exercises I am doing to practice it

# Ejercicio 1
Crea un proyecto con typescript en el que declares dos variables, una para almacenar una cadena de texto y otra para almacenar un número con decimales. Inicializa las variables con algún tipo de valor. Si el número es mayor o igual a 10 imprime por las consola “El número es mayor o igual a 10” , caso contrario, “El número es menor de 10”. Utiliza para ello el operador condicional ternario

# Ejercico 2
Crea un proyecto con typescript en el que declares un array que almacene valores de nombres de personas. Recorre en un bucle el array e imprímelo en el navegador a través de una lista desordenada.

# Ejercicio 3
Crea una aplicación con typescript. Declara e inicializa una variable "numero" con algún valor numérico. Crea una función que reciba como argumento dicho numero y lo retorne. Imprime la función por la consola para ver el número en el navegador

# Ejercico 4
Crea una tupla con typescript que admita valores: string, number, string

Crea tres variables de los tipos correspondientes para luego poder inicializar la tupla con esos valores. Imprime los valores de la tupla por consola a través de un bucle

# Ejercicio 5
Crea una aplicación con typescript. Declara un tipo enum con tres valores posibles:

BLANCO, NEGRO Y ROJO. Declara un array con dos objetos donde una clave para el primer objeto sea preferencias y el valor alguno de los posibles valores del enumerado y la otra un nombre con algún valor cualquiera y la clave para el segundo objetos sea también preferencias con alguno de los posibles valores del enumerado y otra clave sea el nombre con algún valor que tu quieras.

Imprime en una estructura de lista desordenada de html los nombres y preferencias de los dos usuarios

# Ejercicio 6
Crea una aplicación que a través de ventanas prompt() pida al usuario su nombre, primer apellido e email. Pasa estos tres valores como argumentos a una función que no devuelva nada ( sin retorno ) e imprime los tres datos concatenados en el navegador a través de una etiqueta de párrafo.

# Ejercico 7
Crea una aplicación con javascript que tenga una función para calcular el salario de los empleados de la empresa. Dicho salario se calcula con la siguiente fórmula:

salario = sueldo bruto - (irpf + ss)

El irpf y el descuento de las cuotas a la seguridad social son porcentajes que han de restarse al sueldo bruto. tanto el sueldo bruto como los % ha descontar han de introducirse a través de una ventana prompt(). La fórmula para el cálculo deben de crearse a través de una función que tenga como parámetros el sueldo bruto, el irpf y los descuentos relacionados con los pagos de cuotas a la seguridad social y devuelva el salario.

Imprime el salario del empleado en el navegador ( puedes usar document.write() )

(No tienes porque usar el 100% de typescript, úsalo en la medida de lo posible)

# Ejercicio 8
Crea una aplicación con typescript donde uses un tipo de dato literal ( un tipo creado por ti) que sea tipo 'device' con tres posibles valores 'mobile', 'desktop' u 'labtop' .

Crea un array de personas que tenga dos objetos con claves 'username', 'email' y 'device'.

Los valores asociados a esas claves te los puedes inventar a excepción de la clase device que va a ser de tipo 'device' por lo tanto solo va a poder tener tres valores posibles ('mobile', 'desktop' o 'labtop').

Crea una función que sirva para imprimir los datos de los dos usuarios (los dos objetos) en el navegador.

# Ejercicio 9
Crea un formulario html donde tengas dos inputs para introducir un número en cada uno. Obtén los valores de los números y , usando typescript, genera un evento que cuando sea enviado el formulario capture los valores de los inputs y envíe en un alert la suma.

# Ejercicio 10
Crea un proyecto con typescript con una función de tipo flecha que sirva para calcular un número aleatorio entre dos números que serán seleccionados por un usuario a través de un formulario. Imprime el número aleatorio por la consola del navegador y usa typescript en la medida de los posible

# Ejercicio 11
Crea una función que reciba como parámetros dos funciones de callback que simplemente envíen un alert con un mensaje "primer callback" y segundo "callback" respectivamente.

# Ejercicio 12
Crea un proyecto con typescript donde en el html tengas un botón que llame a una función de flecha creada con typescript que imprima un "ejecutando una arrow function" dentro de una alerta

# Ejercicio 13
Crea una aplicación con typescript que valide un campo username dentro de un formulario de tal modo que si el usuario no introduce nada en ese campo y presiona el botón de enviar en el formulario, aparezca una ventana emergente con el texto "El campo username es obligatorio" y si introduce un número en vez de un texto "El campo username no puede ser un número"

Para la funcionalidad de validar que el campo no esté vacío crearás una arrow function "emptyFieldValidator"  y para la validación de campo no numérico otra llamada "notANumberValidator"

# Ejercicio 14
Crea un proyecto con typescript que tenga un formulario donde a través de un input se pueda introducir y enviar texto. Crea un evento "keyup" (al soltar una tecla), que vaya imprimiendo el texto que se va introduciendo en la caja de texto dentro de otro elemento html un div situado debajo del formulario.

(Para incrustar texto puedes utilizar la función de javascript textContent o bien innerHTML)
