import countObjectProperties from '../helpers/count-object-properties';

// 1.4. ./components/table.ts
// 1.4.1. Sukurkite tipą TableProps:
// title: string
// columns: Type
// rowsData: Type[]
// 1.4.2. Sukurkite savybes:
// public htmlElement: HTMLTableElement;
// private props: TableProps;
// private tbody: HTMLTableSectionElement;
// private thead: HTMLTableSectionElement;
// 1.4.3. Sukurkite konstruktorių, kuris:
// sukurtų pradinius htmlElement,
// thead ir tbody elementus
// iškviestų metodą initialize
    // 1.4.3. priimkite TableProps tipo duomenis props
    // patikrintų props duomenų suderinamumą -
    // kiekvienos eilutės elementų skaičius turi būti lygus stulpelių skaičiui
    // Tam sukurkite papildomą metodą: checkColumnsCompatability
    // priskirkite gautus props į savybę this.props
    // sukurkite pradinius htmlElement, thead ir tbody elementus
    // sukurkite tuščią metodą initialize ir jį iškvieskite
// 1.4.4. Sukurtite metodą initialize, kuriame:
// atliktumete lentelės antraštės atvaizdavimą
// atliktumetė lentelės duomenų eilučių atvaizdavimą
// apjungtumėte elementus

// duomenys atvaizduojami objektais ir duomenų savybės turi derėti su hederiais
// kiekviena eilutė turi būti pateikta objektu, negali būti pateikta masyvu,
// kad nesusimaišytų vietomis. Kiekvienos eilutės duomenys įskaitant hederių turi būti
// tokios pačios struktūros - susaistytos pagal pavadinimus.

// type TableRowData = {
//     id: string,
//     [key: string]: string,
// };

// type TableProps<Type extends TableRowData> = {
//     // 1.4.1.
//     title: string,
//     columns: Type,
//     rowsData: Type[],
// };

type RowData = {
  id: string;
  [key: string]: string;
};

export type TableProps<Type> = {
  // 1.4.1.
  title: string;
  columns: Type;
  rowsData: Type[];
};

class Table<Type extends RowData> {
  // 1.4.2.
  public htmlElement: HTMLTableElement;

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  // 1.4.3.
  public constructor(props: TableProps<Type>) {
    // priskirkite gautus props į savybę this.props
    this.props = props;
    this.checkColumnsCompatability();

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  // 1.4.3. priimkite TableProps tipo duomenis props
  // patikrintų props duomenų suderinamumą -
  // kiekvienos eilutės elementų skaičius turi būti lygus stulpelių skaičiui
  // Tam sukurkite papildomą metodą: checkColumnsCompatability
  private checkColumnsCompatability = (): void => {
    const { rowsData, columns } = this.props;

    if (this.props.rowsData.length === 0) return;
    const columnCount = countObjectProperties(columns);

    const columnsCompatableWithRowsData = rowsData.every((row) => {
      const rowCellsCount = countObjectProperties(row);

      return rowCellsCount === columnCount;
    });

    if (!columnsCompatableWithRowsData) {
      throw new Error('Nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

  // 1.4.3. sukurkite pradinį htmlElement
  private initializeHead = (): void => {
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray
      .map((header) => `<th>${header}</th>`)
      .join('');

    this.thead.className = 'bg-primary bg-gradient text-white border border-primary border-3';
    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  // 1.4.3. sukurkite pradinį tbody
  private initializeBody = (): void => {
    const { rowsData, columns } = this.props;

    document.body.style.backgroundColor = '#bed8ff';
    this.tbody.className = 'border border-primary border-3';
    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData.map((rowData) => {
      const rowHtmlElement = document.createElement('tr');

      const cellsHtmlString = Object.keys(columns)
        .map((key) => `<td>${rowData[key]}</td>`)
        .join(' ');

      rowHtmlElement.innerHTML = cellsHtmlString;

      return rowHtmlElement;
    });

    this.tbody.append(...rowsHtmlElements);
  };

  // 1.4.4. Sukurtite metodą initialize, kuriame:
  // atliktumete lentelės antraštės atvaizdavimą
  // atliktumetė lentelės duomenų eilučių atvaizdavimą
  // apjungtumėte elementus
  private initialize = (): void => {
    this.initializeHead();
    this.initializeBody();

    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(this.thead, this.tbody);
  };
}

export default Table;
