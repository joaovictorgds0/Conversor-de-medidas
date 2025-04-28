const valor = prompt("Insira um valor em R$:")

const unidade = prompt(
    "Para qual moeda deseja converter?" +
    "\n1. Real (R$)" +
    "\n2. Dólar ($)" +
    "\n3. Euro (€)" +
    "\n4. Iene (¥)" +
    "\n5. Dólar australiano (A$)"
)

switch (unidade) {
    case "1":
        alert("Resultado: " + valor + "R$ = " + valor * 1 + "R$") 
        break
    case "2":
        alert("Resultado: " + valor + "R$ = " + valor / 5.68 + "$")
        break
    case "3":
        alert("Resultado: " + valor + "R$ = " + valor / 6.37 + "€")
        break
    case "4":
        alert("Resultado: " + valor + "R$ = " + valor / 0.39 + "¥")
        break
    case "5":
        alert("Resultado: " + valor + "R$ = " + valor / 3.63 + "A$")
        break
    default:
        alert("Opção inválida.")
        }