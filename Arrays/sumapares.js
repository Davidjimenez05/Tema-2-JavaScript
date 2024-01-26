var Numeros = [];

        function add() {
            var n = parseFloat(document.getElementById("n").value);
            Numeros.push(n);
            document.getElementById("resultado").innerHTML = Numeros;
        }

        function suma() {
            var s = 0;
            for (var i = 0; i < Numeros.length; i++) {
                if (Numeros[i] % 2 === 0) {
                    s += Numeros[i];
                }
            }
            document.getElementById("resultado").innerHTML = s;
        }