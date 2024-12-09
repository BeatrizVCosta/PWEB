export function gerarTabela(elementoId, dados, colunas) {
    console.log('gerarTabela chamada');
    const container = document.getElementById(elementoId);

    if (!dados || !Array.isArray(dados) || dados.length === 0) {
        container.innerHTML = '<p>Nenhum dado disponível.</p>';
        return;
    }

    const tabela = document.createElement('table');

    // Cabeçalho
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    colunas.forEach(coluna => {
        const th = document.createElement('th');
        th.textContent = coluna.charAt(0).toUpperCase() + coluna.slice(1);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    tabela.appendChild(thead);

    // Corpo
    const tbody = document.createElement('tbody');
    dados.forEach(item => {
        const row = document.createElement('tr');
        colunas.forEach(coluna => {
            const td = document.createElement('td');
            td.textContent = item[coluna] || '-';
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    tabela.appendChild(tbody);

    // Renderizar tabela
    container.innerHTML = '';
    container.appendChild(tabela);
}
