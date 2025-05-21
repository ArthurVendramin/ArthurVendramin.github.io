const pedidos = [
    { escola: "Escola do Sol", item: "Cadernos", quantidade: 20 },
    { escola: "Escola Esperança", item: "Livros", quantidade: 12 },
    { escola: "Escola Nova Geração", item: "Mochilas", quantidade: 2 }
  ];
  
  window.onload = () => {
    const lista = document.getElementById("lista-pedidos");
    lista.innerHTML = "";
  
    pedidos.forEach(pedido => {
      const item = document.createElement("li");
      item.textContent = `${pedido.escola}: ${pedido.item} (${pedido.quantidade} unidades)`;
      lista.appendChild(item);
    });
  };