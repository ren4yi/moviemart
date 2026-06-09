import { produtos } from "@/data/products";

const carrinho = []

function addCarrinho(idFilme) {
  const filme = produtos.find((item) => item.id === idFilme)
  if (filme) {
      carrinho.push({
        ...filme,
        precoTotal:  filme.preco,
      })
    }
  }


export { carrinho, addCarrinho }