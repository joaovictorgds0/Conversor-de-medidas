const medida = prompt("Insira uma medida em metros:")

const unidade = prompt(
    "para qual unidade de medida deseja converter?" +
    "\n1. milimetro (mm)" +
    "\n2. centimetro (cm)" +
    "\n3. decimetro (dm)" +
    "\n4. decametro (dam)" +
    "\n5. hectometro (hm)" +
    "\n6. quilometros (km)"
)

switch (unidade) {
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm") 
        break
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
        break
    default:
        alert("Opção inválida.")
}
