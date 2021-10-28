$(() => {
    function carregaDados() {
        $.ajax({
            method: "GET",
            url: "https://localhost:5001/Conta"
        })
            .done((data) => {
                if (Array.isArray(data)) {
                    data.forEach((item) => {
                        $("#tblContas tbody").append(`<tr>
                            <td>${item.numero}</td>
                            <td>${item.agencia}</td>
                            <td>${item.tipo === 0 ? "Conta Corrente" : item.tipo === 1 ? "Poupança" : "Investimento"}</td>
                            <td>${new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.saldo)}</td>
                            <td>${item.clienteTitular.nome + ", CPF: " + item.clienteTitular.cpf + ", Telefone: " + item.clienteTitular.telefone + ", Email: " + item.clienteTitular.email}</td>
                            <td style="width: 50px"><button type="button" class="btn btn-success">Depositar</button></td>
                            <td style="width: 50px"><button type="button" class="btn btn-danger">Sacar</button></td>
                        </tr>`)
                    })
                }
            })
            .fail((jqXHR, textStatus, msg) => {
                alert(msg);
            })
    }

    carregaDados()
})