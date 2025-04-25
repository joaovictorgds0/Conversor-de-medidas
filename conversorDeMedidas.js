const medida = prompt("Insira uma medida em metros:")

const unidade = prompt(
    "para qual unidade de medida deseja converter?" +
    "\n1. Real (R$)" +
    "\n2. Dolar ($)" +
    "\n3. Euro (€)" +
    "\n4. Iene (¥)" +
    "\n5. Dolar australiano (A$)"
)

switch (unidade) {
    case "1":
        alert("Resultado: " + valor + "R$ = " + valor * 1 + "R$") 
        break
    case "2":
        alert("Resultado: " + valor + "R$ = " + valor * 5,68 + "$")
        break
    case "3":
        alert("Resultado: " + valor + "R$ = " + valor * 6,37 + "€")
        break
    case "4":
        alert("Resultado: " + valor + "R$ = " + valor * 0,39 + "¥")
        break
    case "5":
        alert("Resultado: " + valor + "R$ = " + valor * 3,63 + "A$")
        break
    default:
        alert("Opção inválida.")
}
