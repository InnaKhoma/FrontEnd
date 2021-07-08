const elements = document.querySelectorAll('td[data-id="revenue-value"]');

const totalValue = convertToShort(calculateTotalValue(elements));

summ.insertAdjacentText('beforeend', ` ${totalValue}`);

